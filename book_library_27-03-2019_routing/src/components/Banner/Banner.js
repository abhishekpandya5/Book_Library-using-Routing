import React from 'react';
import './Banner.css';
import { Link } from 'react-router-dom';

function Banner() {
    return(
        <div className="banner">
            <Link to="/login" className = "bannerText">Sign in to Continue...</Link>
        </div>
    );
}

export default Banner;