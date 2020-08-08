import React from "react";
import Tooltip from "./Tooltip";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      onButton: false,
    };
  }

  handlMousehover = () => {
    console.log("hovering on button");
  };

  render() {
    return <Tooltip onMouseHover={this.handlMousehover} />;
  }
}

export default App;
