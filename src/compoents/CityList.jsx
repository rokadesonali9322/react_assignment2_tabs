import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import { MdOutlineAddLocation, MdBedroomParent } from 'react-icons/md'
import { IoIosBed } from 'react-icons/io'
import { LiaArrowsAltSolid } from 'react-icons/lia'
import { GiBathtub } from 'react-icons/gi'
import { Link } from 'react-router-dom'

function CityList({ ele }) {
  // console.log(ele)
  const { id, img, rent, rode, price, name } = ele
  return (
    // display all card data
    <div className="col-lg-4 col-md-6 col-sm-12 col-12">
      <Link to={`/property/${id}`} ele={ele}>
        <div className="card">
          <img src={img} alt={img} />
          <div className="img-btn">
            <button>{rent}</button>
            <div className="love">
              <AiOutlineHeart />
            </div>
          </div>
          <div className="card-body">
            <div className="title">
              <h6 className="card-title ">
                <span>
                  <MdOutlineAddLocation size={16} />
                  {rode}
                </span>
              </h6>
              <h6 className="card-title">{name}</h6>
              <div className="icon text-center">
                <div className="room_icon">
                  <span>
                    <MdBedroomParent />
                  </span>
                  <h6>3 Room</h6>
                </div>
                <div className="room_icon">
                  <span>
                    <IoIosBed />
                  </span>
                  <h6>4 Bed</h6>
                </div>
                <div className="room_icon">
                  <span>
                    <GiBathtub />
                  </span>
                  <h6>1 Bath</h6>
                </div>
                <div className="room_icon">
                  <span>
                    <LiaArrowsAltSolid />
                  </span>
                  <h6>732 sft</h6>
                </div>
              </div>
            </div>

            <hr />
            <div className="ratenow">
              <h6>
                ${price}
                <span>/month</span>
              </h6>
              <button className="btn">Rate Now</button>
            </div>
          </div>
        </div>
      </Link>
    </div>
  )
}

export default CityList
