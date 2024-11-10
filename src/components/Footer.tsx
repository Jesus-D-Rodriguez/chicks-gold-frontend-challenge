import "../styles/footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faDiscord, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer:React.FC = () => {
    return (<div className="footer">
        <div className="payment-methods-row">
            <div className="payment-methods">
                <img className="visa" src="/visa-logo.png"></img>
                <img className="master-card" src="/mastercard-logo.png"></img>
                <img className="american-express" src="/american-express-logo.png"></img>
                <img className="skrill" src="/skrill-logo.png"></img>
                <img className='crypto-round-logo' src="/bitcoin-cash-logo.png"></img>
                <img className='crypto-logo'  src="/ethereum-logo.png"></img>
                <img className='crypto-round-logo'  src="/bitcoin-logo.png"></img>
                <img className='crypto-round-logo'  src="/litecoin-logo.png"></img> 
                <p>and 50+ more</p>
            </div>
        </div>
        <div className="about-us-row">
            <div className="social-media-icons">
                <div className="icon-circle fb">
                    <FontAwesomeIcon className="facebook" icon={faFacebookF} />
                </div>
                <div className="icon-circle ig">
                    <FontAwesomeIcon className="instagram"  icon={faInstagram} />
                </div>

                <div className="icon-circle tw">
                    <FontAwesomeIcon className='twitter' icon={faTwitter} />
                </div>
                
                <div className="icon-circle dc">
                    <FontAwesomeIcon className='discord' icon={faDiscord} />
                </div>
                
            </div>
            <div className="about-us">
                <div className="about-chicks-gold">
                    <img className='chicks-gold-footer' src="/chicks-logo-large.svg"></img>
                    <div className="links">
                        <p>support@chicksgold.com</p> 
                    </div>
                </div>
                
                <div className="about-chicks-gold">
                    <h1>Chicks Gold</h1>
                    <div className="links">
                        <a href="">Games</a>
                        <a href="">About us</a>
                        <a href="">Blog</a>
                        <a href="">Sitemap</a>
                    </div>
                </div>
                <div className="about-chicks-gold">
                    <h1>Support</h1>

                    <div className="links">
                        <a href="">Contact us</a>
                        <a href="">FAQ</a>
                    </div>
                    
                </div>
                <div className="about-chicks-gold">
                    <h1>Legal</h1>
                    <div className="links">
                        <a href="">Privacy Policy</a>
                        <a href="">Terms of Service</a>
                        <a href="">Copyright Policy</a>
                    </div>
                </div>

                <div className="about-chicks-gold">
                    <div className="trust-review">
                        <div className="inside-trust-reviews">
                            <img style={{width:'20px', height:'20px', paddingRight: '2px'}} src="/trustpilot-star.png"></img> 
                            <img style={{width:'20px', height:'20px', paddingRight: '2px'}} src="/trustpilot-star.png"></img>  
                            <img style={{width:'20px', height:'20px', paddingRight: '2px'}} src="/trustpilot-star.png"></img> 
                            <img style={{width:'20px', height:'20px', paddingRight: '2px'}} src="/trustpilot-star.png"></img> 
                            <img style={{width:'20px', height:'20px', paddingRight: '2px'}} src="/trustpilot-star.png"></img>

                            <p>Trustpilot Reviews</p>
                        </div>
                    </div>
                </div>
    
            </div>
        </div>
        <div className="copyright">
            <p>© 2017 - 2020 Chicksgold.com. All rights reserved.</p>
        </div>
    </div>);
}

export default Footer;