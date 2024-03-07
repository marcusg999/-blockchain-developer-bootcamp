const { expect } = require('chai');
const { ethers } = require('hardhat');

describe('Token', () => {
let token 
let accounts
let deployer

  beforeEach(async ()=> {
    const Token = await ethers.getContractFactory('Token')
    token = await Token.deploy('Dapp University', 'DAPP', '1000000')
  
    accounts = await ethers.getSigners()
    deployer = accounts[0]
  })

  describe('Deployment', () =>{
    const name = 'Dapp University'
    const symbol = 'DAPP'
    const decimals = '18'
    const totalSupply = '1000000'
    it('has correct name', async() => {
      const name = expect(await token.name()).to.equal('Dapp University')
    })
    it('has correct symbol', async() => {
      const symbol = expect(await token.symbol()).to.equal('DAPP')
    })
    it('has correct decimals', async() => {
      const decimals = expect(await token.decimals()).to.equal('18')
    })
    it('has correct total Supply', async() => {
      expect(await token.totalSupply()).to.equal('1000000000000000000000000')
    })
    it('has correct total deployer', async() => {
      expect(await token.balanceOf(deployer.address)).to.equal(totalSupply)
    })
  })
  
})

