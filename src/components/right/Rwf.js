import React from "react";
import amsterdam from "../../dist/img/amsterdam.jpg";
import london from "../../dist/img/london.jpg";
import budapest from "../../dist/img/budapest.jpg";
import paris from "../../dist/img/paris.jpg";
import chicago from "../../dist/img/chicago.jpg";

const Rwf = () => {
  const CardGenerator = [
    {
      Img: amsterdam,
      title: "Amsterdam",
      alt: "Amsterdam",
    },
    {
      Img: london,
      title: "London",
      alt: "London",
    },
    {
      Img: budapest,
      title: "Budapest",
      alt: "Budapest",
    },
    {
      Img: paris,
      title: "Paris",
      alt: "Paris",
    },
    {
      Img: chicago,
      title: "Chicago",
      alt: "Chicago",
    },
  ];
  return (
    <div className="wf-page d-flex flex-wrap justify-content-between">
      {CardGenerator.map(({ Img, title, alt }, key) => (
        <div className="card border-0 " key={key}>
          <img className="card-img-top" src={Img} alt={alt} />
          <div className="card-body">
            <p className="card-text text-center">{title}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Rwf;
