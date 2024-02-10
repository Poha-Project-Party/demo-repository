import React, { useState} from 'react';
//import logo from './logo.svg';
import './App.css';
import LoginForm from './components/LoginForm';
import SignUp from './components/SignUp';

function App() {
  const [showLogin, setShowLogin] = useState(true);

  const handleLoginClick = () => {
    setShowLogin(true);
  };

  const handleSignUpClick = () => {
    setShowLogin(false);
  };

  return (
    <div className="App">
      <h1>Login Page</h1>
      <div className="buttons-container">
        <button onClick={handleLoginClick}>Login</button>
        <button onClick={handleSignUpClick}>Sign Up</button>
      </div>
      {showLogin ? <LoginForm /> : <SignUp />}
    </div>
  );
}

export default App;
