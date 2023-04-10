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

const ReviewItem =()=>{
  
    return (
        <>
          <Swiper
            slidesPerView={2.2}
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
                  slidesPerView: 2,
                  spaceBetween: 10,
                },
                // 1024: {
                //   slidesPerView: 3,
                //   spaceBetween: 10,
                // },
              }}
            modules={[Navigation, Mousewheel, Keyboard]}
            className="mySwiper"
          >
            <SwiperSlide>
            <div className="owl-item carousel">
                                        <div className="item">
                                           <div className="card-post">
                                            <a href="" className="image-wrapper image-cover card-post-height-991">
                                                <picture className="">
                                                    <img src="../image/post.jpg" alt=""/>
                                                </picture>
                                            </a>
                                            <div className="card-post-content-wrapper" >
                                                <div className="card-post-sub-content"  style={{height:'28px'}}>
                                                    <a href="" className="link link-secondary card-post-sub-link">
                                                        Michelin Star Revelation
                                                    </a>
                                                    <span className="no-wrap card-post-reading-time">
                                                        <i className="fa-regular fa-clock"></i>
                                                        3 minutes
                                                    </span>
                                                </div>
                                                <h3 className="card-post-title" >
                                                    <a href="" 
                                                    style={{overflow:'hidden',
                                                    textOverflow:'ellipsis',
                                                    }}>
                                                        4 New Stars In The MICHELIN Guide Shanghai 2023
                                                    </a>
                                                </h3>
                                                <div className="card-post-content"  style={{height:'80px'}}>
                                                    <p className="clam3"
                                                    style={{overflow:'hidden',
                                                    textOverflow:'ellipsis'}}>
                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas commodi consectetur porro magnam assumenda dicta mollitia, accusamus, dolorum velit quo possimus unde distinctio fuga harum. Quis tenetur ad consequatur aut.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="card-post-footer">
                                                <div className="card-post-tags">
                                                    <a href="" className="btn btn-outline-secondary btn-sm">Chine Cuisine</a>
                                                    <a href="" className="btn btn-outline-secondary btn-sm">MICHELIN stars Revelations</a>
                                                    <a href="" className="btn btn-outline-secondary btn-sm">Chine</a>
                                                </div>
                                            </div>
                                           </div>
                                        </div>
                                        
                                    </div>
          
            </SwiperSlide>
            <SwiperSlide>
            <div className="owl-item carousel">
                                        <div className="item">
                                           <div className="card-post">
                                            <a href="" className="image-wrapper image-cover card-post-height-991">
                                                <picture className="">
                                                    <img src="../image/post.jpg" alt=""/>
                                                </picture>
                                            </a>
                                            <div className="card-post-content-wrapper" >
                                                <div className="card-post-sub-content"  style={{height:'28px'}}>
                                                    <a href="" className="link link-secondary card-post-sub-link">
                                                        Michelin Star Revelation
                                                    </a>
                                                    <span className="no-wrap card-post-reading-time">
                                                        <i className="fa-regular fa-clock"></i>
                                                        3 minutes
                                                    </span>
                                                </div>
                                                <h3 className="card-post-title" >
                                                    <a href="" 
                                                    style={{overflow:'hidden',
                                                    textOverflow:'ellipsis',
                                                    }}>
                                                        4 New Stars In The MICHELIN Guide Shanghai 2023
                                                    </a>
                                                </h3>
                                                <div className="card-post-content"  style={{height:'80px'}}>
                                                    <p className="clam3"
                                                    style={{overflow:'hidden',
                                                    textOverflow:'ellipsis'}}>
                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas commodi consectetur porro magnam assumenda dicta mollitia, accusamus, dolorum velit quo possimus unde distinctio fuga harum. Quis tenetur ad consequatur aut.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="card-post-footer">
                                                <div className="card-post-tags">
                                                    <a href="" className="btn btn-outline-secondary btn-sm">Chine Cuisine</a>
                                                    <a href="" className="btn btn-outline-secondary btn-sm">MICHELIN stars Revelations</a>
                                                    <a href="" className="btn btn-outline-secondary btn-sm">Chine</a>
                                                </div>
                                            </div>
                                           </div>
                                        </div>
                                        
                                    </div>
          
            </SwiperSlide>
            <SwiperSlide>
            <div className="owl-item carousel">
                                        <div className="item">
                                           <div className="card-post">
                                            <a href="" className="image-wrapper image-cover card-post-height-991">
                                                <picture className="">
                                                    <img src="../image/post.jpg" alt=""/>
                                                </picture>
                                            </a>
                                            <div className="card-post-content-wrapper" >
                                                <div className="card-post-sub-content"  style={{height:'28px'}}>
                                                    <a href="" className="link link-secondary card-post-sub-link">
                                                        Michelin Star Revelation
                                                    </a>
                                                    <span className="no-wrap card-post-reading-time">
                                                        <i className="fa-regular fa-clock"></i>
                                                        3 minutes
                                                    </span>
                                                </div>
                                                <h3 className="card-post-title" >
                                                    <a href="" 
                                                    style={{overflow:'hidden',
                                                    textOverflow:'ellipsis',
                                                    }}>
                                                        4 New Stars In The MICHELIN Guide Shanghai 2023
                                                    </a>
                                                </h3>
                                                <div className="card-post-content"  style={{height:'80px'}}>
                                                    <p className="clam3"
                                                    style={{overflow:'hidden',
                                                    textOverflow:'ellipsis'}}>
                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas commodi consectetur porro magnam assumenda dicta mollitia, accusamus, dolorum velit quo possimus unde distinctio fuga harum. Quis tenetur ad consequatur aut.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="card-post-footer">
                                                <div className="card-post-tags">
                                                    <a href="" className="btn btn-outline-secondary btn-sm">Chine Cuisine</a>
                                                    <a href="" className="btn btn-outline-secondary btn-sm">MICHELIN stars Revelations</a>
                                                    <a href="" className="btn btn-outline-secondary btn-sm">Chine</a>
                                                </div>
                                            </div>
                                           </div>
                                        </div>
                                        
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="owl-item carousel">
                                        <div className="item">
                                           <div className="card-post">
                                            <a href="" className="image-wrapper image-cover card-post-height-991">
                                                <picture className="">
                                                    <img src="../image/post.jpg" alt=""/>
                                                </picture>
                                            </a>
                                            <div className="card-post-content-wrapper" >
                                                <div className="card-post-sub-content"  style={{height:'28px'}}>
                                                    <a href="" className="link link-secondary card-post-sub-link">
                                                        Michelin Star Revelation
                                                    </a>
                                                    <span className="no-wrap card-post-reading-time">
                                                        <i className="fa-regular fa-clock"></i>
                                                        3 minutes
                                                    </span>
                                                </div>
                                                <h3 className="card-post-title" >
                                                    <a href="" 
                                                    style={{overflow:'hidden',
                                                    textOverflow:'ellipsis',
                                                    }}>
                                                        4 New Stars In The MICHELIN Guide Shanghai 2023
                                                    </a>
                                                </h3>
                                                <div className="card-post-content"  style={{height:'80px'}}>
                                                    <p className="clam3"
                                                    style={{overflow:'hidden',
                                                    textOverflow:'ellipsis'}}>
                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas commodi consectetur porro magnam assumenda dicta mollitia, accusamus, dolorum velit quo possimus unde distinctio fuga harum. Quis tenetur ad consequatur aut.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="card-post-footer">
                                                <div className="card-post-tags">
                                                    <a href="" className="btn btn-outline-secondary btn-sm">Chine Cuisine</a>
                                                    <a href="" className="btn btn-outline-secondary btn-sm">MICHELIN stars Revelations</a>
                                                    <a href="" className="btn btn-outline-secondary btn-sm">Chine</a>
                                                </div>
                                            </div>
                                           </div>
                                        </div>
                                        
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="owl-item carousel">
                                        <div className="item">
                                           <div className="card-post">
                                            <a href="" className="image-wrapper image-cover card-post-height-991">
                                                <picture className="">
                                                    <img src="../image/post.jpg" alt=""/>
                                                </picture>
                                            </a>
                                            <div className="card-post-content-wrapper" >
                                                <div className="card-post-sub-content"  style={{height:'28px'}}>
                                                    <a href="" className="link link-secondary card-post-sub-link">
                                                        Michelin Star Revelation
                                                    </a>
                                                    <span className="no-wrap card-post-reading-time">
                                                        <i className="fa-regular fa-clock"></i>
                                                        3 minutes
                                                    </span>
                                                </div>
                                                <h3 className="card-post-title" >
                                                    <a href="" 
                                                    style={{overflow:'hidden',
                                                    textOverflow:'ellipsis',
                                                    }}>
                                                        4 New Stars In The MICHELIN Guide Shanghai 2023
                                                    </a>
                                                </h3>
                                                <div className="card-post-content"  style={{height:'80px'}}>
                                                    <p className="clam3"
                                                    style={{overflow:'hidden',
                                                    textOverflow:'ellipsis'}}>
                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas commodi consectetur porro magnam assumenda dicta mollitia, accusamus, dolorum velit quo possimus unde distinctio fuga harum. Quis tenetur ad consequatur aut.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="card-post-footer">
                                                <div className="card-post-tags">
                                                    <a href="" className="btn btn-outline-secondary btn-sm">Chine Cuisine</a>
                                                    <a href="" className="btn btn-outline-secondary btn-sm">MICHELIN stars Revelations</a>
                                                    <a href="" className="btn btn-outline-secondary btn-sm">Chine</a>
                                                </div>
                                            </div>
                                           </div>
                                        </div>
                                        
            </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className="owl-item carousel">
                                        <div className="item">
                                           <div className="card-post">
                                            <a href="" className="image-wrapper image-cover card-post-height-991">
                                                <picture className="">
                                                    <img src="../image/post.jpg" alt=""/>
                                                </picture>
                                            </a>
                                            <div className="card-post-content-wrapper" >
                                                <div className="card-post-sub-content"  style={{height:'28px'}}>
                                                    <a href="" className="link link-secondary card-post-sub-link">
                                                        Michelin Star Revelation
                                                    </a>
                                                    <span className="no-wrap card-post-reading-time">
                                                        <i className="fa-regular fa-clock"></i>
                                                        3 minutes
                                                    </span>
                                                </div>
                                                <h3 className="card-post-title" >
                                                    <a href="" 
                                                    style={{overflow:'hidden',
                                                    textOverflow:'ellipsis',
                                                    }}>
                                                        4 New Stars In The MICHELIN Guide Shanghai 2023
                                                    </a>
                                                </h3>
                                                <div className="card-post-content"  style={{height:'80px'}}>
                                                    <p className="clam3"
                                                    style={{overflow:'hidden',
                                                    textOverflow:'ellipsis'}}>
                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas commodi consectetur porro magnam assumenda dicta mollitia, accusamus, dolorum velit quo possimus unde distinctio fuga harum. Quis tenetur ad consequatur aut.
                                                    </p>
                                                </div>
                                            </div>
                                            <div className="card-post-footer">
                                                <div className="card-post-tags">
                                                    <a href="" className="btn btn-outline-secondary btn-sm">Chine Cuisine</a>
                                                    <a href="" className="btn btn-outline-secondary btn-sm">MICHELIN stars Revelations</a>
                                                    <a href="" className="btn btn-outline-secondary btn-sm">Chine</a>
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
export default ReviewItem;