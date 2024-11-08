import React, { useState } from 'react';
import "../styles/card.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle, faCartShopping } from '@fortawesome/free-solid-svg-icons';


interface CardProps {
    title: string;
    description: string;
    imageUrl: string;
    logo: string;
    price: string;
    isOnSale: boolean;
    isInStock: boolean;
    oldPrice?: string | null;
    quantity: number;
}


const Card: React.FC<CardProps> = ({ title, description, imageUrl, logo, price, isOnSale, isInStock, oldPrice, quantity: initialQuantity}) => {
    
    const [quantity, setQuantity] = useState(initialQuantity);

    const handleQuantityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = Math.max(1, Number(event.target.value)); 
        setQuantity(value);
    };

    return (
        <div className="card">
            <div className="card-content">
                <div className="on-sale-div" >
                    <div style={{width:'40%'}}>
                        {isOnSale && (<p><FontAwesomeIcon className="dot" icon={faCircle} /> ON SALE</p>) }
                        {isInStock && (<div className='in-stock-div'> <p>In Stock</p> </div>)}
                    </div>
                    <div style={{width:'50%', height:'100%', display:'flex', justifyContent:'end'}}>
                        <input
                            
                            className='quantity-input'
                            id={`quantity-${title}`}
                            type="number"
                            value={quantity}
                            min={1}
                            onChange={handleQuantityChange}
                        />
                    </div>

                </div>
                <img src={imageUrl} alt={title} className="card-image" />
                <div className="card-title-container">
                    
                    <h4 className="card-title" style={{width:'80%'}}>{title}</h4> 
                    <img src={logo} alt={title} style={{width:'20px', height:'20px'}} className="card-image" />
                </div>
                <div className='prices-div'>
                    <p className="card-price">{price}</p>
                    {oldPrice && (
                        <p className="card-old-price">{oldPrice}</p>
                    )}
                </div>
                <p className="card-description">{description}</p>
                <div style={{display:'flex', height:'15%'}}>
                    <button className='details-button'>DETAILS</button>
                    <button className='add-button'>ADD <div style={{color:'#fafcff', width:'20px', height:'20px'}}><FontAwesomeIcon className="cart-icon" icon={faCartShopping} /> </div> </button>
                </div>
            </div>
        </div>
    );
}

export default Card;