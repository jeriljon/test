import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Banner from '../../components/banner/Banner'

function HomePage() {
    return (
        <div>
            <Header />
            <Banner />
            <div>This is Home page ... </div>
            <Footer />
        </div>
    );
}

export default HomePage;
