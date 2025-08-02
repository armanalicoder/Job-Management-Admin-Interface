import React, { useState } from "react";
import { Range } from "react-range";
const SalarySlider = ({ onSalaryChange }) => {
  const STEP = 1000;
  const MIN = 0;
  const MAX = 100000;
  const [values, setValues] = useState([0, 0]);

  const handleChange = (newValues) => {
    setValues(newValues);
    onSalaryChange(newValues); // send data to parent
  };

  return (
    <div>
      <div className="flex justify-between ms-4 mb-4 space-x-5">
        <span className="text-black font-medium">Salary Per Month</span>
        <span className="text-black font-medium">
          ₹{values[0] / 1000}k - ₹{values[1] / 1000}k
        </span>
      </div>
      <Range
        onChange={handleChange}
        values={values}
        step={STEP}
        min={MIN}
        max={MAX}
        className="-z-50"
        renderTrack={({ props, children }) => (
          <div {...props} className="h-1 ms-4 w-full rounded bg-gray-300">
            {children}
          </div>
        )}
        renderThumb={({ props }) => {
          const { key, ...restProps } = props;
          return (
            <div
              key={key}
              {...restProps}
              className="h-5 w-5 rounded-full bg-white border-4 border-black shadow"
            />
          );
        }}
      />
    </div>
  );
};

export default SalarySlider;
