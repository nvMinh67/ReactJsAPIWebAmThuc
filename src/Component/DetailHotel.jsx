import React,{Fragment,useEffect,useState} from "react";

import { useParams } from "react-router-dom";
import productApi from "../api/productApi";
import Iframe from 'react-iframe'
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";

const DetailHotel =()=>{
    const {id} = useParams();
    const [hotel,setHotel] = useState('');
    useEffect(()=>{
        const feachHotel = async ()=>{
            try{
                const response = await productApi.getHotel(id);
                setHotel(response);
                console.log(response);
            }
            catch (error){
                console.log('Failed to fetch Hotel');
            }
        }
        feachHotel();
    },[]);
    function renderdata(){
      if(!hotel)
        return (
            <h1>Loading...........</h1>)
        return(  <Fragment>
            <div className="mashead masthead-gallery">
              <div className="masthead-gallery-overlay"></div>
              <div className="masthead-gallery-wrapper">
                  <button type="button" className="masthead-gallery-open">
                      <span className="masthead-gallery-open-number">{hotel.image.length}</span>
                      <span className="masthead-gallery-open-base"></span>
                  </button>
                  <div className="masthead-gallery-image">  
                  <div className="masthead-gallery-image-item lazy entered loaded adjusted" style={{backgroundImage:`url(https://localhost:7276/${hotel.image[0]})`}}></div>
                   <div className="masthead-gallery-image-item lazy entered loaded adjusted"  style={{backgroundImage:`url(https://localhost:7276/${hotel.image[1]})`}}></div>
                   <div className="masthead-gallery-image-item lazy entered loaded adjusted"  style={{backgroundImage:`url(https://localhost:7276/${hotel.image[2]})`}}></div>
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
                                      {hotel.name}
                                  </h1>
                                  <ul className="restaurant-detail-heading-list">
                                      <li className="restaurant-detail-heading-address">{hotel.address}</li>
                                      <li className="restaurant-detail-heading-price">{hotel.roomdetails.length} Rooms</li>
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
                                  <ul className="row restaurant-detail-service-list">
                                 
                                  </ul>
                                  <div className="clearfix"></div>
                                  <div className="restaurant-detail-service-action">
                                  
                                  </div>
                              </div>
                          </section>
                          <section className="section section-main section-text-component">
                              <div className="restaurant-detail-description-heading">
                                  
                              </div>
                              <div className="row">
                                  <div className="col-md-6 col-lg-12">
                                      <div className="colapse-block">
                                          <div className="colapse-block-item">
                                              <div className="colapse-block-title">
                                                  <div className="d-flex">
                                                      <span className="flex-fill">
                                                          {hotel.Phone}
                                                      </span>
                                                  </div>
                                              </div>
                                          </div>
                                      </div>
                                  </div>
                                  <div className="col-md-6 col-lg-12">
                                      <div className="google-wrapper">
                                      <Iframe url={hotel.mapdata}
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
                                          <h4 className="restaurant-detail-booking-title">
                                              Booking A Room
                                          </h4>
                                          <div className="btn-booking-wrapper" style={{width:'100%'}}>
                                          <Link to={`http://localhost:3000/selectRoom/${id}`} style={{marginTop:'22px',width:'100%'}} href="" className="btn btn-primary btn-clock">View Rooms</Link>
                                          </div>
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
      }
    
    return (
        <Fragment>
            <Header/>
            {renderdata()}
            <Footer/>
        </Fragment>

    )
}
export default DetailHotel; 
