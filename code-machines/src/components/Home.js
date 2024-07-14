import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Create this file for styling

const Home = () => {
    return (
        <div className="home-container">
            <div className="overlay">
                <h1>Code Machines</h1>
                <div className="buttons">
                    <Link to="/register" className="btn">Register</Link>
                    <Link to="/login" className="btn">Login</Link>
                </div>
            </div>
        </div>
    );
};

export default Home;
