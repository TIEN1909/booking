import React from 'react'
import Header from '../../components/header/Header';
import Subscribe from "../../components/subscribe/Subscribe"
import Footer from '../../components/footer/Footer'
import PhotoAlbum from "react-photo-album";
import {photos} from "../../components/data/photos"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapLocation } from '@fortawesome/free-solid-svg-icons';
import "./hotel.css"
const hotel = () => {
  return (
    <div className='hotel'>
      <Header type="hotels__small-heding" />
      <div className="hotel__container">
        <div className="hotel__heading">
            <div className="hotel__title">
              <h1> industrial 1853</h1>
              <span>
                <FontAwesomeIcon icon ={faMapLocation} /> 
                <span className="hotel__location">
                  K46/h16/16 Cao Thang, Thanh Binh, Hai Chau, Da Nang
                </span> 
              </span>
            </div>
            <button className='btn btn__booking-now'> BOOKING NOW</button>
        </div>
        <PhotoAlbum layout="rows" photos={photos} />
        <div className="hotel__desc">
          <h1>
             DESCRIPTION
          </h1>
          <span>
            Cette villa de 307 mètres carrés en front de mer dispose d’une chambre principale avec lit King offrant une vue époustouflante sur l’océan et une seconde chambre avec des lits jumeaux. Une chambre à coucher réservée à la gouvernante ou au majordome se trouve à proximité de la villa. La villa dispose d’une piscine privative, d’un espace cuisine avec table à manger et d’un vaste espace séjour.
          </span>
        </div>
      </div>
      <Subscribe/>
      <Footer/>
    </div>
  )
}

export default hotel