import "../styles/Navbar.css";

const Navbar: React.FC = () => {
    return (
    <div className="navbar">
        <div className="navbar-container">
            <div className="logo-container">
                <img className="logo" src="chicks-logo-large.svg" alt="Chicks Gold Inc Logo"></img>
            </div>
            <div className="navbar-options">
                <div className="nav-links">
                    <a className="options" href="">CURRENCY</a>
                    <a className="options" href="">ITEMS</a>
                    <a className="options" href="">ACCOUNTS</a>
                    <a className="options" href="">SERVICES</a>
                    <a className="options" href="">SWAP</a>
                    <a className="options" href="">SELL</a>
                </div>
                <div className="user-options">
                    <a className="options" href="">USD</a>
                    <a className="options" href="">CART(5)</a>
                    <button>SIGN IN</button>
                </div>
            </div>
        </div>
    </div>);
}

export default Navbar;