import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './LoginPage.css'; 
import { API_URL } from '../../config'; 

function LoginPage() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate();

    const togglePasswordVisibility = () => {
        setShowPassword(showPassword => !showPassword);
    };

    const handleLogin = async (e) => {
        e.preventDefault();
        setError('');

        try {
            const response = await fetch(API_URL, {
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
                        <div className="password-input">
                            <input 
                                type={showPassword ? "text" : "password"}
                                value={password} 
                                onChange={(e) => setPassword(e.target.value)}
                                className="login-input"
                                placeholder="Password"
                            />
                            <span onClick={togglePasswordVisibility} className="password-toggle">
                                <i className="material-icons">
                                    {showPassword ? 'visibility_off' : 'visibility'}
                                </i>
                            </span>
                        </div>
                    </div>
                    <button type="submit" className="login-button">Login</button>
                </form>
            </div>
        </div>
    );
}

export default LoginPage;
