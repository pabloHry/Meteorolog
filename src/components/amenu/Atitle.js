import React, { Component } from "react";
import { WiThermometer } from "react-icons/wi";

class Atitle extends Component {
  render() {
    return (
      <div className="tests ml-3">
        <h5 className="meteoText my-4">
          <WiThermometer className="thermo-size" />
          METEOROLOG
        </h5>
      </div>
    );
  }
}

export default Atitle;
