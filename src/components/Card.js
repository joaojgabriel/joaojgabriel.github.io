import React from "react";

function Card({ title, period, currentPeriod, previousPeriod }) {
  let lastPeriod;
  if (period === "daily") lastPeriod = "Yesterday";
  else
    period === "weekly"
      ? (lastPeriod = "Last week")
      : (lastPeriod = "Last month");

  let background;
  title === "Self Care"
    ? (background = "background-self-care")
    : (background = `background-${title.toLowerCase()}`);

  const formatTimeText = (time) => {
    let text;

    if (time) time > 1 ? (text = "hrs") : (text = "hr");
    else text = "<1hr";

    return text;
  };

  const currentPeriodText = formatTimeText(currentPeriod);
  const previousPeriodText = formatTimeText(previousPeriod);

  return (
    <article
      id={title.toLowerCase()}
      className="grid h-40 grid-rows-5 lg:h-full"
    >
      <div
        className={`${background} col-span-full row-span-2 row-start-1 h-full rounded-xl`}
      ></div>
      <div className="grid-rows-[5px 10px] z-10 col-span-full row-span-full row-start-2 grid w-full items-center rounded-xl bg-darkblue px-6 lg:grid-rows-3">
        <span className="row-start-1 self-end text-bodycopy text-lg font-medium lg:self-auto">
          {title}
        </span>
        <button className="row-start-1 mb-2 self-end justify-self-end lg:mb-0 lg:self-center">
          <svg width="21" height="5" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M2.5 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Zm8 0a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z"
              fill="#BBC0FF"
              fillRule="evenodd"
            />
          </svg>
        </button>
        <span className="row-start-2 self-start text-4xl font-light lg:self-end lg:text-5xl lg:font-regular">
          {currentPeriod || ""}
          {currentPeriodText}
        </span>
        <span className="row-start-2 mt-4 self-start justify-self-end text-xs text-paleblue lg:col-start-1 lg:row-start-3 lg:justify-self-start">
          {lastPeriod} - {previousPeriod || ""}
          {previousPeriodText}
        </span>
      </div>
    </article>
  );
}

export { Card };
