import { useEffect, useMemo, useState } from "react";
import { FiX } from "react-icons/fi";

const EMPTY_FORM = {
  flatNumber: "",
  bedrooms: "",
  bedConfiguration: "",
  people: "",
};

const AddPropertyModal = ({ isOpen, onClose, mode = "add", initialData = null }) => {
  const [form, setForm] = useState(EMPTY_FORM);
  const isEditMode = mode === "edit";

  const initialFormValues = useMemo(() => {
    if (!initialData) {
      return EMPTY_FORM;
    }

    const flatNumber = (initialData.name || "").replace(/^Flat\s*/i, "").trim();
    const bedrooms = (initialData.beds || "").match(/^\d+/)?.[0] || "";
    const bedConfiguration = (initialData.beds || "").match(/\((.*)\)/)?.[1] || "";
    const people = (initialData.people || "").match(/^\d+/)?.[0] || "";

    return {
      flatNumber,
      bedrooms,
      bedConfiguration,
      people,
    };
  }, [initialData]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    setForm(initialFormValues);
  }, [isOpen, initialFormValues]);

  const handleChange = (key) => (event) => {
    setForm((current) => ({
      ...current,
      [key]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log({
      mode,
      id: initialData?.id || null,
      ...form,
    });

    onClose();
  };

  if (!isOpen) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/35 p-4"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="w-full max-w-md rounded-xl border border-slate-200 bg-white p-5 shadow-xl sm:p-6"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={isEditMode ? "Edit Property" : "Add New Property"}
      >
        <div className="mb-5 flex items-center justify-between">
          <h2 className="text-xl font-bold text-slate-800">
            {isEditMode ? "Edit Property" : "Add New Property"}
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="rounded-md p-1 text-slate-400 transition hover:bg-slate-100 hover:text-red-500"
            aria-label="Close modal"
          >
            <FiX className="text-lg text-red-500" />
          </button>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-xs font-medium text-slate-600">
                Flat Number *
              </label>
              <input
                type="text"
                value={form.flatNumber}
                onChange={handleChange("flatNumber")}
                placeholder="e.g. 101, 2A, Unit 5"
                className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <div>
              <label className="mb-1 block text-xs font-medium text-slate-600">
                Bedrooms *
              </label>
              <input
                type="text"
                value={form.bedrooms}
                onChange={handleChange("bedrooms")}
                placeholder="e.g. 2"
                className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <div>
              <label className="mb-1 block text-xs font-medium text-slate-600">
                Bed Configuration
              </label>
              <input
                type="text"
                value={form.bedConfiguration}
                onChange={handleChange("bedConfiguration")}
                placeholder="e.g. 1 King, 2 Twins"
                className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <div>
              <label className="mb-1 block text-xs font-medium text-slate-600">
                People *
              </label>
              <input
                type="text"
                value={form.people}
                onChange={handleChange("people")}
                placeholder="e.g. 5"
                className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
              />
            </div>
          </div>

          <div className="grid grid-cols-2 gap-2 pt-1">
            <button
              type="button"
              onClick={onClose}
              className="rounded-md bg-slate-100 px-4 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-slate-200"
            >
              Cancel
            </button>

            <button
              type="submit"
              className="rounded-md bg-blue-500 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-600"
            >
              {isEditMode ? "Update" : "Add"}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPropertyModal;
