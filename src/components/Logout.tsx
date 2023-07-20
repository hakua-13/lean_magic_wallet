import { useContext } from 'react';
import { Magic } from 'magic-sdk';

import { UseAccount } from '../App';

export const Logout = () => {
  const { account, setAccount }= useContext(UseAccount);
  const customNodeOption = {
    rpcUrl: 'https://rpc-mumbai.maticvigil.com/',
    chainId: 80001,
  }

  const handleLogout = async() => {
    const magic = new Magic('',{
      network: customNodeOption
    })

    await magic.user.logout();
    setAccount('');
  }

  return(
    <button onClick={handleLogout}>logout</button>
  )
}