import React, { createContext, useState, useEffect } from "react";
import lottery from "../lottery";
import web3 from "../web3";

export const PlayContext = createContext();

const PlayContextProvider = props => {
  const [manager, setManager] = useState("");
  const [balance, setBalance] = useState("");
  const [players, setPlayers] = useState([]);
  const [amount, setAmount] = useState(0);
  const [confirmation, setConfirmation] = useState("");

  useEffect(() => {
    async function getLotteryData() {
      const manager = await lottery.methods.manager().call();
      const players = await lottery.methods.getPlayers().call();
      const balance = await web3.eth.getBalance(lottery.options.address);
      setManager(manager);
      setBalance(balance);
      setPlayers([...players, players]);
    }
    getLotteryData();
  }, []);

  const addAmount = async amount => {
    const accounts = await web3.eth.getAccounts();
    setConfirmation("Waiting on transaction to calculate...");
    await lottery.methods.enter().send({
      from: accounts[0],
      value: web3.utils.toWei(amount, "ether")
    });
    setConfirmation("You have been accepted ! ");
  };
  
  return (
    <PlayContext.Provider
      value={{ manager, players, balance, amount, addAmount, confirmation }}
    >
      {props.children}
    </PlayContext.Provider>
  );
};

export default PlayContextProvider;
