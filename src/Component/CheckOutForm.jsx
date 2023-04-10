import React from "react";
import { Fragment } from "react";
const CheckOutForm =(props)=>{
function renderdata(){
    if(!props.rooms) return null
    return (
        <Fragment>
            {console.log(props.date)}
        <div class="sidebar-form">
                <div class="search-available">
                {props.rooms.map((room)=>{
                    return(
                <div class="booking-form__block">
                    <h1 class="post-title">Check Out</h1>
                    <form action="" class="booking-form">
                    <div class="input-group">
                        <div class="booking-block">
                        <span class="booking_form"  style={{lineHeight:'normal'}}>
                            Days
                        </span>
                        <span class="booking-clock">{props.day}</span>
                        </div>
                        {/* <div class="booking-ticket">
                        <label class="booking_form">Tickets</label>
                        <div class="booking-guests-result">
                            <ul style={{paddingLeft:'-2rem;'}}>
                            <li>
                                <span class="booking-title">Adult</span>
                                <span class="booking-price">1 x 399.000đ</span>
                                <span class="booking-price">1.100.000đ</span>
                            </li>
                            <li>
                                <span class="booking-title">Youth</span>
                                <span class="booking-price">1 x 399.000đ</span>
                                <span class="booking-price">1.100.000đ</span>
                            </li>
                            <li>
                                <span class="booking-title">Children</span>
                                <span class="booking-price">1 x 399.000đ</span>
                                <span class="booking-price">1.100.000đ</span>
                            </li>
                            </ul>
                        </div>
                        </div> */}

                        <div class="services-block">
                        <label class="booking_form">Extra services</label>
                       
                      
                        <div class="list-services">
                            <i class="qtip tip-left"
                            data-tip="Lorem ipsum dolor sit amet, utinam munere antiopam vel ad. Qui eros iusto te. Nec ad feugiat honestatis. Quo illum detraxit an. Ius eius quodsi molestiae at, nostrum definitiones his cu. Discere referrentur mea id, an pri novum possim deterruisset. Eum oratio reprehendunt cu. Nec te quem assum postea.">
                            <label for="booking-extra">Room Price</label>
                            <span class="price-extra">{room.price*12}</span>
                            </i>
                            <i class="qtip tip-left"
                            data-tip="Lorem ipsum dolor sit amet, utinam munere antiopam vel ad. Qui eros iusto te. Nec ad feugiat honestatis. Quo illum detraxit an. Ius eius quodsi molestiae at, nostrum definitiones his cu. Discere referrentur mea id, an pri novum possim deterruisset. Eum oratio reprehendunt cu. Nec te quem assum postea.">

                            <label for="booking-extra">Taxes & Fees</label>
                            <span class="price-extra">{room.price*0.1}</span>
                            </i>
                        </div>                   
                        </div>
                        {/* <div class="coupon">
                        <label class="booking_form">Coupon</label>
                        <div class="coupon-block">
                            <input type="text" placeholder="Enter your coupon code"/>
                            <button type="button" class="coupon-btn">Apply</button>
                        </div>
                        </div> */}

                        <div class="detail-price">
                        <label class="booking_form">Detail Price</label>
                        <div class="detail-price__item">
                            <span class="detail-price__title">Total</span>
                            <span class="detail-price__price">{room.price*12+room.price*0.1*12}</span>
                        </div>
                        <div class="detail-price__item">
                            <span class="detail-price__title">Due Now</span>
                            <span class="detail-price__price">0</span>
                        </div>
                        <div class="detail-price__item">
                            <span class="detail-price__title">Due at Checkout</span>
                            <span class="detail-price__price">{room.price*12+room.price*0.1*12}</span>
                        </div>
                        </div>
                    </div>
                 
                    <div class="submit-group">
                        <button type="submit">Book Now <i class="fa-solid fa-arrow-right"></i></button>
                    </div>
                    </form>
                </div>

                    )
                })}
                </div>
            </div>
    </Fragment>
    )
}
return (
    renderdata()
)
}
export default CheckOutForm;