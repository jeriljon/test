import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LandingPage from './pages/landing/Landing'
import HomePage from './pages/home/Home';
import AboutUsPage from './pages/aboutus/AboutUs'
import IndustriesPage from './pages/industries/Industries'
import ServicesPage from './pages/services/Services'
import MyAccountPage from './pages/myaccount/MyAccount'
import ContactUsPage from './pages/contactus/ContactUs'


function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<LandingPage />} />
                <Route path="/home" element={<HomePage />} />
                <Route path="/aboutus" element={<AboutUsPage />} />
                <Route path="/industries" element={<IndustriesPage />} />
                <Route path="/services" element={<ServicesPage />} />
                <Route path="/myaccount" element={<MyAccountPage />} />
                <Route path="/contactus" element={<ContactUsPage />} />
            </Routes>
        </Router>
    );
}

export default App;
