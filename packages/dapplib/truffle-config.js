require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'idea problem occur trophy figure render remind horse grace nation fortune tent'; 
let testAccounts = [
"0x2a8368e8add54e23688308bf807225a72f631b186f643057b88d57d039425606",
"0x5589c3a444c65690f777ebb992ccac7e6b900660a8120a50391f457471c638f4",
"0xc85747dff129f46aba1c64491d973c95d79ef9dc3cd20ab49ccf4a14c65db9ec",
"0x985978fd431cd97ad41305813d0f9803ce6f95a9183f040ecd219864b40ce75a",
"0x03406f8f91fca4dcd39d0ed0d812207b05cb1bd8c69eebe14c1202524193b63b",
"0x794af56e4251dcdec67eb601cb7e26f17f38ab4e2f5953c5dfb5e19b2ee96648",
"0xdf36f59b908dd0af3579ee2c698910301793d82595e3ba007cbb7841f1f3103d",
"0x108860de996244c2b40d5d1a0c36f486dd1f93a21bf788a0768a3294fac1b10c",
"0xbd6c79b71edf59146779beaa83692ef8abd2c6018245c074bf158667aae3dfa0",
"0x57a8df2c419e1fe76da2fd1c8fd80f248a9fbc412aa5f394c71218a4652aa7c0"
]; 
let devUri = 'https://rpc-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};

