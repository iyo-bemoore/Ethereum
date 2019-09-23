const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

const { interface, bytecode } = require('../compile');


let accounts
let inbox;
const INITIAL_MESSAGE = "Deployed"
const InfuraApi = "rinkeby.infura.io/v3/f2205ed54d144eadae878f6e5ae7e731"

beforeEach(async () => {
  // get the list of the accounts
  accounts = await web3.eth.getAccounts()
  // use one of the account numbers to deploy the contract
  inbox = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode, arguments: ['hi there'] })
    .send({ from: accounts[0], gas: '1000000' })
})

describe('Inbox', () => {
  it('Deploys a contract', () => {
    assert.ok(inbox.options.address)
  });

  it('should have a message', () => {
    return async () => {
      const message = await inbox.methods.message().call();
      assert.equal(message, 'hi there');
    }
  });

  it('should update the message', () => {
    return async () => {
      await inbox.methods.setMessage('OK').send({ from: accounts[0] });
      const message = await inbox.methods.message().call();
      assert.equal(message, 'OK');
    }
  })
})


