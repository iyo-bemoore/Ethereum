import React, { Component } from "react";
import lottery from "./lottery";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { manager: "" };
  }
  async componentDidMount() {
    const manager = await lottery.methods.manager().call();
    this.setState({ manager });
  }
  render() {
    return <div> { this.state.manager } </div>;
  }
}

export default App;
