import {Fragment,useEffect}from "react";
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
const DishItem =({users})=>{
function renderelement(){
  if(users){
    return(
      users.map(user=>(
      
      
        <SwiperSlide key={user.maso}>
         
        <div className="owl-item" style={{width:'380px'}}>
        <Link to={`http://localhost:3000/Restaurant/${user.restaurantId}`}>
            <div className="item item-menu">
                                <div className="card-menu" >
                                    <div className="card-menu-image w3-animate-zoom image-wrapper card-cuisine">
                                        <img src={`https://localhost:7276/${user.image[0]}`}alt="" className="pl-imagelayzy"/>
                                    </div>
                                    <div className="card-menu-content">
                                        <div className="card-menu-content-rating d-flex">
                                            <span className="distinction-icon">
                                                <img src="" alt="" className="michelin-award"/>
                                            </span>
                                        </div>
                                        <h3 className="card-menu-content-title" style={{fontSize:'1.2rem',fontWeight:'600'}} >
                                          {user.name}
                                        </h3>
                                        <div className="card-menu-footer-location flex-fill" style={{fontSize:'1.2rem',color:'#000'}}>
                                             {user.price}
                                        </div>
                                        <div className="card-menu-footer-location flex-fill" style={{fontSize:'1rem',color:'#000',fontWeight:'550'}}>
                                         
                                            {/* {(() => {
                                                    switch (user.menu[0].status) {
                                                    case "yes":   return (<Fragment style={{textAlign:'center',fontSize:'1.4rem'}}>Còn Hàng</Fragment>);
                                                    case "no": return  (<Fragment>Hết Hàng</Fragment>);
                                                    
                                                    default:      return "#FFFFFF";
                                                    }
                                            })()} */}
                                           
                                        </div>
                                    </div>
                                    <div className="card-menu-footer d-flex">
                                        <div className="card-menu-like">
                                            <img src="" alt="" className="love-this pl-image"/>
                                        </div>
                                    </div>
                                </div>
                            </div>
            </Link>
                           
                            
         </div>
      </SwiperSlide>
      
      ))
      
    )
  }
  else{
   return(
    <SwiperSlide>
    <div className="owl-item" style={{width:'380px'}}>
                        <div className="item item-menu">
                            <div className="card-menu" >
                                <div className="card-menu-image w3-animate-zoom image-wrapper card-cuisine">
                                    <img  alt="" className="pl-imagelayzy"/>
                                </div>
                                <div className="card-menu-content">
                                    <div className="card-menu-content-rating d-flex">
                                        <span className="distinction-icon">
                                            <img src="" alt="" className="michelin-award"/>
                                        </span>
                                    </div>
                                    <h3 className="card-menu-content-title">
                                       
                                    </h3>
                                    <div className="card-menu-footer-location flex-fill">
                                        
                                    </div>
                                    <div className="card-menu-footer-price">
                                        $$$
                                    </div>
                                </div>
                                <div className="card-menu-footer d-flex">
                                    <div className="card-menu-like">
                                        <img src="" alt="" className="love-this pl-image"/>
                                    </div>
                                </div>
                            </div>
                        </div>  
              
     </div>
  </SwiperSlide>
   );
     
  }
}
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
     {renderelement()}
            
            
          </Swiper>
        </>
      );
        
            
}
export default DishItem;