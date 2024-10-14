require('@nomiclabs/hardhat-waffle');
require("dotenv").config();

module.exports = {
    solidity: "0.8.27",
    networks: {
        testnode: {
            url: "https://testnode.nnnt.shop",
            chainId: 1337,
            accounts: [`0x${process.env.PRIVATE_KEY}`],
        },
    },
};
