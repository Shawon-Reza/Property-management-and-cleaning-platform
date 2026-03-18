const CLEANERS = [
  { key: "a", label: "A" },
  { key: "b", label: "B" },
  { key: "angelina", label: "Angelina" },
  { key: "krystle", label: "Krystle", subLabel: "(Sam)" },
  { key: "mya", label: "Mya" },
  { key: "thoma", label: "Thoma" },
  { key: "susannah", label: "Susannah" },
  { key: "martha", label: "martha", subLabel: "(martha)" },
  { key: "moji", label: "Moji" },
  { key: "ajay", label: "Ajay" },
  { key: "sufyan", label: "sufyan" },
  { key: "damo", label: "Damo" },
  { key: "lena", label: "LENA" },
  { key: "thuyN", label: "Thuy N" },
];

const ROWS = [
  { property: "327 - 40", values: { angelina: "2x1", krystle: "2" } },
  { property: "328 - 15", values: {} },
  { property: "332 - 15", values: { mya: "2" } },
  { property: "HW-339 - 15", values: {} },
  { property: "319", values: { moji: "1" } },
  { property: "203", values: {} },
  { property: "307", values: {} },
  { property: "331 - 15", values: { krystle: "1", thoma: "1" } },
  { property: "334 - 15", values: {} },
  { property: "315", values: { mya: "1" } },
  { property: "310", values: {} },
  { property: "305", values: { thoma: "1" } },
  { property: "HM-346", values: { moji: "1" } },
  { property: "323", values: {} },
  { property: "314", values: { mya: "1", thoma: "1" } },
  { property: "807C", values: {} },
  { property: "807D", values: { krystle: "1", mya: "2" } },
  { property: "807E", values: { angelina: "2", krystle: "1" } },
  { property: "807G", values: { mya: "1" } },
  { property: "304 Mill Street", values: { angelina: "2", krystle: "1", moji: "1", ajay: "1" } },
  { property: "306 Mill Street", values: { mya: "2", thoma: "1" } },
  { property: "305 Mill Street", values: { moji: "1" } },
  { property: "308 Mill Street", values: {} },
  { property: "309 Mill Street", values: { angelina: "7", mya: "1", martha: "7" } },
];

const TOTALS = {
  a: "0",
  b: "0",
  angelina: "0",
  krystle: "0",
  mya: "0",
  thoma: "0",
  susannah: "0",
  martha: "0",
  moji: "0",
  ajay: "0",
  sufyan: "0",
  damo: "0",
  lena: "0",
  thuyN: "0",
};

const WeeklyWagesTable = () => {
  return (
    <section className="overflow-hidden rounded-xl border border-slate-200 bg-white shadow-sm mt-10">
      <div className="overflow-x-auto">
        <div className="max-h-calc(100vh-200px) min-w-300 overflow-y-auto">
          <table className="w-full border-collapse text-sm text-slate-700">
            <thead className="sticky top-0 z-10 bg-slate-100">
              <tr>
                <th className="sticky left-0 z-20 border border-slate-200 bg-[#28397F] px-4 py-2 text-left font-semibold text-white">
                  Property
                </th>
                {CLEANERS.map((cleaner) => (
                  <th
                    key={cleaner.key}
                    className="min-w-16 border border-slate-200 px-2 py-1.5 text-center text-xs font-semibold text-slate-700"
                  >
                    <p>{cleaner.label}</p>
                    {cleaner.subLabel ? <p className="text-[10px] font-medium text-slate-400">{cleaner.subLabel}</p> : null}
                  </th>
                ))}
              </tr>
            </thead>

            <tbody>
              {ROWS.map((row, rowIndex) => (
                <tr key={row.property} className={rowIndex % 2 === 0 ? "bg-slate-50" : "bg-slate-100/70"}>
                  <td className="sticky left-0 z-10 border border-slate-200 bg-inherit px-3 py-1.5 text-xs font-medium text-slate-700">
                    <span className="mr-2 text-slate-400">□</span>
                    {row.property}
                  </td>

                  {CLEANERS.map((cleaner) => (
                    <td key={cleaner.key} className="border border-slate-200 px-2 py-1.5 text-center text-xs">
                      {row.values[cleaner.key] || ""}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>

            <tfoot className="sticky bottom-0 z-10">
              <tr className="bg-[#28397F] text-white">
                <td className="sticky left-0 z-20 border border-indigo-700 bg-[#28397F] px-3 py-2 text-center text-sm font-semibold">
                  Total
                </td>
                {CLEANERS.map((cleaner) => (
                  <td key={cleaner.key} className="border border-indigo-700 px-2 py-2 text-center text-sm font-semibold">
                    {TOTALS[cleaner.key]}
                  </td>
                ))}
              </tr>
            </tfoot>
          </table>
        </div>
      </div>
    </section>
  );
};

export default WeeklyWagesTable;
