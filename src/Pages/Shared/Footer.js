import React from 'react';

const Footer = () => {
    const today = new Date();
    const year = today.getFullYear();
    return (
        <footer className='text-center bg-dark text-white mt-5 p-4'>
            <h4>Tutor Sohan</h4>
            <p><small>copyright @ {year} </small></p>
        </footer>
    );
};

export default Footer;