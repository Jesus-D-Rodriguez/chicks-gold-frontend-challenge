import "../styles/Navbar.css";

const Navbar: React.FC = () => {
    return (
    <div className="navbar">
        <div className="navbar-container">
            <div className="logo-container">
                <img className="logo" src="chicks-logo-large.svg" alt="Chicks Gold Inc Logo"></img>
            </div>
            <div className="navbar-options">
                <a className="options" href="">CURRENCY</a>
                <a className="options" href="">ITEMS</a>
                <a className="options" href="">ACCOUNTS</a>
                <a className="options" href="">SEVICES</a>
                <a className="options" href="">SWAP</a>
                <a className="options" href="">SELL</a>
            </div>
        </div>
    </div>);
}

export default Navbar;