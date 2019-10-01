import React, { useState, useEffect } from "react";
import lottery from "./lottery";
import web3 from "./web3";
import Header from "./components/Header";
import Form from "./components/Form";

// class App extends Component {
  
//   state = { 
//     manager: "",
//     players:[],
//     balance:'' 
//   };
  
//   async componentDidMount() {
//     const manager = await lottery.methods.manager().call();
//     const players = await lottery.methods.getPlayers().call();
//     const balance = await web3.eth.getBalance(lottery.options.address)
//     this.setState({ manager,players,balance });
//   }
//   render() {
//     return (
//       <div className="wrapper">
//         <Header/>
//         <Form/>
//       </div>
//     );
//   }
// }

const App = () => {
const [manager, setManager] = useState("")
const [balance, setBalance] = useState("")
const [players, setPlayers] = useState([])

useEffect(() => {
  async function getLotteryData(){
    const manager = await lottery.methods.manager().call();
    const players = await lottery.methods.getPlayers().call();
    const balance = await web3.eth.getBalance(lottery.options.address)
    setManager(manager);
    setBalance(balance);
    setPlayers([...players, players]);
  }
  getLotteryData();
},[])
 

  return(
    <>
    <Header/>
     <div>{manager}</div>
     <div>{balance}</div>
     <div>{players.length}</div>
    <Form/>
   </>
  )
}

export default App;
