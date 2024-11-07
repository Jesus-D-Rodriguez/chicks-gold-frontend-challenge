import "../styles/Navbar.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronDown, faCartShopping, faUser } from '@fortawesome/free-solid-svg-icons';

const Navbar: React.FC = () => {
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
        </div>
    </div>);
}

export default Navbar;