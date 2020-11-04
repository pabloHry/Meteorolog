import React from "react";
import amsterdam from "../../dist/img/amsterdam.jpg";
import london from "../../dist/img/london.jpg";

const Rwf = () => {
  const CardGenerator = [
    {
      Img: amsterdam,
      title: "Amsterdam",
    },
    {
      Img: london,
      title: "London",
    },
    {
      Img: london,
      title: "London",
    },
    {
      Img: london,
      title: "London",
    },
    {
      Img: london,
      title: "London",
    },
  ];
  return (
    <div className="wf-page d-flex flex-wrap">
      {CardGenerator.map(({ Img, title }, key) => (
        <div className="card border-0" key={key}>
          <img className="card-img-top " src={Img} alt="Card image cap" />
          <div className="card-body">
            <p className="card-text text-center">{title}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Rwf;
