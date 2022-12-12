import React from "react";
import { Gallery } from "react-grid-gallery";
import { IMAGES } from "../data/images";
import './gridImage.css'
const GridImage = () => {
  return (
    <div className='grid__image'>
        <Gallery images={IMAGES} 
          enableLightbox={true}
          backdropClosesModal
          
        />
    </div>      
  )
}
export default GridImage