import React from "react";
import Amenu from "./amenu/Amenu";
import Rmenu from "./right/Rmenu";

const Cards = () => (
  <div>
    <div className="py-3">
      <div className="d-flex justify-content-center page">
        <Amenu />
        <div className="main-page">
          <Rmenu />
        </div>
      </div>
    </div>
  </div>
);

export default Cards;
