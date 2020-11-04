import React from "react";
import Amenu from "./amenu/Amenu";
import Rmenu from "./right/Rmenu";

const Cards = () => (
  <div>
    <div className="container my-5">
      <div className="row card-page">
        <Amenu />
        <div className="col-9 main-page">
          <Rmenu />
        </div>
      </div>
    </div>
  </div>
);

export default Cards;
