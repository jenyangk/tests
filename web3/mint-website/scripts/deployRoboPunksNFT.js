const hre = require("hardhat");

async function main() {
  const RoboPunksNFT = await hre.ethers.getContractFactory("RoboPunksNFT");
  const robopunksnft = await RoboPunksNFT.deploy();

  await robopunksnft.deployed();

  console.log("RoboPunksNFT deployed to:", robopunksnft.address);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
