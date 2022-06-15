
import React from 'react';
import FreeCodeCampLogo from '../assets/logo-code.jpg'
import '../stylesheets/Logo.css';

function Logo(){
    return(
        <div className="container-img">
            <img src={FreeCodeCampLogo} alt="" />
        </div>
        
    );
}


export default Logo;