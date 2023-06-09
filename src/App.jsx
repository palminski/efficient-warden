
import './App.css';

import { useState } from 'react';

import { Referrals, Settings } from './pages/index'
import { Nav } from './components';


function App() {
  //States
  const [pageSelected, setPageSelected] = useState('referrals');

  //return JSX
  return (
    <div className="App">

      <Nav pageSelected={pageSelected} setPageSelected={setPageSelected} />

      {pageSelected === 'referrals' && <Referrals />}
      {pageSelected === 'settings' && <Settings />}

    </div>
  );
}

export default App;