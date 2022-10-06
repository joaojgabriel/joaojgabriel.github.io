import React, { useState } from "react";
import { Header } from "./Header.js";
import { Card } from "./Card.js";
import { nanoid } from "nanoid";
import DATA from "../../data.json";

function Dashboard() {
  const [chosenPeriod, setChosenPeriod] = useState("weekly");
  const cardList = DATA.map((card) => (
    <Card
      title={card.title}
      period={chosenPeriod}
      currentPeriod={card.timeframes[chosenPeriod].current}
      previousPeriod={card.timeframes[chosenPeriod].previous}
      key={nanoid()}
    />
  ));
  return (
    <section className="grid-rows-auto mx-auto grid w-11/12 items-start gap-6 py-20 md:grid-cols-2 lg:h-[500px] lg:w-auto lg:grid-cols-xl lg:grid-rows-2 lg:py-0">
      <Header
        chosenPeriod={chosenPeriod}
        onChooseDaily={() => setChosenPeriod("daily")}
        onChooseWeekly={() => setChosenPeriod("weekly")}
        onChooseMonthly={() => setChosenPeriod("monthly")}
      />

      {cardList}
    </section>
  );
}

export { Dashboard };
