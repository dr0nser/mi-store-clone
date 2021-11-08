import React from 'react';
import HotItemCard from './HotItemCard';
import "../styles/HotAccessories.css";

const HotAccessories = ({ menuItem, menuItemCover }) => {
    return (
        <div className="hotAccessories">
            <div className="hotAccessoriesInner">
                <div>
                    <img src={menuItemCover} alt="Cover" />
                </div>
                <div>
                    {
                        menuItem.map((item, index) => (
                            <HotItemCard key={item.image} name={item.name} price={item.price} image={item.image} index={index} />
                        ))
                    }
                    <HotItemCard image="https://i01.appmifile.com/webfile/globalimg/in/cms/593181BE-7DB8-15F5-E907-506427B8C9F4.jpg" />
                </div>
            </div>
        </div>
    )
}

export default HotAccessories
