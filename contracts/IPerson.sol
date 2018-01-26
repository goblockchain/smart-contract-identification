pragma solidity ^0.4.18;

contract IPerson {
    
    function changeEmail(string _newMail) public;
    function sendValidationIdentity(address _addressPerson, bool _isValid) public;
    function validatorIdentity(address _contractPersonValidator, bool isValid) public;
}