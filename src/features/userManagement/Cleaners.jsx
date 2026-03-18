import { useMemo, useState } from "react";
import MiniAdminHeader from "./components/MiniAdminHeader";
import AddCleanerModal from "./components/AddCleanerModal";
import CleanersTable from "./components/CleanersTable";

const MOCK_CLEANERS = Array.from({ length: 13 }, (_, index) => ({
  id: index + 1,
  memberNo: "0123456",
  memberName: "Sarah Khan",
  phoneNumber: "0123456789",
  email: "sarah.khan@email.com",
  location: "Bradford",
  tasksCompleted: 145,
}));

const Cleaners = () => {
  const [search, setSearch] = useState("");
  const [modalState, setModalState] = useState({
    isOpen: false,
    mode: "add",
    cleaner: null,
  });

  const filteredCleaners = useMemo(() => {
    const query = search.toLowerCase().trim();

    if (!query) {
      return MOCK_CLEANERS;
    }

    return MOCK_CLEANERS.filter((cleaner) =>
      [
        cleaner.memberNo,
        cleaner.memberName,
        cleaner.phoneNumber,
        cleaner.email,
        cleaner.location,
      ].some((value) => value.toLowerCase().includes(query))
    );
  }, [search]);

  const handleCloseModal = () => {
    setModalState({
      isOpen: false,
      mode: "add",
      cleaner: null,
    });
  };

  const handleOpenAddModal = () => {
    setModalState({
      isOpen: true,
      mode: "add",
      cleaner: null,
    });
  };

  const handleCleanerAction = (action, cleaner) => {
    if (action === "Delete") {
      console.log("Delete cleaner", cleaner);
      return;
    }

    setModalState({
      isOpen: true,
      mode: action.toLowerCase(),
      cleaner,
    });
  };

  const handleSubmitCleaner = (payload) => {
    console.log("Cleaner modal submit", payload);
    handleCloseModal();
  };

  return (
    <main className="min-h-screen bg-slate-100 p-3 sm:p-5 lg:p-6">
      <MiniAdminHeader
        search={search}
        onSearch={setSearch}
        onCreate={handleOpenAddModal}
        subtitle="Manage your cleaners & staff"
        listTitle="All Cleaners list"
        buttonLabel="Add Cleaner"
      />

      <CleanersTable cleaners={filteredCleaners} onActionSelect={handleCleanerAction} />

      <AddCleanerModal
        isOpen={modalState.isOpen}
        onClose={handleCloseModal}
        onSubmit={handleSubmitCleaner}
        mode={modalState.mode}
        initialData={modalState.cleaner}
      />
    </main>
  );
};

export default Cleaners;
