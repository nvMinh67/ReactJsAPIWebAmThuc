import excludeVariablesFromRoot from "@mui/material/styles/excludeVariablesFromRoot";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Fragment } from "react";
import { useParams } from "react-router-dom";
import productApi from "../api/productApi";
import CheckOutForm from "./CheckOutForm";
const HotelBooking =()=>{
    const {id} = useParams();
    const {day} = useParams();
    console.log(day);
    const [room,setRoom]=useState('');
    useEffect(()=>{
        const fetchRoom = async ()=>{
            try{
                const res = await productApi.getRoomDetail(id);
                setRoom(res);
            }
            catch(error){
                console.log('Failed to fetch Room ',error);
            }
        }
        fetchRoom();
    },[])
    function renderLayout (){
        if(!room) return (<h1>Loading..............</h1>)
        return (
            <Fragment>
            <main class="main">
               <div className="container">
               <div class="breadcrumb-layout" style={{backgroundImage:`url(https://localhost:7276/${room.inforOneHotel.image[0]})`,backgroundPosition:'center'}}>
                   <div class="bg-overlay"></div>
                   <div class="container-layout" 
                   style={{background:'content-box'}}>
                   <div class="breadcrumb-main">
                       <h1 style={{color:'white'}} class="zourney-title">Check Out</h1>
                       <span>
                       <a href="" class="home">
                           <span>Home</span>
                       </a>
                       </span>
                       <span>
                       <a href="" class="post-page">
                           <span>Tour list</span>
                       </a>
                       </span>
                       <span>
                       <a href="" class="post-page">
                           <span>Tour Details</span>
                       </a>
                       </span>
                       <span>
                       <a href="" class="">
                           <span>Tour Booking</span>
                       </a>
                       </span>
                   </div>
                   </div>
               </div>
               <div class="container-layout">
                   <div class="detail-tour"  style={{marginTop:'20px'}}>
                   <nav aria-label="breadcrumb">
                       <ol class="breadcrumb">
                       <li class="breadcrumb-item"><a href="#">Select Tour</a></li>
                       <li class="breadcrumb-item" aria-current="page">Contact Details</li>
                       <li class="breadcrumb-item"><a href="#">Payment</a></li> 
                       </ol>
                   </nav>
                   </div>
                   <div class="layout-02">
                 
                    {room.resRoomDetail.map((room =>{
                        return(
                            <div class="row">
                       <div class="col-4 width-100 width-50">
                       <div class="img-detail">
                           <img src={`https://localhost:7276/${room.image[0]}`} alt=""/>
                       </div>
                       </div>
                       <div class="col-8 width-100 width-50">
                       <div class="content-detail">
                           <span class="single-address">{room.hotel.address}</span>
                           <h1 class="heading-title">{room.name}</h1>
                           <table>
                           <tr>
                               <td><i class="fa-solid fa-id-card"></i>Price : </td>
                               <td><span>{room.price}</span></td>
                           </tr>
                           <tr>
                               <td><i class="fa-solid fa-calendar"></i> Departure Day</td>
                               <td><span>12/12/2020</span></td>
                           </tr>
                           <tr>
                               <td><i class="fa-solid fa-clock"></i> Period</td>
                               <td><span>12 Days / 11 Night</span></td>
                           </tr>
                           <tr>
                               <td><i class="fa-solid fa-clock"></i>View</td>
                               <td><span>{room.view}</span></td>
                           </tr>
                           </table>
                       </div>
                       </div>
                   </div>

                        )
                    }))}
                   </div>
               </div>
               <div class="container-layout">
                   <div class="layout-02 booking-layout">
                   <div class="row">
                       <div class="col-md-8">
                       <form action="">
                           <h3 class="heading-title">Traveller Details</h3>
                           <div class="contact-form">
                           <label class="booking_form">Traveller 1</label>
                           <div class="row">
                               <div class="col">
                               <input type="text" class="form-control" placeholder="First name" aria-label="First name"/>
                               </div>
                               <div class="col">
                               <input type="text" class="form-control" placeholder="Last name" aria-label="Last name"/>
                               </div>
                           </div>
                           <input type="text" class="form-control" placeholder="Email"
                               aria-label="citizen identification/passport"/>
                           <div class="row">
                               <div class="col">
                               <select class="form-select" aria-label="Default select example">
                                   <option selected="">Open this select menu</option>
                                   <option value="1">One</option>
                                   <option value="2">Two</option>
                                   <option value="3">Three</option>
                               </select>
                               </div>
                               <div class="col">
                               <input type="text" class="form-control" placeholder="Phone*" aria-label="Last name"/>
                               </div>
                           </div>
                           </div>
                   
                           <h3 class="heading-title">Contact Details</h3>
                           <div class="contact-form">
                           <div class="contact-infor">
                               <div class="contact-infor__block">
                               <label for="name">Name*</label>
                               <input type="text" id="name" placeholder="Your Name"/>
                               </div>
                               <div class="contact-infor__block">
                               <label for="email">Email*</label>
                               <input type="email" id="email" placeholder="Your Email"/>
                               </div>
                               <div class="contact-infor__block">
                               <label for="phone">Phone*</label>
                               <input type="text" id="phone" placeholder="Your Phone"/>
                               </div>
                               <div class="contact-infor__block">
                               <label for="address">Address*</label>
                               <input type="text" id="address" placeholder="Your Address"/>
                               </div>
                               <div class="contact-infor__block">
                               <label for="country">City*</label>
                               <select class="form-select" aria-label="Default select example">
                                   <option selected>Open this select menu</option>
                                   <option value="1">One</option>
                                   <option value="2">Two</option>
                                   <option value="3">Three</option>
                               </select>
                               </div>
                               <div class="contact-infor__block">
                               <label for="city">Ward*</label>
                               <select class="form-select" aria-label="Default select example">
                                   <option selected>Open this select menu</option>
                                   <option value="1">One</option>
                                   <option value="2">Two</option>
                                   <option value="3">Three</option>
                               </select>
                               </div>
                               <div class="contact-infor__block">
                               <label for="city">District*</label>
                               <select class="form-select" aria-label="Default select example">
                                   <option selected>Open this select menu</option>
                                   <option value="1">One</option>
                                   <option value="2">Two</option>
                                   <option value="3">Three</option>
                               </select>
                               </div>
                               <div class="contact-infor__block">
                               <label for="zip">Zip</label>
                               <input type="text" id="zip" placeholder="Your Zip"/>
                               </div>
                               <div class="contact-infor__block">
                               <label for="messenger">Messenger</label>
                               <textarea name="messenger" id="" cols="30" rows="10" placeholder="writing something ..."></textarea>
                               </div>
                           </div>
                           </div>
                       </form>
                       </div>
                       <div class="col-6 col-md-4 width-100"  style={{borderLeft:'none'}}>
                       <CheckOutForm rooms={room.resRoomDetail} day={day}></CheckOutForm>
                       </div>
                   </div>
                   </div>
               </div>
               </div>
     </main>
       </Fragment>

        )
    }
  return(
    renderLayout()
  )
}
export default HotelBooking;