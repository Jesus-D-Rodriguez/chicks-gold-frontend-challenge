import "../styles/Navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faCartShopping, faUser, faTimes, faBars } from '@fortawesome/free-solid-svg-icons';
import React, { useState } from 'react';

const Navbar: React.FC = () => {
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };
    return (
    <div className="navbar">
        <div className="navbar-container">
    
            <div className="logo-container">
                <img className="logo" src="chicks-logo-large.svg" alt="Chicks Gold Inc Logo"></img>
            </div>
            <div className="navbar-options">
                <div className="nav-links">
                    <a className="options" href="">CURRENCY <FontAwesomeIcon className="chevron-down" icon={faChevronDown} /></a> 
                    <a className="options" href="">ITEMS <FontAwesomeIcon className="chevron-down" icon={faChevronDown} /></a>
                    <a className="options" href="">ACCOUNTS <FontAwesomeIcon className="chevron-down" icon={faChevronDown} /></a>
                    <a className="options" href="">SERVICES <FontAwesomeIcon className="chevron-down" icon={faChevronDown} /></a>
                    <a className="options" href="">SWAP <FontAwesomeIcon className="chevron-down" icon={faChevronDown} /></a>
                    <a className="options" href="">SELL <FontAwesomeIcon className="chevron-down" icon={faChevronDown} /></a>
                </div>
                <div className="user-options">
                    <a className="options" href="">USD <FontAwesomeIcon className="chevron-down" icon={faChevronDown} /></a>
                    <a className="options" href=""><FontAwesomeIcon className="cart-icon" icon={faCartShopping} /> CART (5)</a>
                    <button className="sign-in-button">SIGN IN <FontAwesomeIcon icon={faUser} /></button>
                </div>
            </div>
            <div className="mobile-actions">
                <div style={{display:'flex'}}>
                    <button className="mobile-menu-icon" style={{marginRight:'15px'}} onClick={toggleMobileMenu}>
                        <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} />

                    </button>
                    <div className="logo-container-mobile">
                        <img className="logo" src="chicks-logo-large.svg" alt="Chicks Gold Inc Logo"></img>
                    </div>
                </div>
                    
                    <button className="sign-in-button mobile-sign-in">SIGN IN <FontAwesomeIcon icon={faUser} /></button>
                </div>
        </div>

        {isMobileMenuOpen && (
                <div className="mobile-menu">
                    <button className="close-mobile-menu" onClick={toggleMobileMenu}>
                        <FontAwesomeIcon icon={faTimes} />
                    </button>
                    <div className="mobile-menu-content">
                        <a className="options" href="">CURRENCY</a> 
                        <a className="options" href="">ITEMS</a>
                        <a className="options" href="">ACCOUNTS</a>
                        <a className="options" href="">SERVICES</a>
                        <a className="options" href="">SWAP</a>
                        <a className="options" href="">SELL</a>
                        <a className="options" href="">USD</a>
                        <a className="options" href=""><FontAwesomeIcon className="cart-icon" icon={faCartShopping} /> CART (5)</a>
                    </div>
                </div>
            )}
    </div>);
}

export default Navbar;