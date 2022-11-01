import React from 'react'
import './itemhotels.css'
const ItemHotels = () => {
  return (
    <div className='item__hotels'>
        <div className="item__hotels-container">
            <div className="item__hotels-wrapper">
                <div className="item__hotels-image">
                    <img src="https://cf.bstatic.com/xdata/images/hotel/max1024x768/203695763.jpg?k=b74b46c0991f72f3d02981bfb665f6f9bc533699c62dc669b38a7fb3ee4d0c3a&o=&hp=1" alt="" />
                </div>
                <div className="item__hotels-overview">
                    <h2>
                        Industrial 1853
                    </h2>
                    <div className="item__hotels-rate">
                        <span>9.6</span>
                        <div className="item__hotels-review">
                            <span>Wonderful</span>
                            <span>611 Reviews</span>
                        </div>
                    </div>
                </div>
            </div>
            <div className="item__hotels-overview">
                <h2>$98.00</h2>
                <div className="item__hotels-free">
                    <span>Free Wifi</span>
                    <span>Free Parking</span>
                    <span>Free Breakfast</span>
                </div>
                <button className='btn btn__view-deal'>view deal</button>
            </div>
        </div>
    </div>
  )
}

export default ItemHotels