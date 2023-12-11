import React from 'react';
import './HomePage.css'; 
import { useNavigate } from 'react-router-dom';

function HomePage() {

    const navigate = useNavigate();

    const handleLogout = () => {
        navigate('/login');
    };

    return (
        <div className="home-container">
             <button onClick={handleLogout} className="logout-button">Logout</button>
            <div className="home-box">
                <h1>Welcome to Test App</h1>
            </div>
        </div>
    );
}

export default HomePage;