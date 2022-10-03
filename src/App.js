import React, { useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import PWAInstall from './components/PWAInstall';

function App() {
  // state
  const [offline, setOffline] = React.useState(false);

  const offlineListener = (online) => {
    setOffline(true)
  }

  const onlineListener = (online) => {
    setOffline(false)
  }

  // effects
  React.useEffect(() => {
    window.addEventListener("offline", offlineListener);
    window.addEventListener("online", onlineListener);
    return () => {
      window.removeEventListener("offline", offlineListener);
      window.removeEventListener("online", onlineListener);
    };
  }, []);


  const OnLineContent = () => (<p>Tente ficar offline e veja o que acontece</p>)
  const OfflineContent = () => (<p className='offline'>Você está offline</p>)


  return (
    <div className="App">
      <div>
        <img src={logo} className="App-logo" alt="logo" />
        {offline ? <OfflineContent /> : <OnLineContent />}
      </div>
      <PWAInstall />
    </div>
  );
}

export default App;
