const { expect } = require('chai');
const { ethers } = require('hardhat');

describe('Token', () => {
let token 

  beforeEach(async ()=> {
    const Token = await ethers.getContractFactory('Token')
    token = await Token.deploy()
  })

  it('has correct name', async() => {
    const name = expect(await token.name()).to.equal('Dapp University')
  })
  it('has correct symbol', async() => {
    const symbol = expect(await token.symbol()).to.equal('Dapp')
  })
  it('has correct decimals', async() => {
    const decimals = expect(await token.decimals()).to.equal('18')
  })
  it('has correct Total Supply', async() => {
    expect(await token.totalSupply()).to.equal('1000000000000000000000000')
  })
})

