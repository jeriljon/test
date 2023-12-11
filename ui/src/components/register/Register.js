import React, { useState } from 'react';
import './Register.css';
import { REGISTER_API_URL } from '../../config';

function Register({ onClose }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [registrationSuccess, setRegistrationSuccess] = useState(false);
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState(''); // State to hold the error message

    const handleRegister = async (e) => {
        e.preventDefault();
        setRegistrationSuccess(false);
        setError('');

        // Check if username and password are entered
        if (!username || !password) {
            setError('Please enter both username and password');
            return;
        }

        try {
            const response = await fetch(REGISTER_API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ userName: username, password: password }),
            });

            if (response.ok) {
                setRegistrationSuccess(true);
            } else {
                setError('Registration failed');
            }
        } catch (error) {
            console.error('Registration error:', error);
            setError('An error occurred during registration');
        }
    };

    return (
        <div className="register-modal">
            <div className="register-box">
                <span className="close-icon" onClick={onClose}>&times;</span>
                {error && <div className="error-message">{error}</div>}
                {registrationSuccess && <div className="success-message">Registration Successful</div>}
                <h2>Register</h2>
                <form onSubmit={handleRegister}>
                    <div className="username-field">
                        <input
                            type="text"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            placeholder="Username"
                        />
                    </div>
                    <div className="password-field">
                        <input
                            type={showPassword ? "text" : "password"}
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            placeholder="Password"
                        />
                        <span className="toggle-password" onClick={() => setShowPassword(!showPassword)}>
                            <i className="material-icons">
                                {showPassword ? 'visibility_off' : 'visibility'}
                            </i>
                        </span>
                    </div>
                    <div className="button-group">
                        <button type="submit">Register</button>
                        <button onClick={onClose}>Close</button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Register;
