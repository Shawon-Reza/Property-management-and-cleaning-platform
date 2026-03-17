import { HiCheckCircle, HiClock, HiWrenchScrewdriver, HiExclamationCircle } from "react-icons/hi2";

const STATS = [
  {
    label: "Tasks Completed",
    value: 553,
    icon: HiCheckCircle,
    iconColor: "text-green-500",
    bgColor: "bg-green-50",
  },
  {
    label: "Cleaning Tasks",
    value: 87,
    icon: HiClock,
    iconColor: "text-blue-500",
    bgColor: "bg-blue-50",
  },
  {
    label: "Maintenance Tasks",
    value: 87,
    icon: HiWrenchScrewdriver,
    iconColor: "text-orange-500",
    bgColor: "bg-orange-50",
  },
  {
    label: "Rule-Breaking Issue",
    value: 87,
    icon: HiExclamationCircle,
    iconColor: "text-red-500",
    bgColor: "bg-red-50",
  },
];

const ReportsStats = () => {
  return (
    <section className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4">
      {STATS.map(({ label, value, icon: Icon, iconColor, bgColor }) => (
        <article
          key={label}
          className="flex items-center gap-4 rounded-xl border border-slate-200 bg-white p-4 shadow-sm"
        >
          <span className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${bgColor}`}>
            <Icon className={`text-xl ${iconColor}`} />
          </span>
          <div>
            <p className="text-sm text-slate-500">{label}</p>
            <p className="text-2xl font-bold text-slate-800">{value}</p>
          </div>
        </article>
      ))}
    </section>
  );
};

export default ReportsStats;
