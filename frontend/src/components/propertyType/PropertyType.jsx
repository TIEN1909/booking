import React from 'react'
import {Link} from 'react-router-dom'
import {datas} from '../data/data'
import useFetch from '../../hooks/useFetch'
import './propertyType.css'
const PropertyType = () => {
    const {data, loading, error} = useFetch("api/hotels/bytype");

  return (
    <div className='property__type'>
        <div className="property__type-container">
            <div className="city__title">
                <h2>Explore Serbia</h2>
                <span>These popular destinations a lot of offer</span>
            </div>
            <div className="city__images">
                   {
                    loading ? (<h2>Loading...</h2>) : (
                        <>
                         {
                            data && datas.map ((data1,i) =>(
                                <div className="city__image" key={data1.name}>
                                    <Link to="/" className='city__image-link'>
                                        <img src={data1.link} alt="" />
                                    </Link>
                                    <h2 className="city__name">
                                        {data[i]?.type}
                                    </h2>
                                    <span className="city__desc">
                                        {data[i]?.count} properties
                                    </span>
                                </div>  
                            ))
                        }
                        </>
                    )
                   }
            </div>
        </div>
    </div>
  )
}

export default PropertyType