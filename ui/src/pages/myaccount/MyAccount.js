import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Banner from '../../components/banner/Banner'

function MyAccountPage () {
    const user = JSON.parse(sessionStorage.getItem('user')) || {};

    return (
        <div>
            <Header />
            <Banner />
            <div className="myaccount-container">
                <div className="myaccount-content">
                    <h3>Account Details</h3>
                    <p>Username: {user.username}</p>
                    <p>Email ID: {user.email}</p>
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default MyAccountPage;