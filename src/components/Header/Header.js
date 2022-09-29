import React from 'react';
import './Header.css'
import logo from '../../images/uec.png'

const Header = () => {
    return (
        <div className='header-container'>
            <img src={logo} alt="" />
            <h1>Ultra Exercise Club</h1>
        </div>
    );
};

export default Header;