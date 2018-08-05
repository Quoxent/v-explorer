#!/bin/bash
# Download latest node and install.
bwklink=`curl -s https://api.github.com/repos/vulcano-crypto/vulcano/releases/latest | grep browser_download_url | grep linux64 | cut -d '"' -f 4`
mkdir -p /tmp/vulcano
cd /tmp/vulcano
curl -Lo vulcano.tar.gz $bwklink
tar -xzf vulcano.tar.gz
sudo mv ./bin/* /usr/local/bin
cd
rm -rf /tmp/vulcano
mkdir ~/.vulcano

# Setup configuration for node.
rpcuser=$(head /dev/urandom | tr -dc A-Za-z0-9 | head -c 13 ; echo '')
rpcpassword=$(head /dev/urandom | tr -dc A-Za-z0-9 | head -c 32 ; echo '')
cat >~/.vulcano/vulcano.conf <<EOL
rpcuser=$rpcuser
rpcpassword=$rpcpassword
daemon=1
txindex=1
EOL

# Start node.
vulcanod
