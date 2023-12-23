import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import '../styles/globals.css'

import {
  WalletProvider,
  HippoWalletAdapter,
  AptosWalletAdapter,
  HippoExtensionWalletAdapter,
  MartianWalletAdapter,
  FewchaWalletAdapter,
  PontemWalletAdapter,
  SpikaWalletAdapter,
  RiseWalletAdapter,
  FletchWalletAdapter
} from '@manahippo/aptos-wallet-adapter';
import { ToastContainer } from 'react-toastify';

function MyApp({ Component, pageProps }) {
  const wallets = [
    
    // new HippoWalletAdapter(),
   
    new AptosWalletAdapter(),
   
    // new HippoExtensionWalletAdapter(),
    
  ];

  return <WalletProvider
      wallets={wallets}
      autoConnect={false} /** allow auto wallet connection or not **/
      onError={(error) => {
        console.log('Handle Error Message', error);
      }}>
        <Component {...pageProps} />
        <ToastContainer />
    </WalletProvider>
}

export default MyApp

