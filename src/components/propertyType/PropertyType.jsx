import React from 'react'
import {Link} from 'react-router-dom'
import {datas} from '../data/data'
import './propertyType.css'
const PropertyType = () => {
  return (
    <div className='property__type'>
        <div className="property__type-container">
            <div className="city__title">
                <h2>Explore Serbia</h2>
                <span>These popular destinations a lot of offer</span>
            </div>
            <div className="city__images">
                    {
                        datas.map ((data) =>(
                            <div className="city__image" key={data.name}>
                                <Link to="/" className='city__image-link'>
                                    <img src={data.link} alt="" />
                                </Link>
                                <h2 className="city__name">
                                    {data.name}
                                </h2>
                                <span className="city__desc">
                                    {data.desc}
                                </span>
                            </div>  
                        ))
                    }
            </div>
        </div>
    </div>
  )
}

export default PropertyType