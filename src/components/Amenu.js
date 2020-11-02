import React from "react";
import Atitle from "./amenu/Atitle";
import Afavority from "./amenu/Afavority";
import Alink from "./amenu/Alink";

const Amenu = () => (
  <div className="amenu ">
    <Atitle />
    <hr className="hr mb-5" />
    <Alink />
    <Afavority />
  </div>
);

export default Amenu;
