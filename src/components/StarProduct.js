import React from 'react'
import "../styles/StarProduct.css"

const StarProduct = ({starProduct}) => {
    return (
        <div className="starProduct">
            <div className="left">
                <a href={starProduct[0].url}>
                    <img src={starProduct[0].image} alt="Redmi Power Banks" />
                </a>
            </div>
            <div className="right">
                <div className="upperRight">
                    <a href={starProduct[1].url}>
                        <img src={starProduct[1].image} alt="Redmi Earphones" />
                    </a>
                    <a href={starProduct[2].url}>
                        <img src={starProduct[2].image} alt="Mi Business Casual Backpack" />
                    </a>
                </div>
                <div className="lowerRight">
                    <a href={starProduct[3].url}>
                        <img src={starProduct[3].image} alt="Mi Smart Bands" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default StarProduct
