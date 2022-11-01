import React, { useState } from 'react'
import { DateRange } from 'react-date-range'
import { useLocation } from 'react-router-dom'
import {format} from 'date-fns'
import './search.css'
const Search = () => {
    const location = useLocation();
    const [openDate, setOpenDate] = useState(false)
    const [date, setDate] = useState(location.state.date)
    const [destination, setDestination] = useState(location.state.destination)
    const [options, setOptions] = useState(location.state.options)
  return (
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
                        `${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate,"dd/MM/yyyy")}`
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
                <button className='btn__search btn '>
                    Search
                </button>
            </div>
        </div>
    </div>
  )
}

export default Search