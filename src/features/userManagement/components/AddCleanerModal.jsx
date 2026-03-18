import { useEffect, useRef, useState } from "react";
import { FiImage, FiX } from "react-icons/fi";

const EMPTY_FORM = {
  fullName: "",
  personalEmail: "",
  city: "",
  state: "",
  fullAddress: "",
  loginEmail: "",
  initialPassword: "",
};

const AddCleanerModal = ({
  isOpen,
  onClose,
  onSubmit,
  mode = "add",
  initialData = null,
  entityLabel = "Cleaner",
}) => {
  const inputRef = useRef(null);
  const [photo, setPhoto] = useState(null);
  const [form, setForm] = useState(EMPTY_FORM);
  const isViewMode = mode === "view";
  const isEditMode = mode === "edit";

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    setForm({
      fullName: initialData?.memberName || "",
      personalEmail: initialData?.email || "",
      city: initialData?.location || "",
      state: initialData?.state || "",
      fullAddress: initialData?.fullAddress || "",
      loginEmail: initialData?.loginEmail || initialData?.email || "",
      initialPassword: initialData?.initialPassword || "",
    });
    setPhoto(null);
  }, [initialData, isOpen]);

  useEffect(() => {
    return () => {
      if (photo?.preview) {
        URL.revokeObjectURL(photo.preview);
      }
    };
  }, [photo]);

  if (!isOpen) {
    return null;
  }

  const updateField = (key) => (event) => {
    setForm((current) => ({ ...current, [key]: event.target.value }));
  };

  const handlePhotoChange = (event) => {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    setPhoto((current) => {
      if (current?.preview) {
        URL.revokeObjectURL(current.preview);
      }

      return {
        file,
        preview: URL.createObjectURL(file),
      };
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    onSubmit({
      mode,
      id: initialData?.id || null,
      ...form,
      photo: photo
        ? {
            name: photo.file.name,
            size: photo.file.size,
            type: photo.file.type,
          }
        : initialData?.photo || null,
    });
  };

  const modalTitle = isViewMode
    ? `View ${entityLabel}`
    : isEditMode
      ? `Edit ${entityLabel}`
      : `Add New ${entityLabel}`;

  const actionLabel = entityLabel === "Maintenance Worker" ? "Worker" : entityLabel;
  const submitLabel = isEditMode ? `Update ${actionLabel}` : `Add ${actionLabel}`;
  const previewSrc = photo?.preview || initialData?.photoPreview || initialData?.photo || null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/35 p-3 sm:p-6"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="max-h-[95vh] w-full max-w-3xl overflow-y-auto rounded-xl border border-slate-200 bg-white p-4 shadow-xl sm:p-5"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={modalTitle}
      >
        <div className="mb-4 flex items-start justify-between">
          <h2 className="text-2xl font-bold text-slate-800">{modalTitle}</h2>
          <button
            type="button"
            onClick={onClose}
            className="rounded-md p-1 text-slate-400 transition hover:bg-slate-100 hover:text-red-500"
            aria-label="Close modal"
          >
            <FiX className="text-lg" />
          </button>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            onChange={handlePhotoChange}
            className="hidden"
            disabled={isViewMode}
          />

          <button
            type="button"
            onClick={() => {
              if (!isViewMode) {
                inputRef.current?.click();
              }
            }}
            disabled={isViewMode}
            className={`mx-auto flex h-32 w-44 items-center justify-center overflow-hidden rounded-lg border border-dashed bg-blue-50/40 text-blue-500 transition ${
              isViewMode
                ? "cursor-default border-slate-200"
                : "border-blue-300 hover:bg-blue-50"
            }`}
          >
            {previewSrc ? (
              <img src={previewSrc} alt={entityLabel} className="h-full w-full object-cover" />
            ) : (
              <span className="text-center text-sm font-semibold leading-tight">
                <FiImage className="mx-auto mb-2 text-4xl" />
                Upload Photo JPG
              </span>
            )}
          </button>

          <section className="space-y-2">
            <h3 className="text-sm font-semibold text-slate-700">Personal Information</h3>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-xs font-medium text-slate-500">Full Name*</label>
                <input
                  type="text"
                  value={form.fullName}
                  onChange={updateField("fullName")}
                  placeholder="e.g., Sarah khan"
                  disabled={isViewMode}
                  className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 disabled:bg-slate-50 disabled:text-slate-500"
                />
              </div>
              <div>
                <label className="mb-1 block text-xs font-medium text-slate-500">Email*</label>
                <input
                  type="email"
                  value={form.personalEmail}
                  onChange={updateField("personalEmail")}
                  placeholder="e.g., sarah.khan@email.com"
                  disabled={isViewMode}
                  className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 disabled:bg-slate-50 disabled:text-slate-500"
                />
              </div>
            </div>
          </section>

          <section className="space-y-2">
            <h3 className="text-sm font-semibold text-slate-700">Address Information</h3>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-xs font-medium text-slate-500">City</label>
                <input
                  type="text"
                  value={form.city}
                  onChange={updateField("city")}
                  placeholder="e.g., London"
                  disabled={isViewMode}
                  className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 disabled:bg-slate-50 disabled:text-slate-500"
                />
              </div>
              <div>
                <label className="mb-1 block text-xs font-medium text-slate-500">State/Province</label>
                <input
                  type="text"
                  value={form.state}
                  onChange={updateField("state")}
                  placeholder="e.g., north"
                  disabled={isViewMode}
                  className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 disabled:bg-slate-50 disabled:text-slate-500"
                />
              </div>
            </div>
            <div>
              <label className="mb-1 block text-xs font-medium text-slate-500">Full Address</label>
              <textarea
                rows={3}
                value={form.fullAddress}
                onChange={updateField("fullAddress")}
                placeholder="e.g., London"
                disabled={isViewMode}
                className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 disabled:bg-slate-50 disabled:text-slate-500"
              />
            </div>
          </section>

          <section className="space-y-2">
            <h3 className="text-sm font-semibold text-slate-700">User Log In Information</h3>
            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              <div>
                <label className="mb-1 block text-xs font-medium text-slate-500">Enter Email/Phone Number</label>
                <input
                  type="text"
                  value={form.loginEmail}
                  onChange={updateField("loginEmail")}
                  placeholder="e.g., sarah.khan@email.com"
                  disabled={isViewMode}
                  className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 disabled:bg-slate-50 disabled:text-slate-500"
                />
              </div>
              <div>
                <label className="mb-1 block text-xs font-medium text-slate-500">Initial Password</label>
                <input
                  type={isViewMode ? "text" : "password"}
                  value={form.initialPassword}
                  onChange={updateField("initialPassword")}
                  placeholder="****"
                  disabled={isViewMode}
                  className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm outline-none focus:border-blue-400 focus:ring-2 focus:ring-blue-100 disabled:bg-slate-50 disabled:text-slate-500"
                />
              </div>
            </div>
          </section>

          <div className="grid grid-cols-1 gap-2 pt-1 sm:grid-cols-2">
            <button
              type="button"
              onClick={onClose}
              className="rounded-md bg-slate-100 px-4 py-2.5 text-sm font-medium text-slate-600 transition hover:bg-slate-200"
            >
              {isViewMode ? "Close" : "Cancel"}
            </button>

            {isViewMode ? (
              <button
                type="button"
                onClick={onClose}
                className="rounded-md bg-blue-500 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-600"
              >
                Done
              </button>
            ) : (
              <button
                type="submit"
                className="rounded-md bg-blue-500 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-600"
              >
                {submitLabel}
              </button>
            )}
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCleanerModal;
