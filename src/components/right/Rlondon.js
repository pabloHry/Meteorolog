import React from "react";
import { WiNightSnow } from "react-icons/wi";
import { HiSun } from "react-icons/hi";
import { AiFillCloud } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";

const Rlondon = () => {
  const MeteoGenerator = [
    {
      Icone: WiNightSnow,
      temperature: "-5/+4",
      date: "11 Mon",
      iconeColor: "text-primary",
    },
    {
      Icone: WiNightSnow,
      temperature: "-5/+4",
      date: "12 Tue",
      iconeColor: "text-primary",
    },
    {
      Icone: HiSun,
      temperature: "-5/+4",
      iconeColor: "text-warning",
      date: "13 Wed",
    },
    {
      Icone: AiFillCloud,
      temperature: "-5/+4",
      date: "14 Thu",
      iconeColor: "text-primary",
    },
    {
      Icone: HiSun,
      iconeColor: "text-warning",
      temperature: "-5/+4",
      date: "15 Fri",
    },
    {
      Icone: WiNightSnow,
      iconeColor: "text-primary",
      temperature: "-5/+4",
      date: "16 Sat",
    },
    {
      Icone: HiSun,
      iconeColor: "text-warning",
      temperature: "-5/+4",
      date: "17 Sun",
    },
    {
      Icone: WiNightSnow,
      iconeColor: "text-primary",
      temperature: "-5/+4",
      date: "18 Mon",
    },
    {
      Icone: WiNightSnow,
      iconeColor: "text-primary",
      temperature: "-5/+4",
      date: "19 Tue",
    },
    {
      Icone: WiNightSnow,
      iconeColor: "text-primary",
      temperature: "-5/+4",
      date: "19 Tue",
    },
  ];

  return (
    <div className="wf-page ">
      <h5 className="ml-4">London</h5>
      <p className="text-right text-primary pr-5">
        Détail more
        <BsArrowRight />
      </p>
      <div className="d-flex p-1 my-3">
        {MeteoGenerator.map(({ Icone, temperature, date, iconeColor }, key) => (
          <div className="card card-temperature p-3 ml-4" key={key}>
            <Icone className={`amenu-sizes align-self-center ${iconeColor}`} />
            <small className="card-text text-center">{temperature}</small>
            <small className="card-text text-center text-secondary">
              {date}
            </small>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rlondon;
