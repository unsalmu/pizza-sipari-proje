import { useState } from 'react';
import reactLogo from './assets/react.svg';
import workintech from '/workintech.svg';
import './App.css';
import SiparisFormu from './components/SiparisFormu';
import MainPage from './components/MainPage';
import Success from './components/Success';

function App() {
  const [view, setView] = useState('main');

  return (
    <div>
      {view === 'main' && 
      (<MainPage onOrder={() => setView('form')} />
      )}
      {view === 'form' && (
        <SiparisFormu onBack={() => setView('main')}
          onSuccess={() => setView('success')}
        />
      )}
      {view === 'success' && <Success />}
    </div>
  );
}

export default App
