To create vit coin token 
First get your private key containing eth and save it in ```.env``` file in this directory
```
PRIVATE_KEY=YOUR_PRIVATE_KEY
```
give here your private key which you can get from metamask without 0x 
then in this directory 
run
```
npm install
npx hardhat compile
npx hardhat run scripts/deploy.js --network testnode
```
It will deploy to the test node to change your cryptorpcnode edit the file hardhat.config.js
https://github.com/i-Anurag1/devjams-web3/blob/main/vitcoin-project/hardhat.config.js#L7C1-L11C11
