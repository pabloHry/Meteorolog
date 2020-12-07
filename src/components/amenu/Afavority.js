import React from "react";
import { WiNightSnow } from "react-icons/wi";
import { IoMdSpeedometer } from "react-icons/io";
import { ProgressBar } from "react-bootstrap";

const Afavority = () => {
  const now = 70;
  const precipitation = 25;

  const progressInstance = (
    <ProgressBar now={now} variant="warning" className="pt w-75 ml-4" />
  );

  const precipitationInstance = (
    <ProgressBar
      now={precipitation}
      variant="warning"
      className="pt w-75 ml-4"
    />
  );
  return (
    <div className="amenu ">
      <div className="favorite">
        <div className="meteo-favo text-justify d-flex justify-content-center">
          <WiNightSnow className="amenu-sizes text-primary my-3" />
          <p className="p-3">
            Today
            <br />
            <small>11:44</small>
            <br />
            <small>Mon, 11 January</small>
          </p>
        </div>
        <div className="dp text-center">
          <h2>+4°C</h2>
          <h5>
            New York <br />
            <small className="hit">United States</small>
          </h5>
        </div>
        <div className="humi">
          <small className="hit p-4">Humidity:</small>
          <small className="p-4">70%</small>
          {progressInstance}
        </div>
        <div className="preci">
          <small className="hit p-4">Precipitation:</small>
          <small className="pl-2">25%</small>
          {precipitationInstance}
        </div>
        <div className="wind ">
          <small className="hit pl-4">Wind:</small>
          <IoMdSpeedometer className="amenu-size text-warning ml-2" />
          <small className="p-2">4.5km/h</small>
        </div>
      </div>
    </div>
  );
};

export default Afavority;
