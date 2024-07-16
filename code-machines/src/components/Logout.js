// Logout.js
import { useNavigate } from 'react-router-dom';

const HandleLogout = () => {
    const navigate = useNavigate();

    const logout = () => {
        // localStorage.removeItem('token');
        localStorage.clear();
        navigate('/login');
    };

    return logout;
};

export default HandleLogout;
