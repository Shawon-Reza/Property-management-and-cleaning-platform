import { useEffect, useRef, useState } from "react";
import { FiImage, FiX } from "react-icons/fi";

const EMPTY_FORM = {
  buildingName: "",
  city: "",
  address: "",
};

const AddBuildingModal = ({ isOpen, onClose, mode = "add", initialData = null }) => {
  const inputRef = useRef(null);
  const [selectedImage, setSelectedImage] = useState(null);
  const [form, setForm] = useState(EMPTY_FORM);

  const isEditMode = mode === "edit";

  useEffect(() => {
    return () => {
      if (selectedImage) {
        URL.revokeObjectURL(selectedImage.preview);
      }
    };
  }, [selectedImage]);

  useEffect(() => {
    if (!isOpen) {
      return;
    }

    setForm({
      buildingName: initialData?.name || "",
      city: initialData?.city || "",
      address: initialData?.address || "",
    });

    setSelectedImage(null);
  }, [isOpen, initialData]);

  if (!isOpen) {
    return null;
  }

  const handleImageChange = (event) => {
    const file = event.target.files?.[0];

    if (!file) {
      return;
    }

    setSelectedImage((current) => {
      if (current) {
        URL.revokeObjectURL(current.preview);
      }

      return {
        file,
        preview: URL.createObjectURL(file),
      };
    });
  };

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
      image: selectedImage
        ? {
            name: selectedImage.file.name,
            size: selectedImage.file.size,
            type: selectedImage.file.type,
          }
        : initialData?.image || null,
    });

    onClose();
  };

  const previewImageSrc = selectedImage?.preview || initialData?.image || null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-slate-900/35 p-3 sm:p-6"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="w-full max-w-xl rounded-xl border border-slate-200 bg-white p-4 shadow-xl sm:p-6"
        onClick={(event) => event.stopPropagation()}
        role="dialog"
        aria-modal="true"
        aria-label={isEditMode ? "Edit Building" : "Add New Building"}
      >
        <div className="mb-6 flex items-start justify-between">
          <h2 className="text-xl font-bold text-slate-800">
            {isEditMode ? "Edit Building" : "Add New Building"}
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="rounded-md p-1 text-slate-400 transition hover:bg-slate-100 hover:text-red-500"
            aria-label="Close modal"
          >
            <FiX className="text-lg cursor-pointer" />
          </button>
        </div>

        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            ref={inputRef}
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
          />

          <button
            type="button"
            onClick={() => inputRef.current?.click()}
            className="mx-auto flex h-32 w-44 overflow-hidden rounded-lg border border-dashed border-blue-300 bg-blue-50/40 text-blue-500 transition hover:bg-blue-50"
          >
            {previewImageSrc ? (
              <img
                src={previewImageSrc}
                alt="Selected building"
                className="h-full w-full object-cover"
              />
            ) : (
              <span className="flex h-full w-full flex-col items-center justify-center">
                <FiImage className="text-4xl" />
                <span className="mt-2 text-center text-sm font-semibold leading-tight">
                  Upload Building
                  <br />
                  Photo
                </span>
              </span>
            )}
          </button>

          {previewImageSrc ? (
            <p className="text-center text-xs font-medium text-slate-500">
              {selectedImage ? selectedImage.file.name : "Current building image"}
            </p>
          ) : null}

          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <div>
              <label className="mb-1 block text-xs font-medium text-slate-500">
                Building Name *
              </label>
              <input
                type="text"
                value={form.buildingName}
                onChange={handleChange("buildingName")}
                placeholder="e.g., north"
                className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
              />
            </div>

            <div>
              <label className="mb-1 block text-xs font-medium text-slate-500">City</label>
              <input
                type="text"
                value={form.city}
                onChange={handleChange("city")}
                placeholder="e.g., London"
                className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
              />
            </div>
          </div>

          <div>
            <label className="mb-1 block text-xs font-medium text-slate-500">
              Full Address
            </label>
            <textarea
              rows={3}
              value={form.address}
              onChange={handleChange("address")}
              placeholder="e.g., London"
              className="w-full rounded-md border border-slate-200 px-3 py-2 text-sm text-slate-700 outline-none transition placeholder:text-slate-400 focus:border-blue-400 focus:ring-2 focus:ring-blue-100"
            />
          </div>

          <div className="mt-2 grid grid-cols-2 gap-2">
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

export default AddBuildingModal;
