import { useContext } from 'react';
import { Magic } from 'magic-sdk';

import { UseAccount } from '../App';

export const Login = () => {
  const { account, setAccount } = useContext(UseAccount)

  const customNodeOption = {
    rpcUrl: 'https://rpc-mumbai.maticvigil.com/',
    chainId: 80001,
  }

  const login = async() => {
    console.log('connect wallet')

    const magic = new Magic('',{
      network: customNodeOption
    })

    const accounts = await magic.wallet.connectWithUI();
    if(accounts.length != 0){
      setAccount(accounts[0]);
    }
    console.log("accounts: ", accounts[0]);
  }

  return(
    <>
      <h1>hello</h1>
      <button onClick={login}>connect wallet</button>
    </>
  )
}