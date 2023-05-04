

import './App.css';
import Nav from './components/Nav';
import Home from './pages/Home';
import CryptoIndex from './pages/CryptoIndex';
import CryptoShow from './pages/CryptoShow';
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Nav />
      <h1>My app with crypto prices</h1>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/crypto-index' element={<CryptoIndex />} />
        <Route path='/price'>
          <Route path=':symbol' element={<CryptoShow />} />
        </Route>
      </Routes>
      
    </div>
  );
}

export default App;
