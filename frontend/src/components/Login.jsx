import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';

export default function AuthPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError('');
    setMessage('');
    
    if (!isLogin && password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    try {
      if (isLogin) {
        // Login logic
        const response = await axios.post('http://localhost:5000/api/login', { email, password });
        localStorage.setItem('token', response.data.token);
        setMessage('Logged in successfully');
      } else {
        // Sign up logic
        await axios.post('http://localhost:5000/api/register', { email, password });
        setMessage('Registered successfully, please log in.');
        setIsLogin(true);
      }
    } catch (err) {
      setError(err.response?.data?.message || 'An error occurred');
    }
  };

  const toggleForm = () => {
    setIsLogin(!isLogin);
    setError('');
    setMessage('');
  };

  return (
    <div className="container">
      <div className="formContainer">
        <h2>{isLogin ? 'Login' : 'Sign Up'}</h2>
        {error && <p className="error">{error}</p>}
        {message && <p className="message">{message}</p>}
        <form onSubmit={handleSubmit}>
          <div className="inputGroup">
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div className="inputGroup">
            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>

          {!isLogin && (
            <div className="inputGroup">
              <label>Confirm Password</label>
              <input
                type="password"
                placeholder="Confirm your password"
                required
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
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
