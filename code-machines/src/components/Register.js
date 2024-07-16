import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import Header from './Header';
import './Register.css';
import girlImage from '../assets/girl.png'; // Adjust the path according to your file structure

const Register = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState('');
    const [success, setSuccess] = useState(false);

    useEffect(() => {
        if (success) {
            navigate('/login'); // Redirect to login if no token is found
        }
    }, [success, navigate]);

    const handleRegistration = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/register', {
                email,
                username,
                password
            });

            if (response.data.success) {
                // console.log(response.data);
                setSuccess(true);
                setMessage(response.data.message);
                navigate('/login'); // Redirect to the desired page on successful login
            
            } else {
                setMessage(response.data.message);
            }

        } catch (error) {
            console.log(error);
            setMessage('Hmm, you ran into an error! You are either trying to use an unavailable username or you have already registered before. Please log in if you have already registered before.');
        }
    };


    return (
        <div className="register-page">
            <Header />
            <div className="content">
                <div className="left-section">
                    <img src={girlImage} alt="Muslim girl learning computer science" className="girl-image" />
                    <div className="circle circle-1"></div>
                    <div className="circle circle-2"></div>
                    <div className="text-bubble text-bubble-1">Test</div>
                    <div className="text-bubble text-bubble-2">Courses</div>
                </div>
                <div className="right-section">
                    <form onSubmit={handleRegistration} className="register-form">
                        <div className="form-header">
                            <h2>Sign Up</h2>
                        </div>
                        <input 
                            type="email" 
                            placeholder="Email ID" 
                            value={email} 
                            onChange={(e) => setEmail(e.target.value)} 
                            required 
                        />
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
                        {message && <p style={{ color: 'red' }}>{message}</p>}

                        <button type="submit">Register</button>
                        <p>
                            Have an Account? <a href="/login">Log In</a>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;
