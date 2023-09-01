import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function SignUp() {
  const navigate = useNavigate();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showWarning, setShowWarning] = useState(false);
  const [showNameWarning, setShowNameWarning] = useState(false);
  const [showEmailWarning, setShowEmailWarning] = useState(false);
  const [showPasswordWarning, setShowPasswordWarning] = useState(false);
  const nameRegex = /^[a-zA-Z]+$/; // Regular expression for alphabets

  const handleSignUp = (event) => {
    event.preventDefault();

    if (firstName === '' || lastName === '' || email === '' || password === '') {
      setShowWarning(true);
      setShowNameWarning(false);
      setShowEmailWarning(false);
      setShowPasswordWarning(false);

    } else if (!firstName.match(nameRegex) || !lastName.match(nameRegex)) {
      setShowNameWarning(true);
      setShowWarning(false);
      setShowEmailWarning(false);
      setShowPasswordWarning(false);

    } else if ((!email.endsWith('.com') && !email.endsWith('.in')) && email.includes('@')) {
      setShowEmailWarning(true);
      setShowWarning(false);
      setShowNameWarning(false);
      setShowPasswordWarning(false);

    } else if (password.length < 6) {
      setShowPasswordWarning(password.length < 6);
      setShowWarning(false);
      setShowNameWarning(false);
      setShowEmailWarning(false);

    } else {
      navigate('/upload');
    }
  };

  return (
    <div className='auth-wrapper'>
      <form className='form-login' onSubmit={handleSignUp}>
        <h3>Welcome to our page!</h3>

        <div className='mb-3'>
          <label>First name</label>
          <input
            type='text'
            className='form-control'
            placeholder='First name'
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>

        <div className='mb-3'>
          <label>Last name</label>
          <input
            type='text'
            className='form-control'
            placeholder='Last name'
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>

        {showNameWarning && (
          <p style={{ color: 'red' }}>Name should contain only alphabets</p>
        )}

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

        {showPasswordWarning && (
          <p style={{ color: 'red' }}>Password must contain at least 6 characters</p>
        )}

        {showWarning && (
          <p style={{ color: 'red' }}>Please fill in all the fields</p>
        )}

        <div className='d-grid'>
          <button type='submit' className='btn-primary'>
            Sign Up
          </button>
        </div>
        <p className='forgot-password text-right'>
          Already registered? <a href='/sign-in'>Login</a>
        </p>
      </form>
    </div>
  );
}