import React, { useState } from 'react';

const Register = () => {
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [error, setError] = useState('');

  const isValidEmail = (email) => {
    // Basic email regex
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const isValidPassword = (password) => {
    // At least 8 characters, one letter, one number
    return /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(password);
  };

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!isValidEmail(formData.email)) {
      setError('Please enter a valid email address.');
      return;
    }

    if (!isValidPassword(formData.password)) {
      setError('Password must be at least 8 characters and contain both letters and numbers.');
      return;
    }

    // Save user
    localStorage.setItem('user', JSON.stringify(formData));
    setError('');
    alert("Registered successfully!");
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Register</h2>

      <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
      <input type="password" name="password" placeholder="Password" onChange={handleChange} required />

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <button type="submit">Register</button>
    </form>
  );
};

export default Register;
