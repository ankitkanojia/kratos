const KratosToken = artifacts.require("./KratosToken.sol");
const KratosTokenSale = artifacts.require("./KratosTokenSale.sol");

module.exports = function(deployer) {
    deployer.deploy(KratosToken, 1000000).then(function() {
        // Token price is 0.001 Ether
        var tokenPrice = 1000000000000000;
        return deployer.deploy(KratosTokenSale, KratosToken.address, tokenPrice);
    });
};


