import { Magic } from 'magic-sdk';
import { ethers } from 'ethers';
import { useContext } from 'react';

import { UseAccount } from '../App';

export const Transfer = () => {
  const magicNodeOptions = {
    rpcUrl: 'https://rpc-mumbai.maticvigil.com/',
    chainId: 80001
  }

  const { account, setAccount } = useContext(UseAccount);

  const transfer = async() => {
    const magic = new Magic('', {
      network: magicNodeOptions
    });

    const provider = await magic.wallet.getProvider();
    const web3Provider = new ethers.providers.Web3Provider(provider);

    const wei = ethers.utils.parseEther('0.01');
    // const wei = ethers.utils.parseEther('0.01').toString(); 

    const transaction = {
      from: account,
      to: '0xB05c8a4a1589F6809d1be61E81C0296a36652A26',
      amount: wei,
      // gas: 21000,
      gas: ethers.utils.hexlify(21000),
    };

    await web3Provider.sendTransaction(transaction as any)
  }

  return(
    <button onClick={transfer}>transfer ETH</button>
  )
}