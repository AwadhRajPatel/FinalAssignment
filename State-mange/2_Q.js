import React, { useState } from 'react';

const RegistrationForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [nameError, setNameError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [formIsValid, setFormIsValid] = useState(false);

  const handleNameChange = (event) => {
    setName(event.target.value);
    if (event.target.value.length < 3) {
      setNameError('Name must be at least 3 characters long.');
    } else {
      setNameError('');
    }
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(event.target.value)) {
      setEmailError('Please enter a valid email address.');
    } else {
      setEmailError('');
    }
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
    if (event.target.value.length < 6) {
      setPasswordError('Password must be at least 6 characters long.');
    } else {
      setPasswordError('');
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (nameError || emailError || passwordError) {
      return;
    }
    // Submit form data here
    alert('Form submitted successfully!');
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;

    switch (name) {
      case 'name':
        handleNameChange(event);
        break;
      case 'email':
        handleEmailChange(event);
        break;
      case 'password':
        handlePasswordChange(event);
        break;
      default:
        break;
    }

    // Update form validity state
    setFormIsValid(
      !nameError && !emailError && !passwordError,
    );
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="name">Name:</label>
        <input
          type="text"
          id="name"
          name="name"
          value={name}
          onChange={handleInputChange}
        />
        {nameError && <span className="error">{nameError}</span>}
      </div>
      <div>
        <label htmlFor="email">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={handleInputChange}
        />
        {emailError && <span className="error">{emailError}</span>}
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          id="password"
          name="password"
          value={password}
          onChange={handleInputChange}
        />
        {passwordError && <span className="error">{passwordError}</span>}
      </div>
      <button type="submit" disabled={!formIsValid}>Submit</button>
    </form>
  );
};

export default RegistrationForm;