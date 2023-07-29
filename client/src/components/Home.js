import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/Home.css';

const Home = () => {
  return (
    <div className="container">
      <h2>Email Scheduler</h2>
      <p>Welcome to Email Scheduler! Sign up to get started.</p>
      <Link to="/signup">
        <button>Sign Up</button>
      </Link>
    </div>
  );
};

export default Home;
