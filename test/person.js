//http://chaijs.com/guide/styles/#should

var Person = artifacts.require("Person");

const BigNumber = web3.BigNumber

const should = require('chai')
	.use(require('chai-as-promised'))
	.use(require('chai-bignumber')(BigNumber))
	.should()

contract('Person', function(accounts) {
	var owner = accounts[0];
	var person;
    var email = "teste@gmail.com";

	it("deploy Person", async function() {
		person = await Person.new("henrique", email, "12345678");
	});

	it("should prevent vote the same address", async function() {
		await person.sendValidationIdentity(person.address, true).should.be.rejectedWith('VM Exception while processing transaction: revert');
    });

	it("should change the email", async function() {
        await person.changeEmail("fale.henrique@gmail.com");
        (await person.getEmail()).should.be.equal("fale.henrique@gmail.com");
	});    
});
