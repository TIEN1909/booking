import React from 'react'
import { Link } from 'react-router-dom'
import './itemhotels.css'
const ItemHotels = ({item}) => {
  return (
    <div className='item__hotels'>
        <div className="item__hotels-container">
            <div className="item__hotels-wrapper">
                <div className="item__hotels-image">
                    <img src={item.photos[0]} alt={item.name} />
                </div>
                <div className="item__hotels-overview">
                    <h2>
                        {item.name}
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
                <h2>${item.price}</h2>
                <div className="item__hotels-free">
                    <span>Free Wifi</span>
                    <span>Free Parking</span>
                    <span>Free Breakfast</span>
                </div>
                <Link to={`/hotels/${item._id}`}>
                    <button className='btn btn__view-deal'>View deal</button>
                </Link>
            </div>
        </div>
    </div>
  )
}

export default ItemHotels