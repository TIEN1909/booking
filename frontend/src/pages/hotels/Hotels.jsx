import React, { useState } from 'react'
import Header from '../../components/header/Header'
// import Search from '../../components/search/Search'
// import ListHotels from '../../components/listHotels/ListHotels'
import Subscribe from '../../components/subscribe/Subscribe'
import Footer from '../../components/footer/Footer'
import { DateRange } from 'react-date-range'
import { useLocation } from 'react-router-dom'
import useFetch from '../../hooks/useFetch'
import {format} from 'date-fns'
// import { datas } from '../data/data'
import ItemHotels from '../../components/itemhotels/ItemHotels'
import '../../components/search/search.css'
import '../../components/listHotels/listhotels.css'
import './hotels.css'
const Hotels = () => {
  const location = useLocation();

  const [openDate, setOpenDate] = useState(false)
  const [date, setDate] = useState(location.state.date)
  const [destination, setDestination] = useState(location.state.destination)
  const [options, setOptions] = useState(location.state.options)
  const [min, setMin] = useState(undefined)
  const [max, setMax] = useState(undefined)

  const {data, loading, error, reFetch} = useFetch(`api/hotels?city=${destination}&min=${min || 0}&max=${max || 9999}`);

  const handleClick = () => {
    reFetch();
  }
  return (
    <div>
      <Header type="hotels__small-heding" />
      <div className="hotels__container">
          <div className='search'>
            <div className="search__container">
                <div className="search__item">
                    <label>Destination</label>
                    <input placeholder={destination} type='text' className='search__options-input'/>
                </div>
                <div className="search__item">
                    <label>Check-in Date</label>
                    <label onClick={()=> setOpenDate(!openDate)} className='search__options-input'>
                        {
                            `${format(date[0].startDate, "MM/dd/yyyy")} to ${format(date[0].endDate,"MM/dd/yyyy")}`
                        }
                    </label>
                        {
                            openDate && (
                                <DateRange onChange={(item) => setDate([item.selection])} minDate={new Date()} ranges={date} className='search__options-absolute'/>
                            )
                        }
                    
                </div>
                <div className="search__item">
                    <div className="search__options">
                        <div className="search__optons-item">
                            <label className="search__ontions-text">
                                Min price <small>per night</small>
                            </label>
                            <input type="number" className='search__options-input' />
                        </div>
                        <div className="search__optons-item">
                            <label className="search__ontions-text">
                                Max price <small>per night</small>
                            </label>
                            <input type="number" className='search__options-input' />
                        </div>
                        <div className="search__optons-item">
                            <label className="search__ontions-text">
                                Adult
                            </label>
                            <input type="number" className='search__options-input'min={1} placeholder={options.Adult} />
                        </div>
                        <div className="search__optons-item">
                            <label className="search__ontions-text">
                                Children
                            </label>
                            <input type="number" className='search__options-input'min={1} placeholder={options.Children} />
                        </div>
                        <div className="search__optons-item">
                            <label className="search__ontions-text">
                                Room
                            </label>
                            <input type="number" className='search__options-input'min={1} placeholder={options.Room} />
                        </div>
                    </div>
                </div>
                <div className="search__item">
                    <button className='btn__search btn' onClick={handleClick}>
                        Search
                    </button>
                </div>
            </div>
        </div>
          <div className='list__hotels'>
          {
            loading ? (<h2>Loading...</h2>) : (
              <>
                {
                  data.map((item =>
                    <ItemHotels item={item} key={item._id}/>
                  ))
                }
              </>
            )
          }
          </div>
      </div>
      <Subscribe />
      <Footer />
    </div>
  )
}

export default Hotels