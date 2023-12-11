import React, { useState } from 'react';
import Register from './../register/Register'; 
import { useNavigate } from 'react-router-dom';
import './LoginPage.css'; 
import { LOGIN_API_URL } from '../../config'; 

function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [showRegister, setShowRegister] = useState(false);
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setShowPassword(showPassword => !showPassword);
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');
    
        // Check if username and password are entered
        if (!username || !password) {
            setError('Please enter both username and password');
            return; // Stop the function if validation fails
        }
    
        try {
            const response = await fetch(LOGIN_API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ userName: username, password: password }),
            });
    
            if (response.ok) {
                navigate('/home');
            } else {
                setError('Login failed: Invalid username or password');
            }
        } catch (error) {
            console.error('Login error:', error);
            setError('An error occurred while logging in');
        }
    };
    

    return (
        <div className="login-container">
            <div className="login-box">
                <div className="login-header">Test App</div>
                {error && <div className="login-error">{error}</div>}
                <form onSubmit={handleLogin}>
                    <div className="input-group">
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            className="login-input"
                            placeholder="Username"
                        />
                        <div className="password-field">
                            <input
                                type={showPassword ? "text" : "password"}
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="login-input"
                                placeholder="Password"
                            />
                            <span className="toggle-password" onClick={togglePasswordVisibility}>
                                <i className="material-icons">
                                    {showPassword ? 'visibility_off' : 'visibility'}
                                </i>
                            </span>
                        </div>
                    </div>
                    <div className="button-group">
                        <button type="submit" className="login-button">Login</button>
                        <button type="button" onClick={() => setShowRegister(true)} className="login-button">Sign Up</button>
                    </div>
                </form>
                {showRegister && <Register onClose={() => setShowRegister(false)} />}
            </div>
        </div>
    );
}

export default LoginPage;
