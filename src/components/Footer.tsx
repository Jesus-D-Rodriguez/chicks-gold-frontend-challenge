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
        </div>
    </div>);
}

export default Footer;