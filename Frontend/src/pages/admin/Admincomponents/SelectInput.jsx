import React from 'react';

const SelectInput = (props) => {
  return (
    <select
      value={props.value}
      onChange={props.onChange}
      className="w-full h-10 dark:bg-blackPrimary bg-white border border-gray-600 dark:text-whiteSecondary text-blackPrimary outline-0 pl-3 pr-8 cursor-pointer dark:hover:border-gray-500 hover:border-gray-400"
    >
      {props.selectList &&
        props.selectList.map((item, index) => {
          const { value, label } = item;

          return (
            <option key={index} value={value}>
              {label}
            </option>
          );
        })}
    </select>
  );
};

export default SelectInput;
