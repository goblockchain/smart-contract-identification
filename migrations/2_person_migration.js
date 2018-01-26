var pessoaContrato = artifacts.require("Person");

var _name = "Joao";
var _email = "joao@gmail.com";
var _phone = "123456789";

module.exports = function(deployer) {
  // deployment steps
    deployer.deploy(pessoaContrato, _name, _email, _phone).then(function(){
        console.info(pessoaContrato.address);
    })
};