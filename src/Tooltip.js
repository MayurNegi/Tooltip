import React from "react";
import "./index.css";

const Tooltip = (props) => {
  return (
    <div className="main">
      <div id="option-tag">
        <select onChange={props.onChangeOption}>
          <option value="true">Top</option>
          <option value="false">Bottom</option>
        </select>
      </div>
      <div className="buttons">
        {props.state.isHover && props.state.showTopTip && (
          <div style={{ margin: 0 }}>Here is a tip</div>
        )}
        <button
          id="press"
          onMouseEnter={props.onMouseIn}
          onMouseLeave={props.onMouseOut}
        >
          Hover
        </button>
        {props.state.isHover && !props.state.showTopTip && (
          <div style={{ margin: 0 }}>Here is a tip</div>
        )}
      </div>
    </div>
  );
};

export default Tooltip;
