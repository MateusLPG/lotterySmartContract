const assert = require('assert');
const ganache = require('ganache-cli');
const Web3 = require('web3');
const web3 = new Web3(ganache.provider);

const { interface, bytecode } = require('../compile');

let lottery; //instance of our contract
let accounts;

beforeEach(async () => {
    //armazena as contas do ganache
    accounts = await web3.eth.getAccounts();

    //cria um objeto do contrato
    lottery = await new web3.eth.Contract(JSON.parse(interface))
        .deploy({ data: bytecode })
        .send({ from: accounts[0], gas: '1000000'});
})

describe('')