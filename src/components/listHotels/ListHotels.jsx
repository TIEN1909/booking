import React from 'react'
import ItemHotels from '../itemhotels/ItemHotels'
import './listhotels.css'
const ListHotels = () => {
  return (
    <div className='list__hotels'>
        <ItemHotels/>
        <ItemHotels/>
        <ItemHotels/>
        <ItemHotels/>
    </div>
  )
}
export default ListHotels