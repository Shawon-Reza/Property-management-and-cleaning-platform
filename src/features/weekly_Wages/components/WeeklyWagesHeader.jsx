import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

const WeeklyWagesHeader = () => {
  return (
    <header className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
      <div>
        <h1 className="text-xl font-bold text-slate-900">Weekly Wages Overview</h1>
        <p className="mt-1 text-sm text-slate-500">Review and adjust cleaner wages for the week</p>
      </div>

      <div className="flex items-center gap-2 self-start rounded-xl border border-slate-200 bg-white px-3 py-2 shadow-sm">
        <button
          type="button"
          className="grid h-7 w-7 place-content-center rounded-md border border-slate-200 text-slate-500 transition hover:bg-slate-50"
          aria-label="Previous week"
        >
          <FiChevronLeft />
        </button>

        <div className="px-2 text-center">
          <p className="text-xs text-slate-400">Week</p>
          <p className="text-base font-semibold text-slate-800">3 Feb - 9 Feb 2026</p>
        </div>

        <button
          type="button"
          className="grid h-7 w-7 place-content-center rounded-md border border-slate-200 text-slate-500 transition hover:bg-slate-50"
          aria-label="Next week"
        >
          <FiChevronRight />
        </button>
      </div>
    </header>
  );
};

export default WeeklyWagesHeader;
