
const { ethers } = require("hardhat");
const hre = require("hardhat");

async function main() {
    //fetch contract to deply
  const Token = await ethers.getContractFactory("Token")
    //deploy contract
    const token = await Token.deploy()
    await tokenwaitForDeployment()
    console.log(`Token Deployed to: ${token.getAddress()}`)
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

