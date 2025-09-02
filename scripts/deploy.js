const hre = require("hardhat");

async function main() {
  const maxSupply = 1000000;
  const Token = await hre.ethers.getContractFactory("SocialToken");
  const token = await Token.deploy(maxSupply, await (await hre.ethers.getSigners())[0].getAddress());

  await token.deployed();

  console.log(
    "SocialToken deployed to:", token.address
  );

  const postReward = 5;
  const likeReward = 1;
  const commentReward = 2;
  const Media = await hre.ethers.getContractFactory("SocialMediaContract");
  const media = await Media.deploy(postReward, likeReward, commentReward, token.address);

  await media.deployed();

  console.log(
    "SocialMediaContract deployed to:", media.address
  );

  // Transfer tokens to the SocialMediaContract
  const transferAmount = hre.ethers.utils.parseEther("500000"); // 50% of total supply
  await token.transfer(media.address, transferAmount);

  console.log(
    `Transferred ${hre.ethers.utils.formatEther(transferAmount)} tokens to SocialMediaContract`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
