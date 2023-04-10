import React ,{Fragment}from "react";
import HotelItem from "./HotelItem";


const HotelCarousel =(props)=>{
return(
    <Fragment>
        <section className="section-main section-guide mt-40">
            <div className="container">
                <div className="section-header have-slider-nav">
                    <h2 className="section-heading section-heading-title">
                        Inspiration: best-of guides
                    </h2>
                    <div className="btn-carousel hide-not-desktop hide-for-mobile">
                        <button type="button" className="btn btn-outline-secondary btn-sm btn-carousel-link">
                            <i className="fa-solid fa-chevron-left icon"></i>
                        </button>
                        <button type="button" className="btn btn-outline-secondary btn-sm btn-carousel-link">
                            <i className="fa-solid fa-chevron-right icon"></i>
                        </button>
                    </div>
                </div>
                <div className="section-main-content mt-40">
                    <div className="owl-carousel-guide owl-mobile-fitwidth owl-card-box">
                        <div className="owl-carousel owl-loaded">
                            <div className="owl-stage-outer">
                                <div className="owl-stage">
                                <HotelItem hotels={props.hotel}/>
                                   
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

    </Fragment>

);
}
export default HotelCarousel;