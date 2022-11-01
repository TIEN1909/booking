import React from 'react'
import Header from '../../components/header/Header'
import Search from '../../components/search/Search'
import ListHotels from '../../components/listHotels/ListHotels'
import Subscribe from '../../components/subscribe/Subscribe'
import Footer from '../../components/footer/Footer'
import './hotels.css'
const Hotels = () => {
  return (
    <div>
      <Header type="hotels__small-heding" />
      <div className="hotels__container">
        <Search />
        <ListHotels/>
      </div>
      <Subscribe />
      <Footer />
    </div>
  )
}

export default Hotels