import React from "react";
import Tooltip from "./Tooltip";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      isHover: false,
      showTopTip: true,
    };
  }

  handlMouseEnter = () => {
    this.setState(
      {
        isHover: true, // hover state changing
      },
      () => console.log("hovering on button", this.state.isHover)
    );
  };

  handlMouseLeave = () => {
    this.setState(
      {
        isHover: false, // hover state changing
      },
      () => console.log("hovering on button", this.state.isHover)
    );
  };

  handleOptionChange = () => {
    this.setState(
      {
        showTopTip: !this.state.showTopTip,
      },
      () => console.log("show top tooltip", this.state.showTopTip)
    );
  };

  render() {
    return (
      <Tooltip
        onMouseIn={this.handlMouseEnter}
        onMouseOut={this.handlMouseLeave}
        onChangeOption={this.handleOptionChange}
        state={this.state}
      />
    );
  }
}

export default App;
