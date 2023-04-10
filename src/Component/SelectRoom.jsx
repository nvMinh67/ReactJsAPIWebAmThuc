import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Iframe from "react-iframe";
import Header from "./Header";
import Footer from "./Footer";
import { Fragment } from "react";
import { FaPhone } from "react-icons/fa";
import productApi from "../api/productApi";
import { NavLink } from "react-router-dom";
import Room from "./Room";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';
const SelectRoom = () =>{
    const [date,setdate] =useState([]);
    const [dateCheckIn,setDateCheckIn] = useState();
    const {id} = useParams();
    const [start,setstart] = useState('');
    const [hotel,setHotel] = useState('');
    useEffect(()=>{
        const fetchHotel = async ()=>{
            try{
                const res = await productApi.getDetailHotel(id);
                setHotel(res);
            }
            catch (error){
                console.log('Failed to featch Hotel',error)
            }
        }
        fetchHotel();
    },[]);
   
    const day = (((date[1]-date[0])/1000)/(24*3600));
    console.log(day);
    function handleCHange (){
    
          
        fetch('https://localhost:7276/api/checkout',{
          mode: "cors",
          method: "POST",
          headers: {
              Accept: "application/json",
          },
          body: JSON.stringify({end:date[1],start:date[0]})
          
        }).then(res => res.json())
       
    }
    function renderSwitch(param){
        switch(param) {
          case 3:
            return (
                <Fragment>

                <button type="button" className="btn-photo btn-image-wrapper">
                    <img src={`https://localhost:7276/${hotel.inforOneHotel.image[0]}`} alt="" className="image-photo image-radius"/>
                </button>
                <button type="button" className="btn-photo btn-image-wrapper">
                    <img  src={`https://localhost:7276/${hotel.inforOneHotel.image[0]}`} alt="" className="image-photo image-radius"/>
                </button>
                <button type="button" className="btn-photo btn-image-wrapper">
                    <img src={`https://localhost:7276/${hotel.inforOneHotel.image[0]}`} alt="" className="image-photo image-radius"/>
                </button>
                <button type="button" className="btn-photo btn-image-wrapper">
                    <img src={`https://localhost:7276/${hotel.inforOneHotel.image[0]}`} alt="" className="image-photo image-radius"/>
                </button>
                <button type="button" className="btn-photo btn-image-wrapper">
                    <img src={`https://localhost:7276/${hotel.inforOneHotel.image[0]}`} alt="" className="image-photo image-radius"/>
                    <div className="image-layout">
                        <p className="image-layout-text">+{hotel.inforOneHotel.image.length}</p>
                    </div>
                </button>
                </Fragment>
            );
            break;
          case 4:
            return ;
          default:
            return ;
        }
      }
    

    function renderdata(){
        if(!hotel)
            return(
                <h1>Loading....................</h1> )
        return ( 
        <Fragment>
            <Header/>
                   <main>
            <div className="mashead masthead-gallery" style={{position:'relative'}}>
                <div className="masthead-gallery-wrapper">
                    <button type="button" className="masthead-gallery-open">
                        <span className="masthead-gallery-open-number">3</span>
                        <span className="masthead-gallery-open-base"></span>
                    </button>
                    <div className="masthead-gallery-image">
                     <div className="masthead-gallery-image-item lazy entered loaded adjusted" style={{backgroundImage:`url(https://localhost:7276/${hotel.inforOneHotel.image[0]})`}}></div>
                     <div className="masthead-gallery-image-item lazy entered loaded adjusted" style={{backgroundImage:`url(https://localhost:7276/${hotel.inforOneHotel.image[1]})`}}></div>
                     <div className="masthead-gallery-image-item lazy entered loaded adjusted" style={{backgroundImage:`url(https://localhost:7276/${hotel.inforOneHotel.image[2]})`}}>  </div>
                    </div>
                </div>
            </div>
             
                <div className="container restaurant-wrapper"  style={{height:'auto',width:'100%'}}>
                    <div className="row">
                        <div className="col-12 col-lg-7">
                            <section className="restaurant-infor">
                                <nav className="restaurant-nav">
                                    <ol>
                                        <li className=""><button className="btn-item">Overview</button></li>
                                        <li className=""><button className="btn-item">Photos</button></li>
                                        {/* <li className="restaurant-nav-item"><button className="btn-item">Menus</button></li>
                                        <li className="restaurant-nav-item"><button className="btn-item">Reviews</button>
                                        </li> */}
                                    </ol>
                                </nav>
                                <section className="restaurant-overview">
                                    <h1 className="restaurant-overview-title">{hotel.inforOneHotel.name}</h1>
                                    <div className="restaurant-overview-rating">
                                        {/* <div className="rating-start">
                                            <div className="amount-start">
                                                <div className="start"><i className="fa-solid fa-star icon"></i></div>
                                                <div className="start"><i className="fa-solid fa-star"></i></div>
                                                <div className="start"><i className="fa-solid fa-star"></i></div>
                                                <div className="start"><i className="fa-solid fa-star"></i></div>
                                            </div>
                                            <span className="amount-review"></span>
                                        </div> */}
                                        <div className="rating-review">
                                            <span className="rating-review-icon">
                                                <i className="fa-regular fa-comment icon"></i>
                                            </span>
                                            <span className="amount-review">
                                                {hotel.resRoomDetail.length} Rooms
                                            </span>
                                        </div>
                                        <div className="rating-price">
                                            <span className="rating-review-icon">
                                                <FaPhone/>
                                            </span>
                                            <span className="amount-review">
                                                {hotel.inforOneHotel.phone}
                                            </span>
                                        </div>
                                        <div className="rating-type-food">
                                            <span className="rating-review-icon">
                                                <i className="fa-solid fa-utensils"></i>
                                            </span>
                                            <span className="amount-review">
                                            {/* {hotel.inforOneHotel.address} */}
                                            </span>
                                        </div>
                                    </div>
                                    <div className="restaurant-overview-tag">
                                        {/* <span className="top-tags">Top Tags:</span>
                                        <ul className="restaurant-tag">
                                            <li className="restaurant-tag-name">
                                                <a className="restaurant-tag-name-link" href="">Innovative</a>
                                            </li>
                                            <li className="restaurant-tag-name">
                                                <a className="restaurant-tag-name-link" href="">Romatic</a>
                                            </li>
                                            <li className="restaurant-tag-name">
                                                <a className="restaurant-tag-name-link" href="">Special good for vacation</a>
                                            </li>
                                        </ul> */}
                  
                                    </div>
                                    <div className="">
                                        <span className="">
                                        Address:{hotel.inforOneHotel.address}
                                        </span>
                                    </div>
                                </section>
                                <section className="photo">
                                    <div className="restaurant-photo">
                                        <div className="restaurant-photo-header">
                                            <h2 className="restaurant-photo-title">
                                               {hotel.inforOneHotel.image.length} Photos
                                            </h2>
                                        </div>
                                        {/* <div className="photo-nav">
                                            <nav className="photo-nav-list">
                                                <ol className="photo-nav-list-item">
                                                    <li className="title-active">
                                                        <button className="photo-nav-link">
                                                        All
                                                    </button></li>
                                                    <li className="">
                                                        <button className="photo-nav-link">
                                                        Food
                                                    </button></li>
                                                    <li className="">
                                                        <button className="photo-nav-link">
                                                            Drinks
                                                        </button>
                                                    </li>
                                                    <li className="title-active">
                                                        <button className="photo-nav-link">Interior</button>
                                                    </li>
                                                </ol>
                                            </nav>
                                        </div> */}
                                        <div className="photo-image">
                                          {renderSwitch(hotel.inforOneHotel.image.length)}
                                        </div>
                                    </div>
                                </section>
                                      
                                <section className="booking-map">
                                    <div className="">
                                        <section className="booking-google-map">
                                            <a href={hotel.inforOneHotel.mapdata} className="google-map-link">
                                                <img src="/assets/image/staticmap.png" alt="" className="booking-google-map-image"/>
                                                <span className="booking-google-map-wrapper">
                                                    <span className="booking-google-map-icon">
                                                        <i className="fa-solid fa-location-dot"></i>
        
                                                    </span>
                                                    <p className="booking-google-map-content">111 Richmond St. W, Toronto, ON M5H 2G4</p>
                                                </span>
                                            </a>
                                        </section>
                                    </div>
                                </section>
                               
                            </section>
                        </div>
                        <div className="col-lg-5 col-12">
                            <div className="restaurant-booking-wrapper">
                                <div className="restaurant-booking">
                                    <div className="restaurant-booking-wrapper">
                                        <article className="restaurant-booking-infor">
                                            <h2 className="restaurant-booking-title">
                                                Make a Resevation
                                            </h2>
                                            <div className="restaurant-booking-content">
                                                <div className="restaurant-booking-size">
                                                    <label for="" className="party-size">Party Size</label>
                                                    <div className="party-size-content">
                                                        <select name="" id="" className="party-size-select">
                                                            <option value="">1 people</option>
                                                            <option value="">1 people</option>
                                                            <option value="">1 people</option>
                                                            <option value="">1 people</option>
                                                        </select>
                                                        
                                                        <div className="select-display">
                                                            <div className="select-display-content">
                                                                <div className="select-display-title">
                                                                    2 People
                                                                </div>
                                                                <span className="select-display-layout"><i className="fa-solid fa-caret-down"></i></span>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <hr className="hr-content hr-color"/>
                                                <div className="booking-time d-flex" >
                                                    <lable className="booking-date">Date Time</lable>
                                                    <label for="" className="booking-hour"></label>
                                                </div>
                                                <div className="booking-time-content d-flex">
                                                    <div className="booking-time-select">
                                                        <div className="booking-time-select-content">
                                                            {/* <input type="datetime-local" onChange={(e)=>setdate(e.target.value)} id="birthdaytime" name="birthdaytime"/> */}
                                                             <LocalizationProvider className="destination-explore-item-input"dateAdapter={AdapterDayjs}>
                                                                <div className="" style={{height:'1.6rem'}}>
                                                                <DemoContainer sx={{padding:'2px 2px'}} style={{padding:'2px'}}  components={['DateRangePicker']}>
                                                                <DateRangePicker onChange={e=>setdate(e)}/>
                                                                </DemoContainer>
                                                                </div>
                                                            </LocalizationProvider>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="booking-footer">
                                                <button onClick={ handleCHange()} className="btn-restaurant">Update Information</button>
                                            </div>
                                        </article>
                                        
                                    </div>
                                </div>
                                <div className="room">
                                <Room hotels={hotel.resRoomDetail} day={day}></Room>
                                </div>
                                <div className="">
                                    <h4 className="header-content detail-restaurant">Additional Information</h4>
                                    <div className="detail-restaurant-content">
                                        <ul className="detail-restaurant-list">
                                            <li className="detail-restaurant-item">
                                                <div className="detail-restaurant-note d-flex">
                                                    <span className="detail-restaurant-icon">
                                                        <i className="fa-solid fa-road"></i>
                                                    </span>
                                                    <div className="detail-restaurant-line">
                                                        <span className="detail-restaurant-title">
                                                            Cross Street
                                                        </span>
                                                        <p className="detail-restaurant-p">
                                                            Richmond/York
                                                        </p>
                                                    </div>
                                                </div>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
    
                            </div>
                        </div>
                        
    
                    </div>
                </div>
        </main>
        <Footer/>
            </Fragment>
        )
    }
    return (
       renderdata()
    )
}
export default SelectRoom;