import React, { useState } from 'react';
import './Navbar.scss';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="navbar">
            <div className="navbar__container">
                <div className={`navbar__hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
                <ul className={`navbar__menu ${isOpen ? 'active' : ''}`}>
                    <li className="navbar__item">
                        <a href="#dashboard" className="navbar__link">Dashboard</a>
                    </li>
                    <li className="navbar__item">
                        <a href="#order" className="navbar__link">Orders</a>
                    </li>
                    <li className="navbar__item">
                        <a href="#adres" className="navbar__link">Addresses</a>
                    </li>
                    <li className="navbar__item">
                        <a href="#wish" className="navbar__link">Wishlist</a>
                    </li>
                    <li className="navbar__item">
                        <a href="#ticket" className="navbar__link">Tickets</a>
                    </li>
                    <li className="navbar__item">
                        <a href="#Edit" className="navbar__link">Edit Profile</a>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;