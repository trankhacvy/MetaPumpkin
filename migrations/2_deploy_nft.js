const Pumpkin = artifacts.require("./Pumpkin.sol");

module.exports = async function(deployer) {
  deployer.deploy(Pumpkin, "https://google.com");
};
