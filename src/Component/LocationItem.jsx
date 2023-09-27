import {Fragment}from "react";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Mousewheel, Keyboard } from "swiper";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Pagination } from "swiper";
const LocationItem =()=>{
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
                  slidesPerView: 3.5,
                  spaceBetween: 10,
                },
              }}
            modules={[Navigation, Mousewheel, Keyboard]}
            className="mySwiper"
          >
            <SwiperSlide>
            <div className="owl-item  " style={{width:'380px'}}>
                                    <div className="item item-menu item-location">
                                        <div className="card-bg1 lazy">
                                            <img src="../image/location.jpg" className="img-location" alt=""/>
                                            <div className="card-bg-overlay"></div>
                                            <div className="card-bg-content">
                                                <div className="card-bg-top">
                                                    <h3 className="card-bg-title">
                                                        <a href="" className="card-bg-title-link">Croatia</a>
                                                    </h3>
                                                    <div className="card-bg-sub-title">
                                                        Croatia
                                                    </div>
                                                </div>
                                                <div className="card-bg-bottom">
                                                    84 Restaurant
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="owl-item  " style={{width:'380px'}}>
                                    <div className="item item-menu item-location">
                                        <div className="card-bg1 lazy">
                                            <img src="../image/location.jpg" className="img-location" alt=""/>
                                            <div className="card-bg-overlay"></div>
                                            <div className="card-bg-content">
                                                <div className="card-bg-top">
                                                    <h3 className="card-bg-title">
                                                        <a href="" className="card-bg-title-link">Croatia</a>
                                                    </h3>
                                                    <div className="card-bg-sub-title">
                                                        Croatia
                                                    </div>
                                                </div>
                                                <div className="card-bg-bottom">
                                                    84 Restaurant
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="owl-item  " style={{width:'380px'}}>
                                    <div className="item item-menu item-location">
                                        <div className="card-bg1 lazy">
                                            <img src="../image/location.jpg" className="img-location" alt=""/>
                                            <div className="card-bg-overlay"></div>
                                            <div className="card-bg-content">
                                                <div className="card-bg-top">
                                                    <h3 className="card-bg-title">
                                                        <a href="" className="card-bg-title-link">Croatia</a>
                                                    </h3>
                                                    <div className="card-bg-sub-title">
                                                        Croatia
                                                    </div>
                                                </div>
                                                <div className="card-bg-bottom">
                                                    84 Restaurant
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="owl-item  " style={{width:'380px'}}>
                                    <div className="item item-menu item-location">
                                        <div className="card-bg1 lazy">
                                            <img src="../image/location.jpg" className="img-location" alt=""/>
                                            <div className="card-bg-overlay"></div>
                                            <div className="card-bg-content">
                                                <div className="card-bg-top">
                                                    <h3 className="card-bg-title">
                                                        <a href="" className="card-bg-title-link">Croatia</a>
                                                    </h3>
                                                    <div className="card-bg-sub-title">
                                                        Croatia
                                                    </div>
                                                </div>
                                                <div className="card-bg-bottom">
                                                    84 Restaurant
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="owl-item  " style={{width:'380px'}}>
                                    <div className="item item-menu item-location">
                                        <div className="card-bg1 lazy">
                                            <img src="../image/location.jpg" className="img-location" alt=""/>
                                            <div className="card-bg-overlay"></div>
                                            <div className="card-bg-content">
                                                <div className="card-bg-top">
                                                    <h3 className="card-bg-title">
                                                        <a href="" className="card-bg-title-link">Croatia</a>
                                                    </h3>
                                                    <div className="card-bg-sub-title">
                                                        Croatia
                                                    </div>
                                                </div>
                                                <div className="card-bg-bottom">
                                                    84 Restaurant
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    
                                </div>
            </SwiperSlide>
          </Swiper>
        </>
      );



}
export default LocationItem;