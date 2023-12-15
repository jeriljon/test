import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Banner from '../../components/banner/Banner'
import './Industries.css'; 

function IndustriesPage () {
    return (
        <div>
            <Header />
            <Banner />
            <div className="industries-container">
                <div className="industries-content">
                <h3>Industries</h3>
                Tangoseed is focussed on serving clients from various industries below.
                    <p>
                        <ul>
                            <li>Life Sciences & Healthcare</li>
                            <li>Technology, Media & Telecom</li>
                            <li>Financial Services</li>
                            <li>Energy & Industrials</li>
                            <li>Consumer Industry</li>
                        </ul>
                    </p> 
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default IndustriesPage;
