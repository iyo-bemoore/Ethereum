// built in Node module
const assert = require("assert");
// local test network
const ganache = require("ganache-cli");
// middleman => provides libraries to facilitate interaction with remote or local ethereum networks.
const Web3 = require("web3");
const web3 = new Web3(ganache.provider());
const { interface, bytecode } = require("../compile");

let lottery;
let accounts;
beforeEach(async () => {
  accounts = await web3.eth.getAccounts();
  lottery = await new web3.eth.Contract(JSON.parse(interface))
    .deploy({ data: bytecode })
    .send({ from: accounts[0], gas: "1000000" });
});

describe("Lottery", () => {
  it("Deploys a contract", () => {
    assert.ok(lottery.options.address);
  });

  it("allows one account to enter", async () => {
    await lottery.methods.enter().send({
      from: accounts[0],
      value: web3.utils.toWei("0.02", "ether")
    });

    const players = await lottery.methods.getPlayers().call({
      from: accounts[0]
    });
    assert.equal(accounts[0], players[0]);
    assert.equal(1, players.length);
  });

  it("allows multiple players to enter", async () => {
    await lottery.methods.enter().send({
      from: accounts[1],
      value: web3.utils.toWei("0.03", "ether")
    });
    await lottery.methods.enter().send({
      from: accounts[2],
      value: web3.utils.toWei("0.04", "ether")
    });
    const players = await lottery.methods.getPlayers().call({
      from: accounts[0]
    });
    assert.equal(2, players.length);
  });

  it("requires a minimum amout of ether to enter", async () => {
    try {
      await lottery.methods.enter().send({
        from: accounts[0],
        value: 0
      });
      assert(false); // if this line executes, means the test failed, and we then exit the block and the test.
    } catch (error) {
      assert(error); // if this hits, the test passes. 
    }
  });

  it('allows only the manager to call pickAWinner', async () => {
     try {
         await lottery.methods.pickAWinner().send({
           from:accounts[1]
         });
         assert(false);
     }catch(error) {
        assert(error);
     }
  });

  it('sends the winner the amount of ether won', async () => {
    await lottery.methods.enter().send({
      from: accounts[0],
      value:web3.utils.toWei('2','ether')
    });

    const initialBalance = await web3.eth.getBalance(accounts[0]);
    await lottery.methods.pickAWinner().send({
      from:accounts[0]
    });
    
    const finalBalance = await web3.eth.getBalance(accounts[0]);
    const difference = finalBalance - initialBalance;
    
    assert(difference > web3.utils.toWei('1.8','ether'));
    const players = await lottery.methods.getPlayers().call({
      from: accounts[0]
    });
    assert.equal(0, players.length);

  
  })



});
