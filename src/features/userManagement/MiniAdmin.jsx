import { useMemo, useState } from "react";
import MiniAdminHeader from "./components/MiniAdminHeader";
import MiniAdminTable from "./components/MiniAdminTable";
import AddMiniAdminModal from "./components/AddMiniAdminModal";

const MOCK_MINI_ADMINS = Array.from({ length: 13 }, (_, index) => ({
	id: index + 1,
	memberNo: "0123456",
	name: "Sarah Khan",
	phone: "0123456789",
	email: "sarah.khan@email.com",
	addedOn: "12/8/2024",
}));

const MiniAdmin = () => {
	const [search, setSearch] = useState("");
	const [modalState, setModalState] = useState({
		isOpen: false,
		mode: "add",
		admin: null,
	});

	const filteredAdmins = useMemo(() => {
		const query = search.toLowerCase().trim();

		if (!query) {
			return MOCK_MINI_ADMINS;
		}

		return MOCK_MINI_ADMINS.filter((admin) =>
			[admin.memberNo, admin.name, admin.phone, admin.email].some((value) =>
				value.toLowerCase().includes(query)
			)
		);
	}, [search]);

	const handleCloseModal = () => {
		setModalState({
			isOpen: false,
			mode: "add",
			admin: null,
		});
	};

	const handleAdminAction = (action, admin) => {
		if (action === "Delete") {
			console.log("Delete mini admin", admin);
			return;
		}

		setModalState({
			isOpen: true,
			mode: action.toLowerCase(),
			admin,
		});
	};

	return (
		<main className="min-h-screen bg-slate-100 p-3 sm:p-5 lg:p-6">
			<MiniAdminHeader
				search={search}
				onSearch={setSearch}
				onCreate={() => setModalState({ isOpen: true, mode: "add", admin: null })}
			/>

			<MiniAdminTable admins={filteredAdmins} onActionSelect={handleAdminAction} />

			<AddMiniAdminModal
				isOpen={modalState.isOpen}
				onClose={handleCloseModal}
				mode={modalState.mode}
				initialData={modalState.admin}
				onSubmit={(payload) => {
					console.log(payload);
					handleCloseModal();
				}}
			/>
		</main>
	);
};

export default MiniAdmin;
