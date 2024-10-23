import React, { useState, useEffect } from 'react';
import './PopUp.css';

const PopUp = ({ product, onClose }) => {
    if (!product) return null;

    return (
        <div className="popup-overlay">
            <div className="popup-content">
            <button className="close-btn" onClick={onClose}>X</button>
                <img src={product.image} alt={product.name} className="popup-image" />
                <h3 className="popup-name">{product.name}</h3>
                <p className="popup-description">{product.description}</p>
                <p className="popup-price">{product.price}</p>
                <button className="buy-btn">BUY</button>

            </div>
            
            
        </div>
    );
};

export default PopUp;
