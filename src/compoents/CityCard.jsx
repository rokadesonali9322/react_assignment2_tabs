import React, { useState } from 'react'
import Citydata from '../Citydata'
import './CityCard.css'
import CityList from './CityList'
import Tabs from './Tabs'
import { IoIosArrowDown } from 'react-icons/io'

function Carcard() {
  const cities = ['New York', 'Mumbai', 'Paris', 'London']
  const [activeCity, setActiveCity] = useState(0)
  const [displayedCard, setDisplayedCard] = useState(3)

  const filteredHotels = Citydata.filter(
    (ele) => ele.city === cities[activeCity],
  )

  const slicedata = filteredHotels.slice(0, displayedCard)

  const loadMoreHotels = () => {
    setDisplayedCard(displayedCard + 3)
  }
  return (
    <div className="container maincard">
      <div className="row">
        <Tabs
          cities={cities}
          activeCity={activeCity}
          setActiveCity={setActiveCity}
        />
      </div>
      <div className="row">
        {slicedata.map((ele, index) => {
          return <CityList ele={ele} key={index} />
        })}
      </div>
      <div className="row ">
        {displayedCard < filteredHotels.length && (
          <button className="btn  show_more_btn" onClick={loadMoreHotels}>
            Show More <IoIosArrowDown />
          </button>
        )}
      </div>
    </div>
  )
}

export default Carcard
