import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import './LoginRegisterModal.css';

const LoginRegisterModal = ({ closeModal, onUserLogin }) => {
    const [isLogin, setIsLogin] = useState(true);
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [formData, setFormData] = useState({
        email: "",
        userName: "",
        password: "",
    });
    const [errorMessage, setErrorMessage] = useState('');
    const [messageType, setMessageType] = useState('error'); // 'error' or 'success'
    
    const navigate = useNavigate(); // useNavigate hook

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
        setErrorMessage(''); // Reset error message on input change
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const url = isLogin ? 'http://localhost:8080/api/login/admin' : 'http://localhost:8080/api/login/register';
        console.log('handleSubmit, url', url)
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            console.log('response.ok', response.ok)
    
            if (response.ok) { // Check if response status is in the range 200-299
                console.log('Inside response.ok', response.ok)
                const data = response.json();
                console.log('Inside response.ok, data', data)
                console.log(data);
                if (isLogin) {
                    console.log('Inside response.ok, isLogin: ', isLogin)
                    console.log('Navigating to MyAccount page: ', isLogin)
                    onUserLogin({ username: formData.userName, email: formData.email });
                    sessionStorage.setItem('user', JSON.stringify({ username: formData.userName, email: formData.email })); // Store user in session storage
                    navigate('/myaccount');
                } else {
                    console.log('Inside response.ok, else, isLogin: ', isLogin)
                    setErrorMessage('Registration successful');
                    setMessageType('success');
                }
            } else {
                console.log('Inside response.ok, else block, isLogin: ', isLogin)
                const errorData = await response.json(); // Optionally handle error data from server
                console.log('Inside response.ok, else block, errorData: ', errorData)
                console.log('Error Data:', errorData);
                setErrorMessage(isLogin ? 'Login Failed' : 'Registration failed. Please try again.');
                setMessageType('error');
            }
        } catch (error) {
            console.error('Network or other error', error);
            setErrorMessage('An error occurred. Please try again.');
            setMessageType('error');
        }
    };
    

    return (
        <div className="modal">
            <div className="modal-content">
                <span className="close" onClick={closeModal}>&times;</span>
                <div className={`message ${messageType === 'error' ? 'error-message' : 'success-message'}`}>
                    {errorMessage}
                </div>

                {isLogin ? (
                    <form onSubmit={handleSubmit}>
                        <input 
                            name="userName" 
                            type="text" 
                            placeholder="Username" 
                            onChange={handleChange} 
                        />
                        <div className="password-container">
                            <input 
                                name="password" 
                                type={showPassword ? "text" : "password"}
                                placeholder="Password" 
                                onChange={handleChange} 
                            />
                            <span className="toggle-password" onClick={() => setShowPassword(!showPassword)}>
                                <i className="material-icons">
                                    {showPassword ? 'visibility_off' : 'visibility'}
                                </i>
                            </span>
                        </div>
                        <button type="submit">Login</button>
                    </form>
                ) : (
                    <form onSubmit={handleSubmit}>
                        <input name="email" type="email" placeholder="Email" onChange={handleChange} />
                        <input name="userName" type="text" placeholder="Username" onChange={handleChange} />
                        <div className="password-container">
                            <input 
                                name="password" 
                                type={showPassword ? "text" : "password"}
                                placeholder="Password" 
                                onChange={handleChange} 
                            />
                            <span className="toggle-password" onClick={() => setShowPassword(!showPassword)}>
                                <i className="material-icons">
                                    {showPassword ? 'visibility_off' : 'visibility'}
                                </i>
                            </span>
                        </div>
                        <button type="submit">Register</button>
                    </form>
                )}
                <button onClick={() => setIsLogin(!isLogin)}>
                    {isLogin ? "Register" : "Login"}
                </button>
            </div>
        </div>
    );
};

export default LoginRegisterModal;
