import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Banner from '../../components/banner/Banner'
import './Landing.css';

function LandingPage() {

    return (
        <div>
            <Header />
            <Banner />
            <div>Here is the Landing page content</div>
            <Footer />
        </div>
    );
}

export default LandingPage;
