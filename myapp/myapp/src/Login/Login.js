import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Login.css'; 
import BITlogo from '../images/bitlogo.png'; 

const Login = () => {
  const navigate = useNavigate();

  const handleGoogleSignIn = async () => {
    try {
      // Simulate Google sign-in success
      navigate('/dashboard'); // Redirect to Dashboard
    } catch (error) {
      console.error('Google sign-in error:', error);
    }
  };

  const goBack = () => {
    navigate('/'); // Navigate back to AccountType page
  };

  return (
    <div className="outer-container">
      <div className="login-container">
        <div className="logo">
          <img src={BITlogo} alt="BIT Logo" />
        </div>
        <div className="login-buttons">
          <button className="google-signin" onClick={handleGoogleSignIn}>
            GOOGLE SIGN IN
          </button>
          <button className="bit-account">BIT ACCOUNT</button>
        </div>
        <form className="login-form">
          <input type="email" placeholder="e-mail" required />
          <input type="password" placeholder="PASSWORD" required />
          <div className="login-options">
            <a href="/forgot">Forgot</a>
          </div>
          <button type="submit" className="login-button">LOGIN</button>
        </form>
        <p>No account? <a href="/signup">Sign up</a></p>
        <button className="back-button" onClick={goBack}>Back to Account Type</button>
      </div>
    </div>
  );
};

export default Login;
