import React from 'react';
import "../styles/ProductReviewCard.css";

const ProductReviewCard = ({ image, index, price, name, review }) => {
    return (
        <div className="productReviewCard">
            <img src={image} alt={`${index} review`} />
            <h6>{review}</h6>
            <span>{name}</span>
            <b>{price}</b>
        </div>
    )
}

export default ProductReviewCard
