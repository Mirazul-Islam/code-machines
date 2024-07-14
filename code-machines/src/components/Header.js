import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header className="header">
            <div className="logo">
                <span className="code">Code</span> Machines
            </div>
            <nav className="nav-links">
                <Link to="/practice" className="nav-link">Practice</Link>
                <Link to="/explore" className="nav-link">Explore</Link>
                <Link to="/login" className="nav-link">Log In</Link>
                <Link to="/register" className="nav-link signup">Sign Up</Link>
            </nav>
        </header>
    );
};

export default Header;
