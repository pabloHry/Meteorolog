import React, { Component } from "react";
import { MdDashboard } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import { VscCalendar } from "react-icons/vsc";
import { MdSettings } from "react-icons/md";
import { IoMdStats } from "react-icons/io";
class Alink extends Component {
  render() {
    return (
      <div>
        <div className="test">
          <MdDashboard className="amenu-size my-1 ml-4" />
          <p className="ml-3 my-2">Dashboard</p>
        </div>
        <div className="test">
          <IoMdStats className="amenu-size my-1 ml-4" />
          <p className="ml-3 my-2">Statistics</p>
        </div>
        <div className="test">
          <FaMapMarkerAlt className="amenu-size my-1 ml-4" />
          <p className="ml-3 my-2">Map</p>
        </div>
        <div className="test">
          <VscCalendar className="amenu-size ml-4 my-1" />
          <p className="ml-3 my-2">Calendar</p>
        </div>
        <div className="test">
          <MdSettings className="amenu-size my-1 ml-4" />
          <p className="ml-3 my-2">Setting</p>
        </div>
      </div>
    );
  }
}

export default Alink;
