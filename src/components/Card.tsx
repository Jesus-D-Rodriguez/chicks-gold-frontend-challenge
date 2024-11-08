import React from 'react';
import "../styles/card.css"

interface CardProps {
    title: string;
    description: string;
    imageUrl: string;
    price: string;
    isOnSale: boolean;
    isInStock: boolean;
    oldPrice?: string | null;
    quantity: number;
}

const Card: React.FC<CardProps> = ({ title, description, imageUrl, price, isOnSale, isInStock, oldPrice, quantity }) => {
    return (
        <div className="card">
            <img src={imageUrl} alt={title} className="card-image" />
            <div className="card-content">
                {isOnSale && (<div>aaaa</div>) }
                <h2 className="card-title">{title}</h2>
                <p className="card-description">{description}</p>
                <p className="card-price">{price}</p>
                {oldPrice && (
                    <p className="card-old-price">{oldPrice}</p>
                )}
                <p className="card-price">{price}</p>
                <p className="card-stock">{isInStock ? "En stock" : "Agotado"}</p>
                <p className="card-quantity">Cantidad: {quantity}</p>
  
            </div>
        </div>
    );
}

export default Card;