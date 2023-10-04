import React from 'react'
import { AiOutlineHeart } from 'react-icons/ai'
import { MdOutlineAddLocation, MdBedroomParent } from 'react-icons/md'
import { IoIosBed } from 'react-icons/io'
import { LiaArrowsAltSolid } from 'react-icons/lia'
import { GiBathtub } from 'react-icons/gi'
import { useNavigate, useParams } from 'react-router-dom'
import Citydata from '../Citydata'

function CityProperty() {
  const navigate = useNavigate()
  const { id } = useParams()
  const Itemid = parseInt(id)
  const cardItem = Citydata.find((ele) => ele.id === Itemid)
  if (!cardItem) {
    return <div>Card is not Found</div>
  }
  const HandleBackbtn = () => {
    navigate('/')
  }
  return (
    <div className="container cardProp">
      <div className="card">
        <img src={cardItem.img} alt={cardItem.img} />
        <div className="img-btn">
          <button>{cardItem?.rent}</button>
          <div className="love">
            <AiOutlineHeart />
          </div>
        </div>
        <div className="card-body">
          <div className="title">
            <h6 className="card-title ">
              <span>
                <MdOutlineAddLocation size={16} />
                {cardItem?.rode}
              </span>
            </h6>
            <h6 className="card-title">{cardItem?.name}</h6>
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
                <h6>3 Room</h6>
              </div>
              <div className="room_icon">
                <span>
                  <GiBathtub />
                </span>
                <h6>3 Room</h6>
              </div>
              <div className="room_icon">
                <span>
                  <LiaArrowsAltSolid />
                </span>
                <h6>3 Room</h6>
              </div>
            </div>
          </div>

          <hr />
          <div className="ratenow">
            <h6>
              ${cardItem?.price}
              <span>/month</span>
            </h6>
            <button className="btn">Rate Now</button>
          </div>
        </div>
      </div>
      <button className="btn back " onClick={HandleBackbtn}>
        Back
      </button>
    </div>
  )
}

export default CityProperty
