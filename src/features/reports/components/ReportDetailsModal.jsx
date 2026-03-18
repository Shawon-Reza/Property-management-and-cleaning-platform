import { FiMapPin, FiX } from "react-icons/fi";

const samplePhotos = [
  "https://images.unsplash.com/photo-1517949908118-721bea9a7402?auto=format&fit=crop&w=320&q=80",
  "https://images.unsplash.com/photo-1511818966892-d7d671e672a2?auto=format&fit=crop&w=320&q=80",
  "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=320&q=80",
];

const getModalTitle = (activeTab) => {
  if (activeTab === "Cleaning Completion") {
    return "Cleaning Completion Details";
  }

  if (activeTab === "Maintenance History") {
    return "Maintenance Report Details";
  }

  return "Rule-Breaking Report Details";
};

const InfoSection = ({ row }) => {
  const [date = "", time = ""] = row.dateTime.split(";").map((value) => value.trim());

  return (
    <section className="rounded-lg bg-slate-50 p-3">
      <h3 className="mb-2 flex items-center gap-1.5 text-sm font-semibold text-slate-700">
        <FiMapPin className="text-xs" />
        Property Information
      </h3>
      <div className="grid grid-cols-2 gap-3 text-xs sm:text-sm">
        <div>
          <p className="text-slate-400">Building</p>
          <p className="font-medium text-slate-700">{row.building}</p>
        </div>
        <div>
          <p className="text-slate-400">Property</p>
          <p className="font-medium text-slate-700">{row.property}</p>
        </div>
        <div>
          <p className="text-slate-400">Date</p>
          <p className="font-medium text-slate-700">{date}</p>
        </div>
        <div>
          <p className="text-slate-400">Time</p>
          <p className="font-medium text-slate-700">{time}</p>
        </div>
      </div>
    </section>
  );
};

const CleaningDetails = ({ row }) => {
  return (
    <>
      <InfoSection row={row} />

      <section className="rounded-lg bg-white p-3 border border-slate-200">
        <h3 className="mb-2 text-sm font-semibold text-slate-700">Task Details</h3>
        <p className="text-sm text-slate-600">1. {row.task}</p>

        <div className="mt-3 space-y-2">
          <div className="rounded-md bg-blue-50 p-2">
            <p className="text-xs font-semibold text-blue-600">Notes:</p>
            <p className="mt-1 text-xs text-blue-500">All areas cleaned thoroughly</p>
          </div>
          <div className="rounded-md bg-blue-50 p-2">
            <p className="text-xs font-semibold text-blue-600">Notes:</p>
            <p className="mt-1 text-xs text-blue-500">Guest requested extra pillows on the king bed</p>
          </div>
        </div>

        <div className="mt-3 rounded-md border border-slate-200 p-2">
          <p className="text-xs font-semibold text-slate-600">Cleaning Video*</p>
          <img
            src={samplePhotos[0]}
            alt="Cleaning proof"
            className="mt-2 h-24 w-24 rounded-md object-cover"
          />
        </div>

        <div className="mt-3 rounded-md bg-green-50 px-3 py-2 text-sm text-green-600">
          Status: Completed
        </div>
      </section>
    </>
  );
};

