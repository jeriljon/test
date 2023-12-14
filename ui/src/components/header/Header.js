import React, { useState } from 'react';
import LoginRegisterModal from '../loginregister/LoginRegisterModal';
import PersonIcon from '@material-ui/icons/Person';
import './Header.css';
import { useNavigate } from 'react-router-dom';

const HeaderComponent = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const navigate = useNavigate();

    return (
        <header className="header">
            <div className="company-title" onClick={() => navigate('/')}>
                TANGOSEED
            </div>
            <nav className="navigation">
                <a href="/aboutus">ABOUT US</a>
                <a href="/industries">INDUSTRIES</a>
                <a href="/services">SERVICES</a>
                <a href="/contactus">CONTACT US</a>
                <div className="profile-icon" onClick={() => setModalOpen(true)}>
                    <PersonIcon />
                </div>
            </nav>
            {isModalOpen && <LoginRegisterModal closeModal={() => setModalOpen(false)} />}
        </header>
    );
};

export default HeaderComponent;
