# To create own very own testnet network 
# this below line downloads and installs nvm (node version manager)
curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.40.1/install.sh | bash
# this line adds the binary executable to path
source ~/.bashrc
# this line installs node v22.8.0
nvm install v22.8.0
# this line sets the global version of node used to be v22.8.0
nvm use v22.8.0
# this line installs the ganache-cli which we will use to run our test cryptonetwork
npm install -g ganache-cli
sudo ganache-cli --host 0.0.0.0 --port 80
