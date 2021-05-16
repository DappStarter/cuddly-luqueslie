require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const WalletProvider = require('./src/lib/wallet-provider');


let mnemonic = 'gloom private boil suggest name renew still concert grace opinion bottom skin'; 
let testAccounts = [
"0x663e700dccecd105cd7a5b031f8677b479f2df0758351bc379ae7a63d883fada",
"0x388ac728236306cb9dd0884af967f6cbcc08c7cdbeb9a8e3c248e4f81d713f48",
"0xe5a19443e6696257f1d965e95eb5843fa237d49899c377b8052ebb037e329b6c",
"0x264228758631142a1b974076757e8132ca98d59a7fe4f6707c388f2aefb19503",
"0x7e34d836ae1c1ca0ea0bb7ad3c3e8b0bd5555c53168bb0fc295ef8ebaf4f9f52",
"0x1fdb4999b11fd6c66ddb9dcfdc7ee27c078835ea77952a641c08ef8a8d7311a7",
"0x71ff964f625cb44fea2ceaca0be184bf8d2ba9755ac217bbcd748620193abb4d",
"0x44224eddd0e9aefc4c77ea7a070f8a4e252d9e616d3aa32ccc7a049be45c4264",
"0x44ad4e8042a168f7c5f6d7a8720be28e9ab6974b30f67fc7d2015b22df7bc68e",
"0xab739596bea85f24c659bbe094049fc7d38ca20b57fa89a17012ac3d26b555a0"
]; 
let devUri = 'https://test.confluxrpc.org/v2';
let host = devUri.replace('http://','').replace('https://','');
let privateKeys = new WalletProvider(mnemonic, 10).privateKeys;

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            network_id: '*',
            host,
            port: 80,
            type: "conflux",
            privateKeys,
            walletProvider: () => new WalletProvider(mnemonic, 10)
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

