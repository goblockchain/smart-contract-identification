// var Web3 = require("web3");
// var urlNode = 'http://localhost:8545';
// web3 = new Web3(new Web3.providers.HttpProvider(urlNode));

// if (web3 && web3.isConnected()) {
//   console.info('Connected');
// }

// web3.personal.unlockAccount(web3.eth.coinbase, "1", 15000);

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*",
      gas: 6712388,
      gasPrice: 65000000000,
      // from: "0xf17f52151EbEF6C7334FAD080c5704D77216b732"
    }
  },
  testnet: {
    host: "178.25.19.88", // Random IP for example purposes (do not use)
    port: 80,
    network_id: "*",        // Ethereum public network
    // optional config values:
    // gas
    // gasPrice
    // from - default address to use for any transaction Truffle makes during migrations
    // provider - web3 provider instance Truffle should use to talk to the Ethereum network.
    //          - if specified, host and port are ignored.
  }
};
