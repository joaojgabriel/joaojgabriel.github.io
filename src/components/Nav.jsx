import React from "react";

function Nav({ chosenPeriod, onChooseDaily, onChooseWeekly, onChooseMonthly }) {
  return (
    <nav className="col-span-full row-start-4 row-end-7 flex items-end justify-around rounded-2xl bg-darkblue py-5 lg:flex-col lg:items-start lg:justify-end">
      <button
        className="chosenPeriod font-medium lg:my-3 lg:ml-6"
        style={{
          color: chosenPeriod === "daily" ? "white" : "hsl(236, 100%, 87%)",
        }}
        onClick={onChooseDaily}
      >
        Daily
      </button>
      <button
        className="font-medium lg:my-3 lg:ml-6"
        style={{
          color: chosenPeriod === "weekly" ? "white" : "hsl(236, 100%, 87%)",
        }}
        onClick={onChooseWeekly}
      >
        Weekly
      </button>
      <button
        className="font-medium lg:my-3 lg:ml-6"
        style={{
          color: chosenPeriod === "monthly" ? "white" : "hsl(236, 100%, 87%)",
        }}
        onClick={onChooseMonthly}
      >
        Monthly
      </button>
    </nav>
  );
}

export { Nav };
