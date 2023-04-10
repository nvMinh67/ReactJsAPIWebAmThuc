import {Fragment}from "react";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel, Keyboard } from "swiper";
import { Link } from "react-router-dom";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";

const HotelItem =(props)=>{
 function renderHotel(){
  if (!props.hotels)
    return (
        <>
          <Swiper
            slidesPerView={1.5}
            navigation={true}
            pagination={true}
            spaceBetween={10}
            keyboard={true} 
            breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
              }}
            modules={[Navigation, Mousewheel, Keyboard]}
            className="mySwiper"
          >
            <SwiperSlide>
            <div className="owl-item" style={{width:'380px'}}>
                                        <div className="item item-menu">
                                            <div className="card-menu">
                                                <div className="card-menu-image w3-animate-zoom image-wrapper card-cuisine">
                                                    <img src="../image/hotel-carousel.jpg" alt=""  className="pl-imagelayzy"/>
                                                </div>
                                                <div className="card-menu-content">
                                                    <div className="card-menu-content-rating d-flex">
                                                        <span className="distinction-icon">
                                                            <img src="assets/image/bib-gourmand.svg" alt="" className="michelin-award"/>
                                                        </span>
                                                    </div>
                                                    <h3 className="card-menu-content-title">
                                                        <a href="">Pape Araya</a>
                                                    </h3>
                                                    <div className="card-menu-footer-location flex-fill">
                                                        VietNamese
                                                    </div>
                                                    <div className="card-menu-footer-price">
                                                        $$$
                                                    </div>
                                                </div>
                                                <div className="card-menu-footer d-flex">
                                                    <div className="card-menu-like">
                                                        <img src="/assets/image/love-off-58dca5751a8ad8f50468df25d762b097.svg" alt="" className="love-this pl-image"/>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
                                   
            </SwiperSlide>
 
        
          </Swiper>
        </> )
 return (
        props.hotels.map(hotel=>(
            <>
         <SwiperSlide>
          <div className="owl-item" style={{width:'380px'}}>
            <Link to = {`http://localhost:3000/Hotel/${hotel.id_Hotels}`} >
              <div className="item item-menu">
                  <div className="card-menu">
                      <div className="card-menu-image w3-animate-zoom image-wrapper card-cuisine">
                          <img src={`https://localhost:7276/${hotel.image[0]}`} alt=""  className="pl-imagelayzy"/>
                      </div>
                      <div className="card-menu-content">
                          <div className="card-menu-content-rating d-flex">
                              <span className="distinction-icon">
                                  <img src="assets/image/bib-gourmand.svg" alt="" className="michelin-award"/>
                              </span>
                          </div>
                          <h3 className="card-menu-content-title">
                              <a href="">{hotel.name}</a>
                          </h3>
                          <div className="card-menu-footer-location flex-fill">
                              {hotel.name}
                          </div>
                          <div className="card-menu-footer-price">
                              {hotel.price}
                          </div>
                      </div>
                      <div className="card-menu-footer d-flex">
                          <div className="card-menu-like">
                              <img src="/assets/image/love-off-58dca5751a8ad8f50468df25d762b097.svg" alt="" className="love-this pl-image"/>
                          </div>
                      </div>
                  </div>
              </div>
            </Link>                                
          </div>
        </SwiperSlide>
   
          

          </>
        ))
     )}

     return (
        <>
          <Swiper
            slidesPerView={1.5}
            navigation={true}
            pagination={true}
            spaceBetween={10}
            keyboard={true} 
            breakpoints={{
                640: {
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                768: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
                1024: {
                  slidesPerView: 3,
                  spaceBetween: 10,
                },
              }}
            modules={[Navigation, Mousewheel, Keyboard]}
            className="mySwiper"
          >


     {renderHotel()}
            
            
          </Swiper>
        </>
      );



}
export default HotelItem;