import "../styles/MainContent.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faMagnifyingGlass, faSackDollar, faFeather } from '@fortawesome/free-solid-svg-icons';

const MainContent: React.FC  = () => {
    return (<div className="main-content">
        <img src="/background.avif" alt="Background" className="background-image" />
        <div className="main-content-container" >
            <div className="main-title">
                <h1>Condimentum consectetur</h1>
            </div>
            
            <div className="main-content-filters">
                <div className="select-game-filter">
                    <div className="select-game-filter-first-part">
                        <img className="sword-img" src="/sword.png"></img>
                        Select a game  
                    </div>
                    <div className="select-game-filter-second-part">
                        <FontAwesomeIcon icon={faCaretDown} />
                    </div>
                </div>

                <div className="search-filter">
                    <div className="search-filter-inside">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                        <input type="text" placeholder="search" style={{backgroundColor:'transparent', border: 'none', marginLeft: '15px'}}/>
                    </div>
                </div>

                <div className="price-filter">
                    <div className="search-filter-inside">
                        <FontAwesomeIcon icon={faSackDollar} />
                        Price
                    </div>
                </div>

                <div className="item-filter">
                    <div className="search-filter-inside">
                        <FontAwesomeIcon icon={faFeather} />
                        Item type
                    </div>
                </div>
            </div>
        </div>
    </div>);
}

export default MainContent;