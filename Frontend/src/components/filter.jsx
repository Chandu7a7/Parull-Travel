import React, { useState } from "react";

export default function Filter() {
  let [minValue, setMinValue] = useState(50);
  let [maxValue, setMaxValue] = useState(200);

  const changeMinValue = (e) => {
    setMinValue(e.target.value);
  };

  const changeMaxValue = (e) => {
    setMaxValue(e.target.value);
  };

  return (
    <div className="lg:col-span-3 md:col-span-5">
      <div className="p-4 rounded-md shadow-lg dark:shadow-gray-700 sticky top-20">
        <div className="">
          <h5 className="text-lg font-medium">Duration (in Nights)</h5>

          <div className="mt-3">
            <div className="flex items-center mb-0">
              <input
                className="form-checkbox rounded border-gray-100 dark:border-gray-800 text-red-500 focus:border-red-300 focus:ring focus:ring-offset-0 focus:ring-red-500/20 focus:ring-opacity-50 me-2"
                type="checkbox"
                value=""
                id="Bali"
              />
              <label
                className="form-checkbox-label text-slate-400"
                htmlFor="Bali"
              >
                Bali Park
              </label>
            </div>
            <div className="flex items-center mb-0">
              <input
                className="form-checkbox rounded border-gray-100 dark:border-gray-800 text-red-500 focus:border-red-300 focus:ring focus:ring-offset-0 focus:ring-red-500/20 focus:ring-opacity-50 me-2"
                type="checkbox"
                value=""
                id="Paris"
              />
              <label
                className="form-checkbox-label text-slate-400"
                htmlFor="Paris"
              >
                Paris
              </label>
            </div>
            <div className="flex items-center mb-0">
              <input
                className="form-checkbox rounded border-gray-100 dark:border-gray-800 text-red-500 focus:border-red-300 focus:ring focus:ring-offset-0 focus:ring-red-500/20 focus:ring-opacity-50 me-2"
                type="checkbox"
                value=""
                id="Arcadia"
              />
              <label
                className="form-checkbox-label text-slate-400"
                htmlFor="Arcadia"
              >
                Arcadia
              </label>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <h5 className="text-lg font-medium">Budget per person</h5>

          <div className="mt-3">
            <div className="flex items-center mb-0">
              <input
                className="form-checkbox rounded border-gray-100 dark:border-gray-800 text-red-500 focus:border-red-300 focus:ring focus:ring-offset-0 focus:ring-red-500/20 focus:ring-opacity-50 me-2"
                type="checkbox"
                value=""
                id="Bali"
              />
              <label
                className="form-checkbox-label text-slate-400"
                htmlFor="Bali"
              >
                Bali Park
              </label>
            </div>
            <div className="flex items-center mb-0">
              <input
                className="form-checkbox rounded border-gray-100 dark:border-gray-800 text-red-500 focus:border-red-300 focus:ring focus:ring-offset-0 focus:ring-red-500/20 focus:ring-opacity-50 me-2"
                type="checkbox"
                value=""
                id="Paris"
              />
              <label
                className="form-checkbox-label text-slate-400"
                htmlFor="Paris"
              >
                Paris
              </label>
            </div>
            <div className="flex items-center mb-0">
              <input
                className="form-checkbox rounded border-gray-100 dark:border-gray-800 text-red-500 focus:border-red-300 focus:ring focus:ring-offset-0 focus:ring-red-500/20 focus:ring-opacity-50 me-2"
                type="checkbox"
                value=""
                id="Arcadia"
              />
              <label
                className="form-checkbox-label text-slate-400"
                htmlFor="Arcadia"
              >
                Arcadia
              </label>
            </div>
          </div>
        </div>
        <div className="mt-6">
          <h5 className="text-lg font-medium">Tour Type</h5>

          <div className="mt-3">
            <div className="flex items-center mb-0">
              <input
                className="form-checkbox rounded border-gray-100 dark:border-gray-800 text-red-500 focus:border-red-300 focus:ring focus:ring-offset-0 focus:ring-red-500/20 focus:ring-opacity-50 me-2"
                type="checkbox"
                value=""
                id="Bali"
              />
              <label
                className="form-checkbox-label text-slate-400"
                htmlFor="Bali"
              >
                Bali Park
              </label>
            </div>
            <div className="flex items-center mb-0">
              <input
                className="form-checkbox rounded border-gray-100 dark:border-gray-800 text-red-500 focus:border-red-300 focus:ring focus:ring-offset-0 focus:ring-red-500/20 focus:ring-opacity-50 me-2"
                type="checkbox"
                value=""
                id="Paris"
              />
              <label
                className="form-checkbox-label text-slate-400"
                htmlFor="Paris"
              >
                Paris
              </label>
            </div>
            <div className="flex items-center mb-0">
              <input
                className="form-checkbox rounded border-gray-100 dark:border-gray-800 text-red-500 focus:border-red-300 focus:ring focus:ring-offset-0 focus:ring-red-500/20 focus:ring-opacity-50 me-2"
                type="checkbox"
                value=""
                id="Arcadia"
              />
              <label
                className="form-checkbox-label text-slate-400"
                htmlFor="Arcadia"
              >
                Arcadia
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
