import React, { useState } from 'react';
import axios from 'axios';
import '../styles/SignUpForm.css';

const SignUpForm = () => {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      //Hardcoding the endpoint rn, for larger project use: "proxy": "http://localhost:5000" in the package.json file.
      //Then all api requests can be shortened, such as api/users.
      await axios.post('http://localhost:5000/api/users', formData);
      alert('User registered successfully!');
    } catch (error) {
      console.error('Error registering user:', error);
      alert('An error occurred during registration.');
    }
  };

  return (
    <div className="container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username:</label>
          <input
            id="username" // Add id attribute and match it with the label's for attribute
            name="username"
            required
            type="text"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="password">Password:</label>
          <input
            id="password" // Add id attribute and match it with the label's for attribute
            name="password"
            required
            type="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <div>
          <label htmlFor="email">Email Address:</label>
          <input
            id="email" // Add id attribute and match it with the label's for attribute
            name="email"
            required
            type="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
};

export default SignUpForm;
