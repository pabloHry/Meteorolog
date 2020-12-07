import React from "react";
import Atitle from "./Atitle";
import Afavority from "./Afavority";
import Alink from "./Alink";

const Amenu = () => (
  <div className="amenu ">
    <Atitle />
    <hr className="hr" />
    <Alink />
    <Afavority />
  </div>
);

export default Amenu;
