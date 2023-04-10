import React,{Fragment} from "react";
import InspirationItem from "./InspirationItem";
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";


// import required modules
import { Pagination } from "swiper";

const Inspiration=()=>{

    return(
   
         <section className="section-main section-guide mt-40">
            <div className="container">
                <div class="section-header have-slider-nav">
                    <h2 className="section-heading section-heading-title">
                        Inspiration: best-of guides
                    </h2>
                    <div className="btn-carousel hide-not-desktop hide-for-mobile">
                        <div type="button" className="btn btn-outline-secondary btn-sm btn-carousel-link swiper-button-prev">
                            <i className="fa-solid fa-chevron-left icon"></i>
                        </div>
                        <div type="button" className="btn btn-outline-secondary btn-sm btn-carousel-link swiper-button-next">
                            <i className="fa-solid fa-chevron-right icon"></i>
                        </div>
                    </div>
                </div>
                <div className="section-main-content">
                    <div className="owl-carousel-guide owl-mobile-fitwidth owl-card-box">
                        <div className="owl-carousel owl-loaded">
                            <div className="owl-stage-outer">
                                <div className="owl-stage">
                                    <InspirationItem/>                        
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center btn-more-wrapper">
                    <a href="" className="btn btn-border btn-more">
                        Explore More Guide
                    </a>
                </div>
            </div>
        </section>
    
    );
    
    



};
export default Inspiration;