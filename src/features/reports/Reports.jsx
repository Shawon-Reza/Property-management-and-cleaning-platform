import { useMemo, useState } from "react";
import { HiArrowDownTray } from "react-icons/hi2";
import ReportsStats from "./components/ReportsStats";
import ReportsFilters from "./components/ReportsFilters";
import ReportsTable from "./components/ReportsTable";

const TAB_TYPE_MAP = {
  "Cleaning Completion": "cleaning",
  "Maintenance History": "maintenance",
  "Rule-Breaking Issue": "rule-breaking",
};

const REPORTS_DATA = [
  {
    id: 1,
    type: "cleaning",
    dateTime: "2/1/2026 ; 09:00",
    city: "London",
    building: "Conditioning House",
    property: "Flat 319",
    completedBy: "Sarah Khan",
    task: "Deep clean kitchen and bathroom",
  },
  {
    id: 2,
    type: "cleaning",
    dateTime: "2/2/2026 ; 10:30",
    city: "Leeds",
    building: "Riverfront Court",
    property: "Flat 111",
    completedBy: "Mia James",
    task: "Carpet steam cleaning",
  },
  {
    id: 3,
    type: "maintenance",
    dateTime: "2/3/2026 ; 11:45",
    city: "Bradford",
    building: "Conditioning House",
    property: "Flat 204",
    completedBy: "Alex Khan",
    task: "Fix leaking sink and pipe",
  },
  {
    id: 4,
    type: "maintenance",
    dateTime: "2/4/2026 ; 08:20",
    city: "London",
    building: "Willow Residency",
    property: "Flat 52",
    completedBy: "Noah Patel",
    task: "Replaced faulty smoke detector",
  },
  {
    id: 5,
    type: "rule-breaking",
    dateTime: "2/5/2026 ; 22:15",
    city: "Leeds",
    building: "Riverfront Court",
    property: "Flat 404",
    completedBy: "Admin Team",
    task: "Late-night noise complaint recorded",
  },
  {
    id: 6,
    type: "rule-breaking",
    dateTime: "2/6/2026 ; 18:00",
    city: "Manchester",
    building: "Park Heights",
    property: "Flat 18",
    completedBy: "Admin Team",
    task: "Unauthorized pet policy violation",
  },
];

const Reports = () => {
  const [activeTab, setActiveTab] = useState("Cleaning Completion");
  const [filters, setFilters] = useState({
    city: "",
    building: "",
    flat: "",
    dateTime: "",
  });

  const handleFilterChange = (key, value) => {
    setFilters((prev) => ({ ...prev, [key]: value }));
  };

  const filteredRows = useMemo(() => {
    const activeType = TAB_TYPE_MAP[activeTab];

    return REPORTS_DATA.filter((row) => {
      if (row.type !== activeType) return false;

      const cityMatch = row.city.toLowerCase().includes(filters.city.toLowerCase().trim());
      const buildingMatch = row.building.toLowerCase().includes(filters.building.toLowerCase().trim());
      const flatMatch = row.property.toLowerCase().includes(filters.flat.toLowerCase().trim());
      const dateMatch = row.dateTime.toLowerCase().includes(filters.dateTime.toLowerCase().trim());

      return cityMatch && buildingMatch && flatMatch && dateMatch;
    });
  }, [activeTab, filters]);

  const handleExport = () => {
    console.log("Export report", { activeTab, filters });
  };

  return (
    <div className="space-y-5 p-4 sm:p-6">
      {/* Header */}
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <h1 className="text-xl font-bold text-slate-800">Reports &amp; Overview</h1>
          <p className="mt-0.5 text-sm text-slate-500">Analyze performance and track history</p>
        </div>
        <button
          onClick={handleExport}
          className="flex items-center gap-2 self-start rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-700 transition-colors"
        >
          <HiArrowDownTray className="text-base" />
          Export Report
        </button>
      </div>

      {/* Stats */}
      <ReportsStats />

      {/* Filters + Table */}
      <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm space-y-4 sm:p-5">
        <ReportsFilters
          activeTab={activeTab}
          onTabChange={setActiveTab}
          filters={filters}
          onFilterChange={handleFilterChange}
        />
        <ReportsTable rows={filteredRows} />
      </div>
    </div>
  );
};

export default Reports;
