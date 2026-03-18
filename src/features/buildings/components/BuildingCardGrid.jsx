import {
    FiChevronRight,
    FiEdit2,
    FiHome,
    FiMapPin,
    FiTrash2,
} from "react-icons/fi";
import { useState } from "react";
import { useNavigate } from "react-router";
import AddBuildingModal from "./AddBuildingModal";

const buildings = Array.from({ length: 9 }, (_, index) => ({
    id: index + 1,
    name: "Conditioning House",
    city: "Bradford",
    address: "123 City Centre, Bradford BD1 1AB",
    properties: 52,
    image:
        "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&w=240&q=80",
}));

const BuildingCard = ({ building, onEdit }) => {
    const navigate = useNavigate();

    return (
        <article className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm">
            <div className="mb-3 flex items-start gap-3">
                <img
                    src={building.image}
                    alt={building.name}
                    className="h-20 w-20 shrink-0 rounded-xl object-cover"
                    loading="lazy"
                />

                <div className="min-w-0 flex-1">
                    <div className="flex items-start justify-between gap-2">
                        <h3 className="truncate text-lg font-semibold text-slate-800">{building.name}</h3>
                        <button
                            type="button"
                            aria-label="Delete building"
                            className="cursor-pointer inline-flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-red-50 text-red-400 transition hover:bg-red-100 hover:text-red-500"
                        >
                            <FiTrash2 className="text-sm" />
                        </button>
                    </div>

                    <p className="mt-1 flex items-center gap-1 text-sm text-blue-500">
                        <FiMapPin className="text-xs" />
                        {building.city}
                    </p>

                    <p className="mt-3 text-sm text-slate-500">{building.address}</p>
                    <p className="mt-1.5 flex items-center gap-1 text-sm text-slate-500">
                        <FiHome className="text-xs" />
                        {building.properties} Properties
                    </p>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-2">
                <button
                    type="button"
                    onClick={() => onEdit(building)}
                    className="cursor-pointer inline-flex items-center justify-center gap-2 rounded-lg bg-slate-100 px-3 py-2 text-sm font-medium text-slate-600 transition hover:bg-slate-200"
                >
                    <FiEdit2 className="text-xs" />
                    Edit
                </button>

                <button
                    type="button"
                    onClick={() => navigate(`/buildings/${building.id}`)}
                    className="cursor-pointer inline-flex items-center justify-center gap-1 rounded-lg bg-blue-500 px-3 py-2 text-sm font-medium text-white transition hover:bg-blue-600"
                >
                    Open
                    <FiChevronRight className="text-xs" />
                </button>
            </div>
        </article>
    );
};

const BuildingCardGrid = () => {
    const [editingBuilding, setEditingBuilding] = useState(null);

    return (
        <>
            <section className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
                {buildings.map((building) => (
                    <BuildingCard
                        key={building.id}
                        building={building}
                        onEdit={setEditingBuilding}
                    />
                ))}
            </section>

            <AddBuildingModal
                isOpen={Boolean(editingBuilding)}
                onClose={() => setEditingBuilding(null)}
                mode="edit"
                initialData={editingBuilding}
            />
        </>
    );
};

export default BuildingCardGrid;
