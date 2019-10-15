# Ethereum private net for testing and demo purpose
FROM ethereum/client-go

VOLUME /ethereum

WORKDIR /usr/share/ 

RUN touch pass

EXPOSE 8545 8546 30303 30303/udp

ENTRYPOINT ["geth", "--dev", "--datadir=/ethereum", "--rpcaddr", "0.0.0.0", \
        "--ipcdisable", "--allow-insecure-unlock", "--unlock", "0", "--password", "/usr/share/pass", \
         "--rpcapi", "personal,db,eth,net,web3,miner", "--rpc"]