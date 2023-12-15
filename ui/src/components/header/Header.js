import React, { useState, useEffect } from 'react';
import LoginRegisterModal from '../loginregister/LoginRegisterModal';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout'; 
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import './Header.css';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [user, setUser] = useState(null);
    const [anchorEl, setAnchorEl] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const loggedInUser = sessionStorage.getItem('user');
        if (loggedInUser) {
            setUser(JSON.parse(loggedInUser));
        }
    }, []);

    const handleProfileClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleProfileClose = () => {
        setAnchorEl(null);
    };

    const handleLogout = () => {
        sessionStorage.removeItem('user');
        setUser(null);
        handleProfileClose();
        navigate('/');
    };

    const handleMyProfile = () => {
        handleProfileClose();
        navigate('/myaccount');
    };

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
                <div className="profile-area">
                    {user ? (
                        <>
                            <div className="logged-in-message">
                                Logged in as {user.username}
                            </div>
                            <div className="profile-icon" onClick={handleProfileClick}>
                                <PersonIcon />
                            </div>
                            <Menu
                                anchorEl={anchorEl}
                                open={Boolean(anchorEl)}
                                onClose={handleProfileClose}
                            >
                                <MenuItem onClick={handleMyProfile}>My Profile</MenuItem>
                                <MenuItem onClick={handleLogout}>Log out</MenuItem>
                            </Menu>
                        </>
                    ) : (
                        <div className="profile-icon" onClick={() => setModalOpen(true)}>
                            <PersonIcon />
                        </div>
                    )}
                </div>
            </nav>
            {!user && isModalOpen && <LoginRegisterModal closeModal={() => setModalOpen(false)} onUserLogin={setUser} />}
        </header>
    );
};

export default Header;
