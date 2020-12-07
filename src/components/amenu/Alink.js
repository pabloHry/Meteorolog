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
      iconeSvg: "iconeSvg",
    },
    {
      titre: "Statistics",
      Icone: IoMdStats,
      iconeSvg: "iconeSvg",
    },
    {
      titre: "Map",
      Icone: FaMapMarkerAlt,
      iconeSvg: "iconeSvg",
    },
    {
      titre: "Calendar",
      Icone: VscCalendar,
      iconeSvg: "iconeSvg",
    },
    {
      titre: "Setting",
      Icone: MdSettings,
      iconeSvg: "iconeSvg",
    },
  ];
  return (
    <div className="links">
      {links.map(({ titre, Icone, iconeSvg }, key) => (
        <div className="test my-1" key={key}>
          <Icone className={`amenu-size ml-4 ${iconeSvg}`} />
          <p className="title p-3">{titre}</p>
        </div>
      ))}
    </div>
  );
};

export default Alink;
