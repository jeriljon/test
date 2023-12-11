import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginPage from './components/login/LoginPage';
import HomePage from './components/home/HomePage';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/login" element={<LoginPage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/" element={<LoginPage />} />
            </Routes>
        </Router>
    );
}

export default App;