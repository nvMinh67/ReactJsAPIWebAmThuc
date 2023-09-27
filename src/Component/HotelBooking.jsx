
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Fragment } from "react";
import { useParams } from "react-router-dom";
import productApi from "../api/productApi";
import CheckOutForm from "./CheckOutForm";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
const HotelBooking =()=>{
    const navigate = useNavigate();
    const {id} = useParams();
    const {day} = useParams();
    const {checkOut} = useParams();
    const {checkIn} = useParams();
    const [Name,setName] = useState();
    const [Email,setEmail] = useState();
    const [Phone,setPhone] = useState();
    const [Address,setAddress] = useState();
    const [Message,setMessage] = useState();
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
    function handleupload(e){
        e.preventDefault();
          const formdata = new FormData();
          formdata.append('Name',Name);
            formdata.append('Email',Email);
            formdata.append('Phone',Phone);
            formdata.append('Address',Address);
            formdata.append('id_room',id);
            formdata.append('Message',Message);
            formdata.append('Payment',0);
            formdata.append('checkIn',checkIn);
            formdata.append('checkOut',checkOut);
            formdata.append('numDay',day);
          fetch('https://localhost:7276/api/Oder',{
            mode: "cors",
            method: "POST",
            headers: {
                Accept: "application/json",
            },
            body: formdata
          }).then(res => res.json())
          .then(data=>Swal.fire({
            position: 'top-end',
            icon: 'success',
            title: 'Booking success',
            showConfirmButton: false,
            timer: 1500
          }),navigate("/restaurant"))
          .catch(err => console.log(formdata));
      }

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
                <from>
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
                               <td><span>{checkIn}</span></td>
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
                   </div>)}))}
                   </div>
               </div>
               <div class="container-layout"style={{marginTop:'20px'}}>
                   <div class="layout-02 booking-layout">
                   <div class="row">
                       <div class="col-md-8">
                      
                           <h3 class="heading-title">Contact Details</h3>
                           <div class="contact-form">
                           <div class="contact-infor">
                               <div class="contact-infor__block">
                               <label for="name">Name*</label>
                               <input onChange={(e)=>setName(e.target.value)} required type="text" id="name" placeholder="Your Name"/>
                               </div>
                               <div class="contact-infor__block">
                               <label for="email">Email*</label>
                               <input onChange={(e)=>setEmail(e.target.value)} required type="email" id="email" placeholder="Your Email"/>
                               </div>
                               <div class="contact-infor__block">
                               <label for="phone">Phone*</label>
                               <input onChange={(e)=>setPhone(e.target.value)} required type="text" id="phone" placeholder="Your Phone"/>
                               </div>
                               <div class="contact-infor__block">
                               <label for="address">Address*</label>
                               <input onChange={(e=>setAddress(e.target.value))} required type="text" id="address" placeholder="Your Address"/>
                               </div>
                               <div class="contact-infor__block">
                               <label for="country">City*</label>
                               <select required class="form-select" aria-label="Default select example">
                                   <option selected>Select City</option>
                                   <option value="1">One</option>
                                   <option value="2">Two</option>
                                   <option value="3">Three</option>
                               </select>
                               </div>
                               <div class="contact-infor__block">
                               <label for="city">Ward*</label>
                               <select required class="form-select" aria-label="Default select example">
                                   <option selected>Select District</option>
                                   <option value="1">One</option>
                                   <option value="2">Two</option>
                                   <option value="3">Three</option>
                               </select>
                               </div>
                               <div class="contact-infor__block">
                               <label for="city">District*</label>
                               <select required class="form-select" aria-label="Default select example">
                                   <option selected>Select Ward</option>
                                   <option value="1">One</option>
                                   <option value="2">Two</option>
                                   <option value="3">Three</option>
                               </select>
                               </div>
                               <div class="contact-infor__block">
                               <label for="messenger">Messenger</label>
                               <textarea onChange={(e)=>setMessage(e.target.value)} name="messenger" id="" cols="30" rows="10" placeholder="writing something ..."></textarea>
                               </div>
                           </div>
                           </div>
                       </div>
                       <div class="col-6 col-md-4 width-100"  style={{borderLeft:'none'}}>
                       {/* <CheckOutForm rooms={room.resRoomDetail} day={day}></CheckOutForm> */}
                       {room.resRoomDetail.map((room =>{
                        return (
                       <div class="sidebar-form">
                        <div class="search-available">
                        <div class="booking-form__block">
                            <h1 class="post-title">Check Out</h1>
                            <div class="input-group">
                                <div class="booking-block">
                                <span class="booking_form"  style={{lineHeight:'normal'}}>
                                    Days
                                </span>
                                <span class="booking-clock">{day}</span>
                                </div>
                                {/* <div class="booking-ticket">
                                <label class="booking_form">Tickets</label>
                                <div class="booking-guests-result">
                                    <ul style={{paddingLeft:'-2rem;'}}>
                                    <li>
                                        <span class="booking-title">Adult</span>
                                        <span class="booking-price">1 x 399.000đ</span>
                                        <span class="booking-price">1.100.000đ</span>
                                    </li>
                                    <li>
                                        <span class="booking-title">Youth</span>
                                        <span class="booking-price">1 x 399.000đ</span>
                                        <span class="booking-price">1.100.000đ</span>
                                    </li>
                                    <li>
                                        <span class="booking-title">Children</span>
                                        <span class="booking-price">1 x 399.000đ</span>
                                        <span class="booking-price">1.100.000đ</span>
                                    </li>
                                    </ul>
                                </div>
                                </div> */}

                                <div class="services-block">
                                <label class="booking_form">Extra services</label>
                                <div class="list-services">
                                    <i class="qtip tip-left"
                                    data-tip="Lorem ipsum dolor sit amet, utinam munere antiopam vel ad. Qui eros iusto te. Nec ad feugiat honestatis. Quo illum detraxit an. Ius eius quodsi molestiae at, nostrum definitiones his cu. Discere referrentur mea id, an pri novum possim deterruisset. Eum oratio reprehendunt cu. Nec te quem assum postea.">
                                    <label for="booking-extra">Room Price : </label>
                                    <span class="price-extra">  {room.price*day}  ₫ </span>
                                    </i>
                                    <i class="qtip tip-left"
                                    data-tip="Lorem ipsum dolor sit amet, utinam munere antiopam vel ad. Qui eros iusto te. Nec ad feugiat honestatis. Quo illum detraxit an. Ius eius quodsi molestiae at, nostrum definitiones his cu. Discere referrentur mea id, an pri novum possim deterruisset. Eum oratio reprehendunt cu. Nec te quem assum postea.">

                                    <label for="booking-extra">Taxes & Fees : </label>
                                    <span class="price-extra"> {room.price*0.1}  ₫ </span>
                                    </i>
                                </div>                   
                                </div>
                                {/* <div class="coupon">
                                <label class="booking_form">Coupon</label>
                                <div class="coupon-block">
                                    <input type="text" placeholder="Enter your coupon code"/>
                                    <button type="button" class="coupon-btn">Apply</button>
                                </div>
                                </div> */}

                                <div class="detail-price">
                                <label class="booking_form">Detail Price</label>
                                <div class="detail-price__item">
                                    <span class="detail-price__title">Total</span>
                                    <span class="detail-price__price"> ₫ {room.price*day+room.price*0.1*12}</span>
                                </div>
                                <div class="detail-price__item">
                                    <span class="detail-price__title">Due Now</span>
                                    <span class="detail-price__price"> ₫ 0</span>
                                </div>
                                <div class="detail-price__item">
                                    <span class="detail-price__title">Due at Checkout</span>
                                    <span class="detail-price__price"> ₫ {room.price*2+room.price*0.1*12}</span>
                                </div>
                                </div>
                            </div>
                            
                            <div class="submit-group">
                                <button onClick={handleupload} type="submit">Book Now <i class="fa-solid fa-arrow-right"></i></button>
                            </div>
                        
                        </div>
                        </div>
                    </div>)}))}
                       </div>
                   </div>
                   </div>
               </div>

            </from>
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