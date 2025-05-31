import { useState } from 'react';
import reactLogo from './assets/react.svg';
import workintech from '/workintech.svg';
import './App.css';
import SiparisFormu from './components/SiparisFormu';
import MainPage from './components/MainPage';

function App() {
  const [formActive, setFormActive] = useState(false);

  return (
    <div>
      {formActive 
      ? <SiparisFormu onBack={() => setFormActive(false)} />
      : <MainPage onOrder={() => setFormActive(true)} />}
    </div>
  );
}

export default App
