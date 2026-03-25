import { FiShield } from "react-icons/fi";

const issues = [
  { title: "Guest-Caused Damage", location: "Flat 319 · Conditioning House" },
  { title: "Extremely Messy Flat", location: "Flat 319 · Conditioning House" },
];

const RuleBreakingIssues = () => {
  return (
    <div className="rounded-xl border border-red-100 bg-red-50 p-5">
      <div className="mb-4 flex items-center gap-2">
        <FiShield className="text-base text-red-500" />
        <h3 className="text-base font-bold text-red-600">Rule-Breaking Issue</h3>
      </div>

      <ul className="space-y-3">
        {issues.map((issue, index) => (
          <li
            key={index}
            className="flex items-center justify-between gap-3 rounded-lg border border-red-100 bg-white p-3"
          >
            <div className="min-w-0">
              <p className="text-sm font-semibold text-slate-800">{issue.title}</p>
              <p className="mt-0.5 text-xs text-slate-400">{issue.location}</p>
            </div>
            
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RuleBreakingIssues;
