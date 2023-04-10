import React,{Fragment} from "react";
import DishItem from "./DishItem";
import { Link } from "react-router-dom";

const Dish =({users})=>{
    return(
     <>
  
            <section className="section-main section-guide mt-40">
            <div className="container">
                <div className="section-header have-slider-inner have-slider-nav">
                    <h2 className="section-heading section-heading-title">
                        Discover the MICHELIN Guide restaurants Selection
                    </h2>
                    <div className="section-header-inner">
                        <div className="section-sub-heading">
                            Our recommendations near you
                        </div>
                        <div className="btn-caro    usel hide-not-desktop hide-for-mobile">
                            <button type="button" className="btn btn-outline-secondary btn-sm btn-carousel-link"><i className="fa-solid fa-chevron-left icon"></i></button>
                            <button type="button" className="btn btn-outline-secondary btn-sm btn-carousel-link">
                                <i className="fa-solid fa-chevron-right icon"></i>
                            </button>

                        </div>
                    </div>
                  
                </div>
                <div className="section-main-content">
                    <div className="owl-carousel-guide owl-card-box">
                        <div className="owl-carousel owl-loaded">
                            <div className="owl-stage-outer">
                                <div className="owl-stage">
                                <DishItem users={users}/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="text-center btn-more-wrapper">
                    <Link users={users} to="/searchrestaurant" className="btn btn-border btn-more">
                       Read More Stories
                    </Link>
                </div>
            </div> 
        </section>
     </>
            
      

     

    );

};
export default Dish;
