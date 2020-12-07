import React from "react";
import amsterdam from "../../dist/img/amsterdam.jpg";
import london from "../../dist/img/london.jpg";
import budapest from "../../dist/img/budapest.jpg";
import paris from "../../dist/img/paris.jpg";
import chicago from "../../dist/img/chicago.jpg";
import { HiSun, HiMoon } from "react-icons/hi";

const Rwf = () => {
  const CardGenerator = [
    {
      Img: amsterdam,
      title: "Amsterdam",
      Icone: HiSun,
      IconeColor: "text-warning",
      alt: "Amsterdam",
    },
    {
      Img: london,
      title: "London",
      Icone: HiSun,
      IconeColor: "text-warning",
      alt: "London",
    },
    {
      Img: budapest,
      title: "Budapest",
      Icone: HiMoon,
      IconeColor: "text-secondary",
      alt: "Budapest",
    },
    {
      Img: paris,
      title: "Paris",
      Icone: HiSun,
      IconeColor: "text-warning",
      alt: "Paris",
    },
    {
      Img: chicago,
      title: "Chicago",
      Icone: HiMoon,
      IconeColor: "text-secondary",
      alt: "Chicago",
    },
  ];
  return (
    <div className="wf-page">
      <h5 className="ml-4">Weather Forecast</h5>
      <div className="d-flex ml-2">
        {CardGenerator.map(({ Img, title, alt, Icone, IconeColor }, key) => (
          <div className="card border-0 p-3" key={key}>
            <div className="position-relative">
              <img className="card-img-top z1" src={Img} alt={alt} />
              <div className="bg-white myLabel position-absolute z2 ">
                <small className="textH p-2 ml-2 position-absolute">
                  12:31
                </small>
                <Icone
                  className={`soleilM mb-3 position-absolute ${IconeColor}`}
                />
              </div>
            </div>
            <div className="card-body">
              <p className="card-text text-center">{title}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rwf;
