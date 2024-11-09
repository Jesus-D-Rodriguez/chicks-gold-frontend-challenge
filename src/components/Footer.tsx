import "../styles/footer.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faDiscord, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer:React.FC = () => {
    return (<div className="footer">
        <div className="payment-methods-row">
            <div className="payment-methods">
                <img src="/visa-logo.png"></img>
                <img src="/mastercard-logo.png"></img>
                <img src="/american-express-logo.png"></img>
                <img src="/skrill-logo.png"></img>
                <img src="/bitcoin-logo.png"></img>
                <img src="/ethereum-logo.png"></img>
                <img src="/litecoin-logo.png"></img> 
                and 50+ more
            </div>
        </div>
        <div className="about-us-row">
            <div className="social-media-icons">
                <FontAwesomeIcon icon={faFacebook} />
                <FontAwesomeIcon icon={faInstagram} />
                <FontAwesomeIcon icon={faTwitter} />
                <FontAwesomeIcon icon={faDiscord} />
            </div>
            <div className="about-us">
                <div>
                    <img style={{width:'100px', height:'auto'}} src="/chicks-logo-large.svg"></img>
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
        <div className="copyright">
            <p>© 2017 - 2020 Chicksgold.com. All rights reserved.</p>
        </div>
    </div>);
}

export default Footer;