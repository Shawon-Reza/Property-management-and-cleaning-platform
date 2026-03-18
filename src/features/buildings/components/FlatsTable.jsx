import { FiChevronRight, FiEdit2, FiMenu, FiTrash2, FiUsers } from "react-icons/fi";
import { useState } from "react";
import { LuBed } from "react-icons/lu";
import { useNavigate, useParams } from "react-router";
import AddPropertyModal from "./AddPropertyModal";

const DEFAULT_FLATS = Array.from({ length: 10 }, (_, index) => ({
  id: index + 1,
  name: "Flat 319",
  beds: "2 Beds(1 King, 1 Single)",
  people: "5 People",
}));

const FlatRow = ({ flat, buildingId, onEdit }) => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 rounded-xl border border-slate-200 bg-white px-4 py-3.5 shadow-sm sm:flex-nowrap">
      <FiMenu className="shrink-0 cursor-grab text-slate-300" />

      <span className="min-w-20 text-sm font-semibold text-slate-800">{flat.name}</span>

      <div className="flex flex-1 flex-wrap items-center gap-x-6 gap-y-1">
        <p className="flex items-center gap-2 text-xs text-slate-500 sm:text-sm">
          <LuBed className="shrink-0 text-slate-400" />
          {flat.beds}
        </p>

        <p className="flex items-center gap-2 text-xs text-slate-500 sm:text-sm">
          <FiUsers className="shrink-0 text-slate-400" />
          {flat.people}
        </p>
      </div>

      <div className="ml-auto flex shrink-0 items-center gap-2">
        <button
          type="button"
          aria-label="Edit flat"
          onClick={() => onEdit(flat)}
          className="cursor-pointer inline-flex h-8 w-8 items-center justify-center rounded-md text-slate-400 transition hover:bg-slate-100 hover:text-slate-600"
        >
          <FiEdit2 className="text-sm" />
        </button>

        <button
          type="button"
          aria-label="Delete flat"
          className="cursor-pointer inline-flex h-8 w-8 items-center justify-center rounded-md bg-red-50 text-red-400 transition hover:bg-red-100 hover:text-red-500"
        >
          <FiTrash2 className="text-sm" />
        </button>

        <button
          type="button"
          onClick={() => navigate(`/buildings/${buildingId}/flats/${flat.id}`)}
          className="cursor-pointer inline-flex items-center gap-1 rounded-lg bg-blue-500 px-3 py-1.5 text-sm font-medium text-white transition hover:bg-blue-600"
        >
          Open
          <FiChevronRight className="text-xs" />
        </button>
      </div>
    </div>
  );
};

const FlatsTable = ({ flats: flatList = DEFAULT_FLATS }) => {
  const { buildingId } = useParams();
  const [editingFlat, setEditingFlat] = useState(null);

  return (
    <>
      <section className="space-y-3">
        {flatList.map((flat) => (
          <FlatRow
            key={flat.id}
            flat={flat}
            buildingId={buildingId}
            onEdit={setEditingFlat}
          />
        ))}
      </section>

      <AddPropertyModal
        isOpen={Boolean(editingFlat)}
        onClose={() => setEditingFlat(null)}
        mode="edit"
        initialData={editingFlat}
      />
    </>
  );
};

export default FlatsTable;