const MaintenanceDetails = ({ row }) => {
  return (
    <>
      <InfoSection row={row} />

      <section className="rounded-lg border border-slate-200 bg-white p-3">
        <h3 className="mb-2 text-sm font-semibold text-slate-700">Cleaner Report</h3>
        <p className="text-sm font-semibold text-slate-700">{row.task}</p>
        <p className="mt-1 text-xs text-slate-500">
          Lorem ipsum dolor sit amet consectetur. Sed fames purus quis lorem vel pellentesque tristique.
        </p>

        <div className="mt-3 grid grid-cols-2 gap-2 text-xs">
          <div>
            <p className="text-slate-400">Reported By</p>
            <p className="text-slate-700">{row.completedBy} (Cleaner)</p>
          </div>
          <div>
            <p className="text-slate-400">Date</p>
            <p className="text-slate-700">{row.dateTime.replace(";", "-")}</p>
          </div>
        </div>

        <div className="mt-3 rounded-md border border-slate-200 p-2">
          <p className="text-xs font-semibold text-slate-600">Reference Photos</p>
          <div className="mt-2 grid grid-cols-3 gap-2">
            {samplePhotos.map((photo, index) => (
              <img key={photo} src={photo} alt={`Reference ${index + 1}`} className="h-20 w-full rounded-md object-cover" />
            ))}
          </div>
        </div>
      </section>

      <section className="rounded-lg border border-slate-200 bg-white p-3">
        <h3 className="mb-2 text-sm font-semibold text-slate-700">Notes, Parts Cost, Labour Cost & Receipt photo</h3>
        <div className="rounded-md bg-emerald-50 p-2 text-xs text-slate-700">
          <p className="font-semibold">Labour Notes & Cost</p>
          <p className="mt-1">Parts cost: 31 Jan 2026, 11:48 PM</p>
          <p>Labour cost: 31 Jan 2026, 11:48 PM</p>
          <p>Note: Parts ordered</p>
        </div>

        <div className="mt-3 rounded-md border border-slate-200 p-2">
          <p className="text-xs font-semibold text-slate-600">Receipt photo</p>
          <img
            src={samplePhotos[0]}
            alt="Receipt"
            className="mt-2 h-20 w-24 rounded-md object-cover"
          />
        </div>
      </section>
    </>
  );
};

const RuleBreakingDetails = ({ row }) => {
  return (
    <>
      <InfoSection row={row} />

      <section className="rounded-lg border border-slate-200 bg-white p-3">
        <h3 className="mb-2 text-sm font-semibold text-slate-700">Violation Details</h3>
        <p className="text-sm font-semibold text-slate-700">{row.task}</p>
        <p className="mt-1 text-xs text-slate-500">Evidence and issue details recorded in property report.</p>

        <div className="mt-3 rounded-md border border-slate-200 p-2">
          <p className="text-xs font-semibold text-slate-600">Reference Photos</p>
          <div className="mt-2 grid grid-cols-3 gap-2">
            {samplePhotos.map((photo, index) => (
              <img key={photo} src={photo} alt={`Violation ${index + 1}`} className="h-20 w-full rounded-md object-cover" />
            ))}
          </div>
        </div>

        <div className="mt-3 rounded-md bg-green-50 px-3 py-2 text-sm text-green-600">
          Status: Completed
        </div>
      </section>
    </>
  );
};

const ReportDetailsModal = ({ isOpen, onClose, activeTab, row }) => {
  if (!isOpen || !row) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/40 p-3 sm:p-6"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="max-h-[95vh] w-full max-w-xl overflow-y-auto rounded-xl border border-slate-200 bg-white p-3 shadow-xl sm:p-4"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={getModalTitle(activeTab)}
      >
        <div className="mb-3 flex items-start justify-between">
          <h2 className="text-xl font-bold text-slate-800">{getModalTitle(activeTab)}</h2>
          <button
            type="button"
            onClick={onClose}
            className="rounded-md p-1 text-slate-400 transition hover:bg-slate-100 hover:text-red-500"
            aria-label="Close modal"
          >
            <FiX className="text-lg" />
          </button>
        </div>

        <div className="space-y-3">
          {activeTab === "Cleaning Completion" ? <CleaningDetails row={row} /> : null}
          {activeTab === "Maintenance History" ? <MaintenanceDetails row={row} /> : null}
          {activeTab === "Rule-Breaking Issue" ? <RuleBreakingDetails row={row} /> : null}

          <section className="rounded-lg border border-slate-100 bg-slate-50 p-3">
            <h3 className="mb-2 text-sm font-semibold text-slate-700">Submitted By</h3>
            <div>
              <p className="text-sm text-slate-800">{row.completedBy}</p>
              <p className="text-xs text-slate-500">{activeTab === "Maintenance History" ? "Maintenance team" : "Cleaner"}</p>
            </div>
          </section>

          <div className="flex justify-end">
            <button
              type="button"
              onClick={onClose}
              className="rounded-md bg-blue-500 px-4 py-1.5 text-sm font-medium text-white transition hover:bg-blue-600"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReportDetailsModal;
