import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import Header from './Header';
import './Login.css';
import girlImage from '../assets/girl.png'; // Adjust the path according to your file structure

const Login = () => {
    const navigate = useNavigate();

    useEffect(() => {
        if (localStorage.length > 1) {
            // console.log(localStorage);
            navigate('/dashboard'); // Redirect to login if no token is found
        }
        // Optionally, you could verify the token with the server here
    }, [navigate]);



    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');


    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post('http://localhost:5000/api/login', {
                username,
                password
            });
            
            if (response.data.success) {
                // Store the JWT token
                localStorage.setItem('username', response.data.username);
                localStorage.setItem('email', response.data.email);
                localStorage.setItem('token', response.data.token);
                // console.log(response.data);
                // console.log(localStorage);
                navigate('/dashboard'); // Redirect to the desired page on successful login
            
            } else {
                setMessage(response.data.message);
            }
        
        } catch (error) {
            console.log(error);
            // setMessage(error.data.message ? error.data.message : 'An error occurred');
            setMessage('Incorrect username or password');

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
                            type="text" 
                            placeholder="Username" 
                            value={username} 
                            onChange={(e) => setUsername(e.target.value)} 
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
                        {message && <p style={{ color: 'red' }}>{message}</p>}

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
