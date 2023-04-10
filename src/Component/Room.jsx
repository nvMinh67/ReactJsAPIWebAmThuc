import React  from "react";
import { Fragment } from "react";
import { Link } from "react-router-dom";

const Room =(props)=>{
  
function renderData (){
    if(!props) return (<h1>Loading</h1>)
    return(
        <Fragment>
        {props.hotels.map((room)=>{
                        return(
                        <div className="restaurant-booking1 mt-20">
                            <div className="restaurant-booking-wrapper">
                                <article className="restaurant-booking-infor">
                                    <h2 className="restaurant-booking-title">
                                        {room.name}
                                    </h2>
                                    <div className="room">
                                        <div className="room-hotelInfor">
                                            <div className="room-detail">
                                                <div className="room-detail-title">Amentities</div>
                                                {/* <div className="room-detail-info">Amentities</div> */}
                                                <ul style={{marginLeft:'-2rem'}} className="room-detail-amentity-info">
                                                    <li>Fit {room.capacity} peoples</li>
                                                    <li>{room.view}</li>
                                                    <li>{room.capacity} m².</li>
                                                </ul>
                                            </div>
                                            <div className="room-thumnail">
                                                <img src={`https://localhost:7276/${room.image[0]}`} alt="" className="room-image" />
                                            </div>
                                        </div>

                                    </div>
                                    <div className="room-rate">
                                        <div className="">
                                            <section className="rate">
                                                <div className="rate-price">{room.price} / day</div>
                                                <div className="rate-book-wrapper">
                                                    <Link date={props.date} to={`/HotelBooking/${room.id_Room1s}/${props.day}`}><button className="btn-book"> Book</button></Link>
                                                    
                                                </div>
                                            </section>
                                        </div>
                                    </div>
                                    {/* <div className="takeout">
                                        <h3 className="takeout-title">TakeOut</h3>
                                        <a href="tel:(437)20974-6367" className="takeout-phone">
                                            <span className="phone-number">
                                                <i className="fa-solid fa-phone"></i>
                                            </span>
                                            (437)20974-6367
                                        </a>
                                    </div> */}
                                </article>
                            </div>
                        </div>)})}
            
        </Fragment>
    )
}
return (
    renderData()
)
}
export default Room