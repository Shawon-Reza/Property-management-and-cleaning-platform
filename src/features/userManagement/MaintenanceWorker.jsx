import { useMemo, useState } from "react";
import MiniAdminHeader from "./components/MiniAdminHeader";
import AddCleanerModal from "./components/AddCleanerModal";
import MiniAdminTable from "./components/MiniAdminTable";

const MOCK_MAINTENANCE_WORKERS = Array.from({ length: 13 }, (_, index) => ({
  id: index + 1,
  memberNo: "0123456",
  name: "Sarah Khan",
  phone: "0123456789",
  email: "sarah.khan@email.com",
  addedOn: "12/8/2024",
}));

const MaintenanceWorker = () => {
  const [search, setSearch] = useState("");
  const [modalState, setModalState] = useState({
    isOpen: false,
    mode: "add",
    worker: null,
  });

  const filteredWorkers = useMemo(() => {
    const query = search.toLowerCase().trim();

    if (!query) {
      return MOCK_MAINTENANCE_WORKERS;
    }

    return MOCK_MAINTENANCE_WORKERS.filter((worker) =>
      [worker.memberNo, worker.name, worker.phone, worker.email].some((value) =>
        value.toLowerCase().includes(query)
      )
    );
  }, [search]);

  const handleCloseModal = () => {
    setModalState({
      isOpen: false,
      mode: "add",
      worker: null,
    });
  };

  const handleWorkerAction = (action, worker) => {
    if (action === "Delete") {
      console.log("Delete maintenance worker", worker);
      return;
    }

    setModalState({
      isOpen: true,
      mode: action.toLowerCase(),
      worker,
    });
  };

  const handleSubmitWorker = (payload) => {
    console.log("Maintenance worker modal submit", payload);
    handleCloseModal();
  };

  return (
    <main className="min-h-screen bg-slate-100 p-3 sm:p-5 lg:p-6">
      <MiniAdminHeader
        search={search}
        onSearch={setSearch}
        onCreate={() => setModalState({ isOpen: true, mode: "add", worker: null })}
        subtitle="Manage your cleaners & staff"
        listTitle="All Maintenance Worker list"
        buttonLabel="Add Maintenance Worker"
      />

      <MiniAdminTable
        admins={filteredWorkers}
        emptyLabel="maintenance workers"
        onActionSelect={handleWorkerAction}
      />

      <AddCleanerModal
        isOpen={modalState.isOpen}
        onClose={handleCloseModal}
        onSubmit={handleSubmitWorker}
        mode={modalState.mode}
        initialData={modalState.worker}
        entityLabel="Maintenance Worker"
      />
    </main>
  );
};

export default MaintenanceWorker;
