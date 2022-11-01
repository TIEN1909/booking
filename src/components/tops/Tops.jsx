import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import {Link} from 'react-router-dom'
import {datas} from '../data/data'
import './tops.css'
const Tops = () => {
  return (
    <>
        <div className="tops">
            <Carousel autoPlay= {true} showIndicators={false} 
            infiniteLoop={true} interval={1500} showStatus={false}
            showArrows={false}
            >
                {
                  datas.map((data,index) =>(
                    <div className="tops__container" key={index}>
                      <Link to ='/' >
                        <img src={data.link} alt="" className="tops__image" />
                        <div className="tops__desc">
                            <h2>{data.name}</h2>
                            <span>{data.desc}</span>
                        </div>
                      </Link>
                  </div>
                  ))
                }
            </Carousel>
        </div>  
    </>
  )
}

export default Tops