import React from 'react'
import ProductReviewCard from './ProductReviewCard'
import "../styles/ProductReviews.css";

const ProductReviews = ({productReviews}) => {
    return (
        <div className="productReviews">
            <a href="#">
                {
                    productReviews.map(( item, index ) => (
                        <ProductReviewCard price={item.price} name={item.name} image={item.image} review={item.review} index={index} key={item.image} />
                    ))
                }
            </a>
        </div>
    )
}

export default ProductReviews
