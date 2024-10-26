import React from 'react';

const SingleStats = ({ children }) => {
  return (
    <div className="flex flex-col gap-2 dark:bg-gray-900 bg-whiteSecondary border border-blackPrimary w-72 px-5 py-5 rounded-md">
      {children}
    </div>
  );
};

const StatsCategory = ({ statsCategory, children }) => {
  return (
    <p className="flex items-center gap-1 dark:text-whiteSecondary text-blackPrimary">
      {children}
      <span className="text-xl">{statsCategory}</span>
    </p>
  );
};

const MoneyStats = ({ moneyAmount, children }) => {
  return (
    <div className="flex gap-3">
      <p className="text-3xl font-semibold dark:text-whiteSecondary text-blackPrimary">
        {moneyAmount}
      </p>
      {children}
    </div>
  );
};

const PercentageStats = ({ isPositive, percentage }) => {
  return (
    <p
      className={
        isPositive
          ? `dark:text-green-600 text-green-500 font-semibold`
          : `dark:text-red-600 text-red-500 font-semibold`
      }
    >
      {isPositive ? "+" : "-"}
      {percentage} than last month
    </p>
  );
};

export default SingleStats;

SingleStats.StatsCategory = StatsCategory;
SingleStats.MoneyStats = MoneyStats;
SingleStats.PercentageStats = PercentageStats;
