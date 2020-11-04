import React from "react";
import { MdDashboard, MdSettings } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import { VscCalendar } from "react-icons/vsc";
import { IoMdStats } from "react-icons/io";

const Alink = () => {
  const links = [
    {
      titre: "Dashboard",
      Icone: MdDashboard,
    },
    {
      titre: "Statistics",
      Icone: IoMdStats,
    },
    {
      titre: "Map",
      Icone: FaMapMarkerAlt,
    },
    {
      titre: "Calendar",
      Icone: VscCalendar,
    },
    {
      titre: "Setting",
      Icone: MdSettings,
    },
  ];
  return (
    <div className="links">
      {links.map(({ titre, Icone }, key) => (
        <div className="test" key={key}>
          <Icone className="amenu-size ml-4" />
          <p className="title ml-3">{titre}</p>
        </div>
      ))}
    </div>
  );
};

export default Alink;
