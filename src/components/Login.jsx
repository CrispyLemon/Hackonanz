import React, { useState } from 'react';
import './Login.css';

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = (event) => {
    event.preventDefault();
    if (isLogin) {
      console.log("Logging in...");
    } else {
      console.log("Signing up...");
    }
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
  };

  return (
    <div className="container">
      <div className="formContainer">
        <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
        <form onSubmit={handleSubmit}>
          <div className="inputGroup">
            <label>Email</label>
            <input type="email" placeholder="Enter your email" required />
          </div>
          <div className="inputGroup">
            <label>Password</label>
            <input type="password" placeholder="Enter your password" required />
          </div>

          {!isLogin && (
            <div className="inputGroup">
              <label>Confirm Password</label>
              <input type="password" placeholder="Confirm your password" required />
            </div>
          )}

          <button type="submit" className="submitButton">
            {isLogin ? 'Login' : 'Sign Up'}
          </button>
        </form>

        <p className="toggleText">
          {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
          <span onClick={toggleForm} className="toggleLink">
            {isLogin ? 'Sign Up' : 'Login'}
          </span>
        </p>
      </div>
    </div>
  );
}