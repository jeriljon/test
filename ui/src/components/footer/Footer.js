import React from 'react';
import './Footer.css';
import { useNavigate } from 'react-router-dom';

function Footer() {
    const navigate = useNavigate();
    return (
        <footer className="footer">
           <div className="company-title" onClick={() => navigate('/')}>
                TANGOSEED 
            </div>
            <div className="footer-text" onClick={() => navigate('/')}>
                © 2017-2023 Tangoseed LLC 
            </div>
        </footer>
    );
}

export default Footer;
