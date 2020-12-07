import React from "react";
import { BsSearch } from "react-icons/bs";

const Rsearch = () => (
  <div className="search-page p-4">
    <div className="input-group">
      <div className="input-group-prepend">
        <span className="input-group-text">
          <BsSearch className="search-icone" />
        </span>
      </div>
      <form className="form-inline">
        <input
          className="form-control searchT"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
      </form>
    </div>
  </div>
);

export default Rsearch;
