import React, { useState } from 'react';
import "../styles/MainContent.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faMagnifyingGlass, faSackDollar, faFeather, faArrowUpWideShort, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { cardData } from '../data/CardData';
import Card from '../components/Card';

const MainContent: React.FC  = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 15; 


    const indexOfLastCard = currentPage * itemsPerPage;
    const indexOfFirstCard = indexOfLastCard - itemsPerPage;
    const currentCards = cardData.slice(indexOfFirstCard, indexOfLastCard);
    
    const totalPages = Math.ceil(cardData.length / itemsPerPage);
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
                        <div className="custom-select">
                                <select style={{ height: '25px' }}>
                                    <option value="All" selected>Select a game</option>
                                    <option value="game1">Game 1</option>
                                    <option value="game2">Game 2</option>
                                    <option value="game3">Game 3</option>
                                    <option value="game4">Game 4</option>
                                    <option value="game5">Game 5</option>
                                </select>
                            </div>
                    </div>
                    <div className="select-game-filter-second-part">
                        <FontAwesomeIcon className="caret-down" icon={faCaretDown} />
                    </div>
                </div>

                <div className="search-filter">
                    <div className="search-filter-inside">
                        <FontAwesomeIcon icon={faMagnifyingGlass} />
                        <input type="text" className="search-filter-inside-input" placeholder="search"/>
                    </div>
                </div>

                <div className="price-filter">
                    <div className="price-filter-inside">
                        <FontAwesomeIcon className="dolar" icon={faSackDollar} />
                        <div className="custom-select">
                            <div style={{display:'grid', alignItems:'center'}}>
                                Price
                                <select style={{height:'25px'}}>
                                    <option value="All" selected>All</option>
                                    <option value="0-10">$0 - $10</option>
                                    <option value="10-20">$10 - $20</option>
                                    <option value="20-50">$20 - $50</option>
                                    <option value="50-100">$50 - $100</option>
                                    <option value="100+">$100+</option>
                                </select>
                            </div>
                            <FontAwesomeIcon className="caret-icon" icon={faCaretDown} />
                        </div>
                    </div>
                </div>

                <div className="item-filter">
                    <div className="item-filter-inside">
                        <FontAwesomeIcon className="feather" icon={faFeather} />
                        <div className="custom-select">
                            <div style={{display:'grid', alignItems:'center'}}>
                                Item type
                                <select style={{height:'25px'}}>
                                    <option value="All" selected>All</option>
                                    <option value="Weapons">Weapons</option>
                                    <option value="Armor">Armor</option>
                                    <option value="Consumables">Consumables</option>
                                    <option value="Crafting Materials">Crafting Materials</option>
                                    <option value="Quest Items">Quest Items</option>
                                    <option value="Accessories">Accessories</option>
                                    <option value="Magic Items">Magic Items</option>
                                    <option value="Tools">Tools</option>
                                    <option value="Treasure">Treasure</option>
                                    <option value="Miscellaneous">Miscellaneous</option>
                                </select>
                            </div>
                            <FontAwesomeIcon className="caret-icon" icon={faCaretDown} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="cards-container">
                <div className="inside-cards-container">
                    <div className="cards-container-filter">
                    Showing {indexOfFirstCard + 1} - {Math.min(indexOfLastCard, cardData.length)} from {cardData.length}
                        <div className="item-filter">
                            <div className="item-filter-inside">
                                <FontAwesomeIcon className="sort" icon={faArrowUpWideShort} />
                                <div className="custom-select">
                                    <div style={{display:'grid', alignItems:'center'}}>
                                        Item type
                                        <select style={{height:'25px'}}>
                                            <option value="All" selected>All</option>
                                            <option value="Weapons">Weapons</option>
                                            <option value="Armor">Armor</option>
                                            <option value="Consumables">Consumables</option>
                                            <option value="Crafting Materials">Crafting Materials</option>
                                            <option value="Quest Items">Quest Items</option>
                                            <option value="Accessories">Accessories</option>
                                            <option value="Magic Items">Magic Items</option>
                                            <option value="Tools">Tools</option>
                                            <option value="Treasure">Treasure</option>
                                            <option value="Miscellaneous">Miscellaneous</option>
                                        </select>
                                    </div>
                                    <FontAwesomeIcon className="caret-icon" icon={faCaretDown} />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="cards">
                        {currentCards.map(card => (
                            <Card 
                                key={card.id}
                                title={card.title}
                                description={card.description}
                                imageUrl={card.imageUrl}
                                logo = {card.logo}
                                price={card.price}
                                isOnSale={card.isOnSale}
                                isInStock={card.isInStock}
                                oldPrice={card.oldPrice}
                                quantity={card.quantity}
                            />
                        ))}
                    </div>
                    <div className='pagination-container'>
                        <div className="pagination">
                            <button 
                                className='back-button'
                                onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
                                disabled={currentPage === 1}
                            >
                                <FontAwesomeIcon icon={faChevronLeft} />
                            </button>
                            
                            <button 
                                onClick={() => setCurrentPage(1)} 
                                className={currentPage === 1 ? 'active' : 'not-active'}
                            >
                                1
                            </button>

                            {totalPages > 4 && currentPage > 3 && <span>...</span>}

                            {Array.from({ length: Math.min(4, totalPages - 2) }, (_, index) => {
                                const pageNumber = index + 2; // Comenzar desde la página 2
                                //if (pageNumber === currentPage) return null; // No mostrar el botón de la página actual
                                if (pageNumber > totalPages - 1) return null; // Evitar mostrar botones fuera de rango
                                return (
                                    <button 
                                        key={pageNumber} 
                                        onClick={() => setCurrentPage(pageNumber)} 
                                        className={currentPage === pageNumber ? 'active' : 'not-active'}
                                    >
                                        {pageNumber}
                                    </button>
                                );
                            })}

                            {totalPages > 4 && currentPage < totalPages - 2 && <span>...</span>}

                            {totalPages > 1 && (
                                <button 
                                    onClick={() => setCurrentPage(totalPages)} 
                                    className={currentPage === totalPages ? 'active' : 'not-active'}
                                >
                                    {totalPages}
                                </button>
                            )}

                            <button 
                                className='next-button'
                                onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
                                disabled={currentPage === totalPages}
                            >
                                <FontAwesomeIcon icon={faChevronRight} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>);
}

export default MainContent;