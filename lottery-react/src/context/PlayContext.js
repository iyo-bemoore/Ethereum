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
      setPlayers([...players]);
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

  const pickWinner = async () => {
    const accounts = await web3.eth.getAccounts();
    setConfirmation("Searching for a Winner!");
    await lottery.methods.pickAWinner().send({
      from: accounts[0]
    });
    setConfirmation("A Winner has been picked!");
  };
  return (
    <PlayContext.Provider
      value={{
        manager,
        players,
        balance: web3.utils.fromWei(balance, "ether"),
        amount,
        addAmount,
        confirmation,
        pickWinner
      }}
    >
      {props.children}
    </PlayContext.Provider>
  );
};

export default PlayContextProvider;
