import React from 'react';
import { useNavigate } from 'react-router-dom';

function Banner() {

    const navigate = useNavigate();

    const goToServices = () => {
        navigate('/services'); // Update the path as per your routing setup
    };

    return (
        <div className="banner">
            <div className="banner-text">Unlock the Power of Technology</div>
            <button onClick={goToServices} className="link-button">Know more</button>
        </div>
    );
}

export default Banner;