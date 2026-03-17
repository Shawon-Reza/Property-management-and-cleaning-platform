import { HiClock, HiUser } from "react-icons/hi2";

const TableRow = ({ row }) => (
  <tr className="border-b border-slate-100 hover:bg-slate-50">
    <td className="whitespace-nowrap px-4 py-3 text-sm text-slate-700">
      <span className="flex items-center gap-1.5">
        <HiClock className="shrink-0 text-slate-400" />
        {row.dateTime}
      </span>
    </td>
    <td className="px-4 py-3 text-sm text-slate-700">{row.building}</td>
    <td className="px-4 py-3 text-sm text-slate-700">{row.property}</td>
    <td className="px-4 py-3 text-sm text-slate-700">
      <span className="flex items-center gap-1.5">
        <HiUser className="shrink-0 text-slate-400" />
        {row.completedBy}
      </span>
    </td>
    <td className="px-4 py-3 text-sm text-slate-700">{row.task}</td>
    <td className="px-4 py-3">
      <button className="rounded-lg border border-blue-200 bg-blue-50 px-4 py-1 text-sm font-medium text-blue-600 hover:bg-blue-100 transition-colors">
        Open
      </button>
    </td>
  </tr>
);

const MobileCard = ({ row }) => (
  <div className="rounded-xl border border-slate-200 bg-white p-4 shadow-sm space-y-2">
    <div className="flex items-center justify-between gap-2">
      <span className="flex items-center gap-1.5 text-sm font-medium text-slate-700">
        <HiClock className="shrink-0 text-slate-400" />
        {row.dateTime}
      </span>
      <button className="rounded-lg border border-blue-200 bg-blue-50 px-3 py-1 text-xs font-medium text-blue-600 hover:bg-blue-100 transition-colors">
        Open
      </button>
    </div>
    <div className="grid grid-cols-2 gap-1 text-sm">
      <span className="text-slate-400">Building</span>
      <span className="text-slate-700">{row.building}</span>
      <span className="text-slate-400">Property</span>
      <span className="text-slate-700">{row.property}</span>
      <span className="text-slate-400">Completed By</span>
      <span className="flex items-center gap-1 text-slate-700">
        <HiUser className="shrink-0 text-slate-400" />
        {row.completedBy}
      </span>
      <span className="text-slate-400">Task</span>
      <span className="text-slate-700">{row.task}</span>
    </div>
  </div>
);

const ReportsTable = ({ rows }) => {
  return (
    <>
      {/* Desktop table */}
      <div className="hidden overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-sm md:block">
        <table className="min-w-175 w-full">
          <thead>
            <tr className="border-b border-slate-200 bg-white text-left">
              {["Date & Time", "Building", "Property", "Completed By", "Task", "Actions"].map((col) => (
                <th key={col} className="px-4 py-3 text-sm font-semibold text-slate-700">
                  {col}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {rows.length > 0 ? (
              rows.map((row) => <TableRow key={row.id} row={row} />)
            ) : (
              <tr>
                <td colSpan={6} className="px-4 py-10 text-center text-sm text-slate-500">
                  No reports found for this tab and filter.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* Mobile cards */}
      <div className="space-y-3 md:hidden">
        {rows.length > 0 ? (
          rows.map((row) => <MobileCard key={row.id} row={row} />)
        ) : (
          <div className="rounded-xl border border-slate-200 bg-white p-6 text-center text-sm text-slate-500 shadow-sm">
            No reports found for this tab and filter.
          </div>
        )}
      </div>
    </>
  );
};

export default ReportsTable;
