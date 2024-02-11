import React, { useState } from 'react';
import LoginForm from './components/LoginForm';
import SignUp from './components/SignUp';
import StudentSignup from './components/StudentSignup';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS
import Navbar from './components/Navbar';

function App() {
  const [showLogin, setShowLogin] = useState(true);
  const [showSignUp, setShowSignUp] = useState(false);
  const [showStudentSignup, setShowStudentSignup] = useState(false);

  const handleLoginClick = () => {
    setShowLogin(true);
    setShowSignUp(false);
    setShowStudentSignup(false);
  };

  const handleSignUpClick = () => {
    setShowLogin(false);
    setShowSignUp(true);
    setShowStudentSignup(false);
  };

  const handleStudentSignupClick = () => {
    setShowLogin(false);
    setShowSignUp(false);
    setShowStudentSignup(true);
  };

  return (
    <div className="container mt-5">
      <h1 className="text-center">Login Page</h1>
      <div className="d-flex justify-content-center mt-3">
        <button className="btn btn-primary me-2" onClick={handleLoginClick}>Login</button>
        <button className="btn btn-success me-2" onClick={handleSignUpClick}>Sign Up</button>
        <button className="btn btn-info" onClick={handleStudentSignupClick}>Student Signup</button>
      </div>

      {showLogin && <LoginForm />}
      {showSignUp && <SignUp />}
      {showStudentSignup && <StudentSignup />}
    </div>
  );
}

export default App;
