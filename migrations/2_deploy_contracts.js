const KratosToken = artifacts.require("./KratosToken.sol");

module.exports = function(deployer) {
    deployer.deploy(KratosToken);
};
