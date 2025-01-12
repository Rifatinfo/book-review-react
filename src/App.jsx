import { useState } from 'react';
import './App.css'
import Login from './Components/Login/Login'
import Home from './Components/Home';

function App() {
  
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = (email, password) => {
    if (email === 'rifat@gmail.com' && password === '1') {
      setIsLoggedIn(true);
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <>
    <div>
      {isLoggedIn ? <Home></Home> : <Login handleLogin={handleLogin} />}
    </div>
    </>
  )
}

export default App
