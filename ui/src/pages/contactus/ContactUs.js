import React from 'react';
import Header from '../../components/header/Header';
import Footer from '../../components/footer/Footer';
import Banner from '../../components/banner/Banner'
import './ContactUs.css'; 

function ContactUsPage () {
    return (
        <div>
            <Header />
            <Banner />
            <div className="contactus-container">
                <div className="contactus-content">
                    <h3>Contact Us</h3>
                    <p>
                        Address: 1660 Soldiers Field Rd STE 7 #1043 Brighton, MA 02135
                    </p> 
                    <p>
                        Give us a call: +1(617)735-7160
                    </p> 
                </div>
            </div>
            <Footer />
        </div>
    );
}

export default ContactUsPage;
