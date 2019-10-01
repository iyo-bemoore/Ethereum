import React, { Component } from "react";
import lottery from "./lottery";
import web3 from "./web3";
import Header from "./components/Header";

class App extends Component {
  
  state = { 
    manager: "",
    players:[],
    balance:'' 
  };
  
  async componentDidMount() {
    const manager = await lottery.methods.manager().call();
    const players = await lottery.methods.getPlayers().call();
    const balance = await web3.eth.getBalance(lottery.options.address)
    this.setState({ manager,players,balance });
  }
  render() {
    console.log(this.state)
    return (
       <Header/>
    );
  }
}

export default App;
