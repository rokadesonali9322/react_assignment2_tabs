import React from 'react'
import './Tabs.css'
import { HiOutlineArrowNarrowRight } from 'react-icons/hi'

function Tabs({ cities, activeCity, setActiveCity }) {
  return (
    <div className="container text-center">
      <h2>Featured Listed Property</h2>
      <p>
        Real estate can be bought, sold, leased,or rended,and cab be a valuable
        investment opportunity.The value of real estate can be...
      </p>
      <div className="tabs">
        <div className="tab-btn d-flex">
          {cities.map((city, index) => {
            return (
              <div
                key={index}
                className={`tab ${
                  activeCity === index ? ' btn active' : 'btn incative'
                }`}
                onClick={() => setActiveCity(index)}
              >
                {city}
              </div>
            )
          })}
        </div>
        <div className="view_All">
          <button className="btn">
            View All
            <HiOutlineArrowNarrowRight size={23} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default Tabs
