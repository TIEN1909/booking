// import {datas} from '../data/data'
import {Link} from 'react-router-dom'
import './city.css'
import useFetch from '../../hooks/useFetch'

const City = () => {
    const {data,loading, error} = useFetch('api/hotels/bycity?cities=Da Nang, Ha Noi, Kon Tum,Quang Ngai, Cao Bang, Lang Son,Da Lat,Ho Chi Minh')
  return (
    <div className='city'>
        <div className="city__container">
            <div className="city__title">
                <h2>Explore Serbia</h2>
                <span>These popular destinations a lot of offer</span>
            </div>
            <div className="city__images">
                    {loading ?(<h2> Loading ...</h2>) :
                        (
                            
                            <>
                                <div className="city__image">
                                        <Link to="/" className='city__image-link'>
                                            <img src="./assets/images/avt.jpg" alt="" />
                                        </Link>
                                    <h2 className="city__name">
                                        
                                    </h2>
                                    <span className="city__desc">
                                        {data[0]} properties
                                    </span>
                                </div>  
                                <div className="city__image">
                                        <Link to="/" className='city__image-link'>
                                            <img src="https://img5.thuthuatphanmem.vn/uploads/2022/01/13/anh-da-nang-ve-dem-2k_024459274.jpg" alt="" />
                                        </Link>
                                    <h2 className="city__name">
                                        
                                    </h2>
                                    <span className="city__desc">
                                    {data[1]} properties
                                    </span>
                                </div>  
                                <div className="city__image">
                                        <Link to="/" className='city__image-link'>
                                            <img src="https://img5.thuthuatphanmem.vn/uploads/2022/01/13/anh-da-nang-ve-dem-2k_024459274.jpg" alt="" />
                                        </Link>
                                    <h2 className="city__name">
                                        
                                    </h2>
                                    <span className="city__desc">
                                    {data[1]} properties
                                    </span>
                                </div>  
                                <div className="city__image">
                                        <Link to="/" className='city__image-link'>
                                            <img src="https://img5.thuthuatphanmem.vn/uploads/2022/01/13/anh-da-nang-ve-dem-2k_024459274.jpg" alt="" />
                                        </Link>
                                    <h2 className="city__name">
                                        
                                    </h2>
                                    <span className="city__desc">
                                    {data[2]} properties
                                    </span>
                                </div>  
                                <div className="city__image">
                                        <Link to="/" className='city__image-link'>
                                            <img src="https://img5.thuthuatphanmem.vn/uploads/2022/01/13/anh-da-nang-ve-dem-2k_024459274.jpg" alt="" />
                                        </Link>
                                    <h2 className="city__name">
                                        
                                    </h2>
                                    <span className="city__desc">
                                    {data[3]} properties
                                    </span>
                                </div>  
                            </>
                                
                        )
                    }
            </div>
        </div>
    </div>
  )
}

export default City