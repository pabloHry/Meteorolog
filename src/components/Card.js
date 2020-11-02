import React, { Component } from "react";
import Amenu from "./Amenu";

class Cards extends Component {
  render() {
    return (
      <div>
        <div className="container my-5 ">
          <div className="row card-page ">
            <Amenu></Amenu>
            <div className="col-9 main-page"></div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cards;
