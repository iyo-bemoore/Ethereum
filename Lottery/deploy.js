const HDWalletProvider = require("truffle-hdwallet-provider");
const Web3 = require("web3");
const { endPoint, mNic } = require("./config/api");
const { interface, bytecode } = require("./compile");

const provider = new HDWalletProvider(mNic, endPoint);
const web3 = new Web3(provider);

const deploy = async () => {
  const accounts = await web3.eth.getAccounts();
  console.log("Attempting account on ", accounts[0]);

  const result = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({
      data: "0x" + bytecode,
      arguments: ["New message from the contract"]
    })
    .send({ from: accounts[0] });

  console.log("Contract deployed to", result.options.address);
};
deploy();
