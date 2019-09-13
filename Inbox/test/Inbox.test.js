const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider());

beforeEach( async () => {
  const req = web3.eth.getAccounts()
  const res = await req
  console.log(res) 
})

describe('Inbox', () => {
    it('Should return a list of accounts', () => { 

    })
})


