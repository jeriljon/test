import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Banner from '../../components/banner/Banner'
import './AboutUs.css'; 

function AboutUsPage () {
    return (
        <div>
            <Header />
            <Banner />
            <div className="about-us-container">
                <div className="about-us-content">
                    <h3>About us</h3>
                    Tangoseed consultancy services and consulting experts enable your business with modern software development methodologies born in the cloud—built by engineers from leading software companies like Google, Microsoft, and Meta.

                    Our integrated consulting, delivery, and operations technology service offering provides a complete solution to your business technology challenges.

                    The cutting-edge of industry and technology knowledge, plus a global expert workforce for IT services, only available from Tangoseed.
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default AboutUsPage;
