const { ethers } = require("hardhat");

async function main() {
    const [deployer] = await ethers.getSigners();

    console.log("Deploying contracts with the account:", deployer.address);

    const Vitcoin = await ethers.getContractFactory("Vitcoin");
    const initialSupply = 10000000; // Adjust the initial supply if needed
    const vitcoin = await Vitcoin.deploy(initialSupply);

    console.log("Vitcoin deployed to:", vitcoin.address);
}

main()
    .then(() => process.exit(0))
    .catch((error) => {
        console.error(error);
        process.exit(1);
    });
