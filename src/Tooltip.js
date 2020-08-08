import React from "react";
import "./index.css";

const Tooltip = (props) => {
  return (
    <div className="main">
      <div className="buttons">
        <div id="top-hover"> here is a tip </div>
        <button id="press" onMouseEnter={props.onMouseHover}>
          Hover
        </button>
        {/* <div id="bottom-hover"> here is a tip </div> */}
      </div>
    </div>
  );
};

export default Tooltip;
