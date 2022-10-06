import React from "react";
import { Nav } from "./Nav";

function Header({
  chosenPeriod,
  onChooseDaily,
  onChooseWeekly,
  onChooseMonthly,
}) {
  return (
    <header className="mx-auto grid h-full w-full grid-rows-6 md:col-span-2 lg:col-span-1 lg:row-span-2">
      <div className="z-10 col-span-full row-start-1 row-end-5 flex items-center rounded-2xl bg-blue py-8 px-6 lg:flex-col lg:items-start">
        <img
          src="src/assets/image-jeremy.png"
          alt=""
          width="234"
          height="234"
          className="float-left mr-4 w-16 rounded-full border-[3px] border-solid border-white lg:mb-12 lg:w-20"
        />
        <h1 className="text-sm text-paleblue">
          Report for
          <span className="block text-2xl font-light text-white lg:text-4xl">
            Jeremy Robson
          </span>
        </h1>
      </div>
      <Nav
        chosenPeriod={chosenPeriod}
        onChooseDaily={onChooseDaily}
        onChooseWeekly={onChooseWeekly}
        onChooseMonthly={onChooseMonthly}
      />
    </header>
  );
}

export { Header };
