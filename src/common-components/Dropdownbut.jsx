import React from "react";
import PropTypes from "prop-types";

const Dropdownbut = ({ options, defaultValue, onChange }) => (
  <div className="relative z-10">
    <select
      className="appearance-none bg-white border-[#0f9e99] border-1 text-gray-700  rounded-md px-4 py-2 pr-8 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0c8b87] focus:border-[#0c8b87]"
      defaultValue={defaultValue}
      onChange={onChange}
    >
      {options.map((option) => (
        <option key={option.value} value={option.value} disabled={option.disabled}>
          {option.label}
        </option>
      ))}
    </select>
    <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
      <svg
        className="h-4 w-4 text-gray-500"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path
          fillRule="evenodd"
          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
          clipRule="evenodd"
        />
      </svg>
    </div>
  </div>
);

Dropdownbut.propTypes = {
  options: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      disabled: PropTypes.bool,
    })
  ).isRequired,
  defaultValue: PropTypes.string,
  onChange: PropTypes.func,
};

export default Dropdownbut;