import './App.css';
import Main from './components/Main'

import { EthereumClient, w3mConnectors, w3mProvider } from '@web3modal/ethereum'
import { Web3Modal } from '@web3modal/react';
import { configureChains, createConfig, WagmiConfig } from 'wagmi'
import { bsc } from 'wagmi/chains'

function App() {
  const chains = [bsc];
  const projectId = "8644e4ce00c0122a8a9cd295a308fbc1"

  const { publicClient } = configureChains(chains, [w3mProvider({ projectId })])
  const wagmiConfig = createConfig({
    autoConnect: true,
    connectors: w3mConnectors({ projectId, chains }),
    publicClient
  })
  const ethereumClient = new EthereumClient(wagmiConfig, chains);

  return (
    <div className="App">
        <WagmiConfig config={wagmiConfig}>
          <Main/>
          <Web3Modal projectId={projectId} ethereumClient={ethereumClient} />
        </WagmiConfig>
    </div>
  );
}

export default App;
