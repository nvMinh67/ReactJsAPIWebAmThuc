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

const InspirationItem =()=>{
  
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
            <div className="owl-item carousel" >
                                        <div className="item">
                                            <div 
                                            style={{  
                                                backgroundImage: "url(" + "../image/inspiration.webp" + ")",
                                                position:'50% 50%',
                                               
                                              }} className="city-guide-card card-bg pl-image">
                                                <div className="card-bg-content">
                                                    <div className="card-bg-content-inner">
                                                        <a href="" className="btn btn-sm card-bg-tag">
                                                            <span className="card-bg-sub-title">
                                                                Paris   
                                                            </span>
                                                        </a>
                                                        <div className="card-bg-headline">
                                                            <h3 className="card-bg-title">
                                                                <a href="" className="card-bg-title-link">
                                                                   Where To Eat in Montmatre
                                                                </a>
                                                            </h3>
                                                        </div>
                                                    </div>
                                                    <div className="card-bg-overlad">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="owl-item carousel" >
                                        <div className="item">
                                            <div 
                                            style={{  
                                                backgroundImage: "url(" + "../image/inspiration.webp" + ")",
                                                position:'50% 50%',
                                               
                                              }} className="city-guide-card card-bg pl-image">
                                                <div className="card-bg-content">
                                                    <div className="card-bg-content-inner">
                                                        <a href="" className="btn btn-sm card-bg-tag">
                                                            <span className="card-bg-sub-title">
                                                                Paris   
                                                            </span>
                                                        </a>
                                                        <div className="card-bg-headline">
                                                            <h3 className="card-bg-title">
                                                                <a href="" className="card-bg-title-link">
                                                                   Where To Eat in Montmatre
                                                                </a>
                                                            </h3>
                                                        </div>
                                                    </div>
                                                    <div className="card-bg-overlad">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="owl-item carousel" >
                                        <div className="item">
                                            <div 
                                            style={{  
                                                backgroundImage: "url(" + "../image/inspiration.webp" + ")",
                                                position:'50% 50%',
                                               
                                              }} className="city-guide-card card-bg pl-image">
                                                <div className="card-bg-content">
                                                    <div className="card-bg-content-inner">
                                                        <a href="" className="btn btn-sm card-bg-tag">
                                                            <span className="card-bg-sub-title">
                                                                Paris   
                                                            </span>
                                                        </a>
                                                        <div className="card-bg-headline">
                                                            <h3 className="card-bg-title">
                                                                <a href="" className="card-bg-title-link">
                                                                   Where To Eat in Montmatre
                                                                </a>
                                                            </h3>
                                                        </div>
                                                    </div>
                                                    <div className="card-bg-overlad">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="owl-item carousel" >
                                        <div className="item">
                                            <div 
                                            style={{  
                                                backgroundImage: "url(" + "../image/inspiration.webp" + ")",
                                                position:'50% 50%',
                                               
                                              }} className="city-guide-card card-bg pl-image">
                                                <div className="card-bg-content">
                                                    <div className="card-bg-content-inner">
                                                        <a href="" className="btn btn-sm card-bg-tag">
                                                            <span className="card-bg-sub-title">
                                                                Paris   
                                                            </span>
                                                        </a>
                                                        <div className="card-bg-headline">
                                                            <h3 className="card-bg-title">
                                                                <a href="" className="card-bg-title-link">
                                                                   Where To Eat in Montmatre
                                                                </a>
                                                            </h3>
                                                        </div>
                                                    </div>
                                                    <div className="card-bg-overlad">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="owl-item carousel" >
                                        <div className="item">
                                            <div 
                                            style={{  
                                                backgroundImage: "url(" + "../image/inspiration.webp" + ")",
                                                position:'50% 50%',
                                               
                                              }} className="city-guide-card card-bg pl-image">
                                                <div className="card-bg-content">
                                                    <div className="card-bg-content-inner">
                                                        <a href="" className="btn btn-sm card-bg-tag">
                                                            <span className="card-bg-sub-title">
                                                                Paris   
                                                            </span>
                                                        </a>
                                                        <div className="card-bg-headline">
                                                            <h3 className="card-bg-title">
                                                                <a href="" className="card-bg-title-link">
                                                                   Where To Eat in Montmatre
                                                                </a>
                                                            </h3>
                                                        </div>
                                                    </div>
                                                    <div className="card-bg-overlad">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="owl-item carousel" >
                                        <div className="item">
                                            <div 
                                            style={{  
                                                backgroundImage: "url(" + "../image/inspiration.webp" + ")",
                                                position:'50% 50%',
                                               
                                              }} className="city-guide-card card-bg pl-image">
                                                <div className="card-bg-content">
                                                    <div className="card-bg-content-inner">
                                                        <a href="" className="btn btn-sm card-bg-tag">
                                                            <span className="card-bg-sub-title">
                                                                Paris   
                                                            </span>
                                                        </a>
                                                        <div className="card-bg-headline">
                                                            <h3 className="card-bg-title">
                                                                <a href="" className="card-bg-title-link">
                                                                   Where To Eat in Montmatre
                                                                </a>
                                                            </h3>
                                                        </div>
                                                    </div>
                                                    <div className="card-bg-overlad">
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        
                                    </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="owl-item carousel" >
                                        <div className="item">
                                            <div 
                                            style={{  
                                                backgroundImage: "url(" + "../image/inspiration.webp" + ")",
                                                position:'50% 50%',
                                               
                                              }} className="city-guide-card card-bg pl-image">
                                                <div className="card-bg-content">
                                                    <div className="card-bg-content-inner">
                                                        <a href="" className="btn btn-sm card-bg-tag">
                                                            <span className="card-bg-sub-title">
                                                                Paris   
                                                            </span>
                                                        </a>
                                                        <div className="card-bg-headline">
                                                            <h3 className="card-bg-title">
                                                                <a href="" className="card-bg-title-link">
                                                                   Where To Eat in Montmatre
                                                                </a>
                                                            </h3>
                                                        </div>
                                                    </div>
                                                    <div className="card-bg-overlad">
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
export default InspirationItem;