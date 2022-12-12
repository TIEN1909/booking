import React from 'react'
import {Link} from 'react-router-dom'
import {useState} from 'react'
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import { faBed,faPlane,faCar,faCamera,faTaxi,faCalendar,faPerson } from "@fortawesome/free-solid-svg-icons";
import { DateRange } from 'react-date-range';
import {format} from 'date-fns'
import { useNavigate } from 'react-router-dom'
import 'react-date-range/dist/styles.css'; 
import 'react-date-range/dist/theme/default.css';
import './header.css'
const Header = ({type}) => {
    const [destination,setDestination] = useState("")
    const [openDate,setOpenDate] =useState (false)
    const  [openOptions, setOpenOptions] =useState (false)
    const [date,setDate] = useState (
            [
                {
                    startDate: new Date(),
                    endDate: new Date( ),
                    key: 'selection'
                  }
            ]
    )
    const [options, setOptions] =  useState ({
        Adult: 1,
        Children :0 ,
        Room:1
    })
    const handleOption = (name, operation)=>{
        console.log(options[name])
        setOptions((prev) => {
            return {
                ...prev,
                [name]: operation === "reduce" ? options[name] - 1 : options[name] + 1
            }
        })

    }
    const naviagate = useNavigate();
    const handleSearch = ()=>{
        naviagate("/hotels", {state: {destination, date, options}})
    }
  return (
    <div className='header'>
        <div className="header__container">
            <div className="header__top">
                <div className="header__logo">
                    <Link to='/'>VILLAREAL</Link>
                </div>
                <div className="header__auth">
                    <button className='btn header__auth-btn'>Register</button>
                    <button className='btn header__auth-btn'>Login</button>
                </div>
            </div>
            <div className="header__icons">
                <div className="header__icon active">
                    <FontAwesomeIcon icon={faBed} className="icon" />
                    <span>Stay</span>
                </div>
                <div className="header__icon">
                    <FontAwesomeIcon icon={faPlane} className="icon" />
                    <span>Flights</span>
                </div>
                <div className="header__icon">
                    <FontAwesomeIcon icon={faCar} className="icon" />
                    <span>Car Rentals</span>
                </div>
                <div className="header__icon">
                    <FontAwesomeIcon icon={faCamera} className="icon" />
                    <span>Attractions</span>
                </div>
                <div className="header__icon">
                    <FontAwesomeIcon icon={faTaxi} className="icon" />
                    <span>Airport Taxis</span>
                </div>
            </div>
            {   type !== "hotels__small-heding" &&
                <>
                    <h1 className="header__heading">
                Make Your Reservervation
                    </h1>
                    <div className="header__search">
                            <div className="header__search-item">
                                <FontAwesomeIcon icon ={faBed} />
                                <input className='header__search-input' type="text" onChange={(e) =>setDestination(e.target.value)} placeholder='Where are you going ?' />
                            </div>
                            <div className="header__search-item">
                                <FontAwesomeIcon icon ={faCalendar} />
                                <span onClick={() => setOpenDate(!openDate)}>{`${format(date[0].startDate, "dd/MM/yyyy")} to ${format(date[0].endDate,"dd/MM/yyyy")}`}</span>
                                {
                                    openDate && (
                                        <DateRange
                                        editableDateInputs={true}
                                        onChange={item => setDate([item.selection])}
                                        moveRangeOnFirstSelection={false}
                                        ranges={date}  className="header__search-date-range"
                                        minDate={new Date()}
                                    />
                                    )
                                }
                                
                            </div>
                            <div className="header__search-item">
                                <FontAwesomeIcon icon ={faPerson} />
                                <span onClick={() => setOpenOptions(!openOptions)}> {options.Adult} Adult -  {options.Children} children -  {options.Room} Room</span>
                                {
                                    openOptions && (
                                        <div className="header__search-options">
                                            <div className="header__search-option">
                                                <span>Adult</span>
                                                <div className="header__search-option-btns">
                                                    <button className='header__search-option-btn'
                                                        disabled={options.Adult <= 1}
                                                        onClick={()=> handleOption("Adult","reduce")}
                                                    >-</button>
                                                    <span>{options.Adult}</span>
                                                    <button className='header__search-option-btn'
                                                        onClick={()=>handleOption("Adult","increase")}
                                                    >+</button>
                                                </div>
                                            </div>
                                            <div className="header__search-option">
                                                <span>Children</span>
                                                <div className="header__search-option-btns">
                                                    <button className='header__search-option-btn'
                                                        disabled={options.Children <= 0}
                                                        onClick={()=> handleOption("Children","reduce")}
                                                    >-</button>
                                                    <span>{options.Children}</span> 
                                                    <button className='header__search-option-btn'
                                                        onClick={()=>handleOption("Children","increase")}
                                                    >+</button>
                                                </div>
                                            </div>
                                            <div className="header__search-option">
                                                <span>Room</span>
                                                <div className="header__search-option-btns">
                                                    <button className='header__search-option-btn'
                                                        disabled={options.Room <= 1}
                                                        onClick={()=> handleOption("Room","reduce")}
                                                    >-</button>
                                                    <span>{options.Room}</span>
                                                    <button className='header__search-option-btn'
                                                        onClick={()=>handleOption("Room","increase")}
                                                    >+</button>
                                                </div>
                                            </div>
                                        </div>
                                    )
                                }
                            </div>
                            <div className="header__search-item">
                                <button className='header__search-btn' onClick={handleSearch}>
                                    <span>Search</span>
                                </button>
                            </div>
                    </div>
                </>
            }
        </div>
    </div>
  )
}

export default Header