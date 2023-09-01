import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom' ;
import './Login.css';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showWarning, setShowWarning] = useState(false);
  const [showEmailWarning, setShowEmailWarning] = useState(false);
  const [showPasswordWarning, setShowPasswordWarning] = useState(false);

  const handleLogin = (event) => {
    event.preventDefault();

    if (email === '' || password === '') {
      setShowWarning(true);
      setShowEmailWarning(false);
      setShowPasswordWarning(false);

    } else if ((!email.endsWith('.com') && !email.endsWith('.in')) && email.includes('@')) {
      setShowEmailWarning(true);
      setShowWarning(false);
      setShowPasswordWarning(false);

    } else if (password.length < 6) {
      setShowPasswordWarning(password.length < 6);
      setShowWarning(false);
      setShowEmailWarning(false);
      
    } else {
      navigate('/upload');
    }
  };

  return (
    <div className='auth-wrapper'>
      <form className='form-login' onSubmit={handleLogin}>
        <h3>Welcome Back!</h3>

        <div className='mb-3'>
          <label>Username</label>
          <input
            type='email'
            className='form-control'
            placeholder='Enter email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        {showEmailWarning && (
          <p style={{ color: 'red' }}>Please enter a valid email address</p>
        )}

        <div className='mb-3'>
          <label>Password</label>
          <input
            type='password'
            className='form-control'
            placeholder='Enter password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <div className='mb-3'>
          <div className='custom-control custom-checkbox'>
            <input
              type='checkbox'
              className='custom-control-input'
              id='customCheck1'
            />
            <label className='custom-control-label' htmlFor='customCheck1'>
              Remember me
            </label>
          </div>
        </div>

        {showPasswordWarning && (
          <p style={{ color: 'red' }}>Password should contain at least 6 characters</p>
        )}

        {showWarning && (
          <p style={{ color: 'red' }}>Please fill in all the fields</p>
        )}

        <div className='d-grid'>
          <button type='submit' className='btn-primary'>
            Login
          </button>
        </div>
        <p className='forgot-password text-right'>
          Don't have an account? <a href='/sign-up'>Sign up</a>
        </p>
      </form>
    </div>
  );
}