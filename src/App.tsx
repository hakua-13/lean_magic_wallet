import { createContext, useState } from 'react';
import './App.css';

import { Login } from './components/Login';
import { Transfer } from './components/Transfer';
import { Logout } from './components/Logout';

export const UseAccount = createContext<any>([]);

function App() {
  const [ account, setAccount ] = useState();

  return (
    <div className="App">
      <UseAccount.Provider value={{ account, setAccount}}>
        <Login/>
        <Logout/>
        <Transfer/>
      </UseAccount.Provider>
    </div>
  );
}

export default App;
