import React, { useState, useEffect } from 'react';
import "../styles/MainContent.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCaretDown, faMagnifyingGlass, faSackDollar, faFeather, faArrowUpWideShort, faChevronLeft, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { cardData } from '../data/CardData';
import Card from '../components/Card';

const MainContent: React.FC  = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [itemsPerPage, setItemsPerPage] = useState(15);

    useEffect(() => {
        const updateItemsPerPage = () => {

            if (window.innerWidth < 600) {
                setItemsPerPage(3);
            } else if (window.innerWidth < 900) {
                setItemsPerPage(6);
            } else if (window.innerWidth < 1110) {
                setItemsPerPage(9);
            } 
            else if (window.innerWidth < 1350) {
                setItemsPerPage(12);
            }
            else{
                setItemsPerPage(15);
            }
        };

        updateItemsPerPage();
        window.addEventListener('resize', updateItemsPerPage);

        return () => window.removeEventListener('resize', updateItemsPerPage);
    }, []);

    const totalPages = Math.ceil(cardData.length / itemsPerPage);

    const indexOfLastCard = currentPage * itemsPerPage;
    const indexOfFirstCard = indexOfLastCard - itemsPerPage;
    const currentCards = cardData.slice(indexOfFirstCard, indexOfLastCard);

    const renderPageNumbers = () => {
        const pageNumbers = [];

        pageNumbers.push(
            <button 
                key={1}
                onClick={() => setCurrentPage(1)}
                className={currentPage === 1 ? 'active' : 'not-active'}
            >
                1
            </button>
        );

        if (currentPage > 3) {
            pageNumbers.push(<span key="start-ellipsis">...</span>);
        }

        const startPage = Math.max(2, currentPage - 1);
        const endPage = Math.min(totalPages - 1, currentPage + 1);
        
        for (let i = startPage; i <= endPage; i++) {
            pageNumbers.push(
                <button 
                    key={i}
                    onClick={() => setCurrentPage(i)}
                    className={currentPage === i ? 'active' : 'not-active'}
                >
                    {i}
                </button>
            );
        }

        if (currentPage < totalPages - 2) {
            pageNumbers.push(<span key="end-ellipsis">...</span>);
        }


        if (totalPages > 1) {
            pageNumbers.push(
                <button 
                    key={totalPages}
                    onClick={() => setCurrentPage(totalPages)}
                    className={currentPage === totalPages ? 'active' : 'not-active'}
                >
                    {totalPages}
                </button>
            );
        }

        return pageNumbers;
    };



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
                    <div className="item-filter-inside">
                        <FontAwesomeIcon className="dolar" icon={faSackDollar} />
                        <div className="custom-select">
                            <div style={{display:'grid', alignItems:'center'}}>
                                Price
                                <select style={{height:'25px'}}>
                                    <option value="All" selected>All</option>
                                    <option value="Weapons">$0 - $10</option>
                                    <option value="Armor">$10 - $20</option>
                                    <option value="Consumables">$20 - $50</option>
                                    <option value="Crafting Materials">$50 - $100            </option>
                                    <option value="Quest Items">100+</option>
                                    
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
                    Showing {Math.min(indexOfLastCard, cardData.length)} from {cardData.length}
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

                            {renderPageNumbers()}

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