import WeeklyWagesHeader from "./components/WeeklyWagesHeader";
import WeeklyWagesTable from "./components/WeeklyWagesTable";

const Weekly_Wages = () => {
  return (
    <div className="space-y-6 min-h-screen bg-slate-100 p-4 sm:p-6">
      <section className="space-y-4 bg-slate-100 p-2 sm:p-3">
        <WeeklyWagesHeader />
        <WeeklyWagesTable />
      </section>
    </div>
  );
};

export default Weekly_Wages;
