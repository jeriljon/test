import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Banner from '../../components/banner/Banner'

function MyAccountPage () {
    return (
        <div>
            <Header />
            <Banner />
            <div>This is my Account Page ...</div>
            <Footer />
        </div>
    );
}

export default MyAccountPage;