import { FiSearch } from "react-icons/fi";

const TABS = ["All", "Pending", "In Progress", "Done"];

const MaintenanceHeader = ({ activeTab, onTabChange, search, onSearch }) => (
  <div className="mb-5 space-y-4">
    <div>
      <h1 className="text-xl font-bold text-slate-800 sm:text-2xl">
        Maintenance Management
      </h1>
      <p className="mt-0.5 text-sm text-slate-500">
        View maintenance issues by building
      </p>
    </div>

    <div className="flex flex-wrap items-center justify-between gap-3">
      <div className="flex flex-wrap items-center gap-1.5">
        <p className="mr-1 text-xs font-semibold text-slate-500 sm:text-sm">
          Status
        </p>
        {TABS.map((tab) => (
          <button
            key={tab}
            type="button"
            onClick={() => onTabChange(tab)}
            className={` cursor-pointer rounded-lg px-3 py-1.5 text-xs font-semibold transition sm:text-sm ${
              activeTab === tab
                ? "bg-blue-500 text-white"
                : "text-slate-600 hover:bg-slate-200"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <label className="flex h-9 items-center gap-2 rounded-xl border border-slate-200 bg-white px-3 shadow-sm focus-within:border-blue-400 focus-within:ring-2 focus-within:ring-blue-100">
        <input
          type="text"
          value={search}
          onChange={(e) => onSearch(e.target.value)}
          placeholder="Search location"
          className="w-40 bg-transparent text-sm text-slate-700 outline-none placeholder:text-slate-400 sm:w-52"
        />
        <FiSearch className="shrink-0 text-slate-400" />
      </label>
    </div>
  </div>
);

export default MaintenanceHeader;
