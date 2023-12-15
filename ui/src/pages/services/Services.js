import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Banner from '../../components/banner/Banner'
import './Services.css'; 

function ServicesPage () {
    return (
        <div>
            <Header />
            <Banner />
            <div className="services-container">
                <div className="services-content">
                    <h3>Services</h3>
                    Tangoseed offers experienced and comprehensive help for a wide range of business needs, and 
					can help you to work smarter and reach your goals. 
					Have a look at the professional services Tangoseed offers, and let's talk.
                    <p>
                        <ul>
                            <li>Technology Consulting Services</li>
                            <li>Audit & Assurance</li>
                            <li>Sustainability & Climate Change</li>
                            <li>Workforce</li>
                            <li>Deals Advisory Services</li>
                        </ul>
                    </p> 
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ServicesPage;
