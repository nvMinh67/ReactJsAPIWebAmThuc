import React,{Fragment,useEffect,useState} from "react";

import { useParams } from "react-router-dom";
import productApi from "../api/productApi";
import Iframe from 'react-iframe'
import Header from "./Header";
import Footer from "./Footer";
const DetailRestaurant =()=>{
    const {id} = useParams();
    const [restaurant, setrestaurant] = useState('');
    useEffect(() => {
      const fetchProductList = async () => {
        try {
          const response = await productApi.get(id);
          setrestaurant(response);
      
        } catch (error) {
          console.log('Failed to fetch product list: ', error);
        }
      }
      fetchProductList();
    }, []);
    function renderdata(){
        if(restaurant)
    return(
            <Fragment>
            <div className="mashead masthead-gallery">
              <div className="masthead-gallery-overlay"></div>
              <div className="masthead-gallery-wrapper">
                  <button type="button" className="masthead-gallery-open">
                      <span className="masthead-gallery-open-number">{restaurant.image.length}</span>
                      <span className="masthead-gallery-open-base"></span>
                  </button>
                  <div className="masthead-gallery-image">  
                  <div className="masthead-gallery-image-item lazy entered loaded adjusted" style={{backgroundImage:`url(https://localhost:7276/${restaurant.image[0]})`}}></div>
                   <div className="masthead-gallery-image-item lazy entered loaded adjusted"  style={{backgroundImage:`url(https://localhost:7276/${restaurant.image[1]})`}}></div>
                   <div className="masthead-gallery-image-item lazy entered loaded adjusted"  style={{backgroundImage:`url(https://localhost:7276/${restaurant.image[2]})`}}></div>
                  </div>
              </div>
          </div>
          <div className="restaurant-detail">
              <div className="container">
                  <div className="row" style={{flexWrap:'wrap'}}> 
                      <div className="col-xl-8 col-lg-7 restaurant-detail-component">
                          <section className="section restaurant-detail-main">
                              <div className="restaurant-detail-heading">
                                  <div className="restaurant-detail-heading-label">
                                      <span className="distinction-icon">
                                          <img src="/assets/image/bib-gourmand.svg" alt="" className="michelin-award"/>
                                      </span>
                                  </div>
                                  <h1 className="restaurant-detail-heading-title">
                                      {restaurant.name}
                                  </h1>
                                  <ul className="restaurant-detail-heading-list">
                                      <li className="restaurant-detail-heading-address">{restaurant.address},{restaurant.ward},{restaurant.district},{restaurant.city}</li>
                                      <li className="restaurant-detail-heading-price">{restaurant.about}</li>
                                  </ul>
                                  <div className="restaurant-detail-likeinfo">
                                      <img src="" alt="" className="love-this pl-image"/>
                                      <p className="restaurant-detail-likeinfo-description">
                                          Add to Favorite
                                      </p>
                                  </div>
                              </div>
                          </section>
                          <section className="section section-main section-text-component">
                              <div className="restaurant-detail-description-heading">
                                  <h2 className="restaurant-detail-description-heading-title">
                                      Menu
                                  </h2>
                              </div>
                              <div className="restaurant-detail-service">
                                  <ul className="row restaurant-detail-service-list" style={{marginLeft:'0rem'}} >
                                    {   restaurant.dish.map((dish) => {
                                        return(
                                            <li  style={{display:'list-item'}}>{dish}</li>
                                        )})}
                                  </ul>
                                  <div className="clearfix"></div>
                                  <div className="restaurant-detail-service-action">
                                  
                                  </div>
                              </div>
                          </section>
                          <section className="section section-main section-text-component">
                              <div className="restaurant-detail-description-heading">
                              <h2 className="restaurant-detail-description-heading-title">
                                      Phone
                                  </h2>
                              </div>
                              <div className="row">
                                  <div className="col-md-6 col-lg-12">
                                      <div className="colapse-block">
                                          <div className="colapse-block-item">
                                              <div className="colapse-block-title">
                                                  <div className="d-flex">
                                                      <span className="flex-fill">
                                                          {restaurant.phone}
                                                      </span>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="col-md-6 col-lg-12">
                                      <div className="google-wrapper">
                                      <Iframe url={restaurant.mapdata}
                                            position="absolute"
                                            width="720"
                                            id="myId"
                                            height="340"
                                            className="myClassname"
                                        />
                                      </div>
                                  </div>
                              </div>
                          </section>
                      </div>
                      <div className="col-xl-4 order-xl-8 col-lg-5 order-lg-7 restaurant-detail-aside">
                          <div className="restaurant-detail-booking-wrapper" style={{position:'sticky',top:'204px'}}>
                              <div className="restaurant-detail-booking-container">
                                  <div className="restaurant-detail-booking">
                                      <div className="restaurant-detail-booking-title-wrapper">
                                          <h3 className="restaurant-detail-booking-title">
                                              Reservations are not available for this restaurant on our site
                                          </h3>
                                          <a style={{marginTop:'22px'}} href="" className="btn btn-primary btn-clock">Find Bookable restaurant near me</a>
                                      </div>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
      </Fragment>
        )
    else
        return(
            <Fragment>
                <div className="loader-wrapper">
                <div class="loader"></div>
                </div>
               
            </Fragment>
        )
    }
    return(
        <Fragment>
            <Header/>
            {renderdata()}
            <Footer/>
        </Fragment>
    );
    

}
export default DetailRestaurant;