import React, { useState } from 'react';
import axios from 'axios';
import Header from './Header';
import './Login.css';
import girlImage from '../assets/girl.png'; // Adjust the path according to your file structure

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/login', {
                email,
                password
            });
            setMessage(response.data.msg);
        } catch (error) {
            setMessage(error.response.data.msg);
        }
    };

    return (
        <div className="login-page">
            <Header />
            <div className="content">
                <div className="left-section">
                    <img src={girlImage} alt="Muslim girl learning computer science" className="girl-image" />
                </div>
                <div className="right-section">
                    <form onSubmit={handleLogin} className="login-form">
                        <div className="form-header">
                            <h2>Log In</h2>
                        </div>
                        <input 
                            type="email" 
                            placeholder="Mail Id" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            required 
                        />
                        <input 
                            type="password" 
                            placeholder="Password" 
                            value={password} 
                            onChange={(e) => setPassword(e.target.value)} 
                            required 
                        />
                        <button type="submit">Log In</button>
                        <p>
                            Don't have an Account? <a href="/register">Sign Up</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
