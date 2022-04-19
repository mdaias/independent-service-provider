import React from 'react';
import './Footer.css'

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='footer bg-dark text-white text-center mt-5'>
            <h3>Copyrights © belongs to <span>Mr.Turist Guide</span> {year}</h3>
        </footer>
    );
};

export default Footer;