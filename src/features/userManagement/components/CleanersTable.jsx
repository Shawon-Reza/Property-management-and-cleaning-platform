import { useEffect, useRef, useState } from "react";
import { FiMoreVertical } from "react-icons/fi";

const ACTIONS = ["View", "Edit", "Delete"];

const ActionsDropdown = ({ cleanerName, cleaner, isOpen, onToggle, onActionSelect }) => (
  <div className="relative">
    <button
      type="button"
      onClick={onToggle}
      className="cursor-pointer inline-flex h-8 w-8 items-center justify-center rounded-md transition hover:bg-slate-100"
      aria-label={`Actions for ${cleanerName}`}
      aria-expanded={isOpen}
      aria-haspopup="menu"
    >
      <FiMoreVertical />
    </button>

    {isOpen ? (
      <div className="absolute right-0 top-10 z-20 w-24 rounded-lg border border-slate-200 bg-white py-1 shadow-lg">
        {ACTIONS.map((action) => (
          <button
            key={action}
            type="button"
            onClick={() => onActionSelect(action, cleaner)}
            className="block w-full px-3 py-1.5 text-left text-sm text-slate-700 transition hover:bg-slate-100"
          >
            {action}
          </button>
        ))}
      </div>
    ) : null}
  </div>
);

const CleanerRow = ({ cleaner, isMenuOpen, onToggleMenu, onActionSelect }) => (
  <tr className="border-b border-slate-100 last:border-0 hover:bg-slate-50">
    <td className="px-4 py-3 text-sm text-slate-500">{cleaner.memberNo}</td>
    <td className="px-4 py-3 text-sm font-medium text-slate-700">{cleaner.memberName}</td>
    <td className="px-4 py-3 text-sm text-slate-500">{cleaner.phoneNumber}</td>
    <td className="px-4 py-3 text-sm text-slate-500">{cleaner.email}</td>
    <td className="px-4 py-3 text-sm font-medium text-blue-500">{cleaner.location}</td>
    <td className="px-4 py-3 text-sm text-slate-500">{cleaner.tasksCompleted}</td>
    <td className="px-4 py-3 text-sm text-slate-500">
      <ActionsDropdown
        cleanerName={cleaner.memberName}
        cleaner={cleaner}
        isOpen={isMenuOpen}
        onToggle={onToggleMenu}
        onActionSelect={onActionSelect}
      />
    </td>
  </tr>
);

const CleanerCard = ({ cleaner, isMenuOpen, onToggleMenu, onActionSelect }) => (
  <article className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm">
    <div className="mb-2 flex items-start justify-between gap-2">
      <div>
        <p className="font-semibold text-slate-800">{cleaner.memberName}</p>
        <p className="text-xs text-slate-400">#{cleaner.memberNo}</p>
      </div>
      <ActionsDropdown
        cleanerName={cleaner.memberName}
        cleaner={cleaner}
        isOpen={isMenuOpen}
        onToggle={onToggleMenu}
        onActionSelect={onActionSelect}
      />
    </div>

    <dl className="grid grid-cols-1 gap-y-2 text-xs sm:grid-cols-2 sm:gap-x-4">
      <div>
        <dt className="text-slate-400">Phone Number</dt>
        <dd className="font-medium text-slate-600">{cleaner.phoneNumber}</dd>
      </div>
      <div>
        <dt className="text-slate-400">Tasks Completed</dt>
        <dd className="font-medium text-slate-600">{cleaner.tasksCompleted}</dd>
      </div>
      <div>
        <dt className="text-slate-400">Location</dt>
        <dd className="font-semibold text-blue-500">{cleaner.location}</dd>
      </div>
      <div className="sm:col-span-2">
        <dt className="text-slate-400">Email</dt>
        <dd className="font-medium text-slate-600">{cleaner.email}</dd>
      </div>
    </dl>
  </article>
);

const CleanersTable = ({ cleaners, onActionSelect = () => {} }) => {
  const [openMenuId, setOpenMenuId] = useState(null);
  const tableRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!tableRef.current?.contains(event.target)) {
        setOpenMenuId(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleToggleMenu = (cleanerId) => {
    setOpenMenuId((current) => (current === cleanerId ? null : cleanerId));
  };

  const handleActionSelect = (action, cleaner) => {
    setOpenMenuId(null);
    onActionSelect(action, cleaner);
  };

  if (cleaners.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center rounded-xl border border-slate-200 bg-white py-20 text-slate-400">
        <p className="text-lg font-semibold">No cleaners found</p>
        <p className="mt-1 text-sm">Try another name, email, or phone</p>
      </div>
    );
  }

  return (
    <div ref={tableRef}>
      <div className="hidden overflow-x-auto rounded-xl border border-slate-200 bg-white p-2 shadow-sm md:block">
        <table className="w-full text-left">
          <thead>
            <tr className="bg-slate-50">
              {[
                "Member No",
                "Member Name",
                "Phone Number",
                "Email",
                "Location",
                "Tasks Completed",
                "Actions",
              ].map((col) => (
                <th
                  key={col}
                  className="px-4 py-3 text-xs font-semibold uppercase tracking-wide text-slate-500"
                >
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {cleaners.map((cleaner) => (
              <CleanerRow
                key={cleaner.id}
                cleaner={cleaner}
                isMenuOpen={openMenuId === cleaner.id}
                onToggleMenu={() => handleToggleMenu(cleaner.id)}
                onActionSelect={handleActionSelect}
              />
            ))}
          </tbody>
        </table>
      </div>

      <div className="space-y-3 md:hidden">
        {cleaners.map((cleaner) => (
          <CleanerCard
            key={cleaner.id}
            cleaner={cleaner}
            isMenuOpen={openMenuId === cleaner.id}
            onToggleMenu={() => handleToggleMenu(cleaner.id)}
            onActionSelect={handleActionSelect}
          />
        ))}
      </div>
    </div>
  );
};

export default CleanersTable;
