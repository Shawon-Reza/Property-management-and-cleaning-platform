import { HiCalendar } from "react-icons/hi2";

const TABS = ["Cleaning Completion", "Maintenance History", "Rule-Breaking Issue"];

const FilterInput = ({ label, placeholder, value, onChange }) => (
  <label className="flex flex-1 min-w-45 flex-col gap-1.5">
    <span className="text-sm font-medium text-slate-600">{label}</span>
    <input
      type="text"
      placeholder={placeholder}
      value={value}
      onChange={(e) => onChange(e.target.value)}
      className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 text-sm text-slate-600 shadow-sm focus:border-blue-400 focus:outline-none"
    />
  </label>
);

const ReportsFilters = ({ activeTab, onTabChange, filters, onFilterChange }) => {
  return (
    <div className="space-y-4">
      {/* Tabs */}
      <div className="flex flex-wrap gap-2">
        {TABS.map((tab) => (
          <button
            key={tab}
            onClick={() => onTabChange(tab)}
            className={`rounded-lg px-4 py-2 text-sm font-medium transition-colors ${
              activeTab === tab
                ? "bg-blue-600 text-white shadow-sm"
                : "border border-slate-200 bg-white text-slate-600 hover:bg-slate-50"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Filters */}
      <div className="flex flex-wrap gap-3">
        <FilterInput
          label="City"
          placeholder="eg., London"
          value={filters.city}
          onChange={(v) => onFilterChange("city", v)}
        />
        <FilterInput
          label="Building Name"
          placeholder="eg., Conditioning House"
          value={filters.building}
          onChange={(v) => onFilterChange("building", v)}
        />
        <FilterInput
          label="Flat No"
          placeholder="eg., Flat 319"
          value={filters.flat}
          onChange={(v) => onFilterChange("flat", v)}
        />

        {/* Date & Time with calendar icon */}
        <label className="flex flex-1 min-w-45 flex-col gap-1.5">
          <span className="text-sm font-medium text-slate-600">Date &amp; Time</span>
          <div className="relative">
            <input
              type="text"
              placeholder="eg., 2/1/2026 ; 09:00"
              value={filters.dateTime}
              onChange={(e) => onFilterChange("dateTime", e.target.value)}
              className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2.5 pr-10 text-sm text-slate-600 shadow-sm focus:border-blue-400 focus:outline-none"
            />
            <HiCalendar className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-blue-500" />
          </div>
        </label>
      </div>
    </div>
  );
};

export default ReportsFilters;
