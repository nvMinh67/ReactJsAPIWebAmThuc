import logo from './logo.svg';
import { NavLink,Routes,Route,Link } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import React, { Component, Fragment,useEffect,useState } from 'react';
import Inspiration from './Component/Inspiration';
import Heroes from './Component/Heroes';
import { Carousel } from 'react-responsive-carousel';
import Dish from './Component/Dish';
import Review from './Component/Review';
import Location from './Component/Location';
import ModalForm from './Component/ModalForm';
import Guest from './Component/Guest';
import Footer from './Component/Footer';
import Home from './Component/Home';
import Restaurant from './Component/restaurant';
import Hotel from './Component/Hotel';
import Magazine from './Component/Magazine';
import TextFile from './Component/TestFile';
import AddDishForm from './Component/addDishForm';
import DetailRestaurant from './Component/DetailRestaurant';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './App.css';
import Register from './Component/Register';
import {FaHotel,FaUtensils,FaHeart,FaNewspaper,FaUser,FaBars}  from 'react-icons/fa'
import { Modal } from 'bootstrap';
import UserService from './service/user.service';
import FilterRestaurant from './Component/FilterRestaurant';
import ProviceForm from './Component/proviceform';
import Admin from './Component/Admin';
import AdminPage from './ComponentAdmin/AdminPage';
import DetailHotel from './Component/DetailHotel';
import SelectRoom from './Component/SelectRoom';
import HotelBooking from './Component/HotelBooking';

function App() {
return(
<Fragment>
    <Routes>
          
          <Route path="/selectRoom/:id"  element={<SelectRoom/>} />
          <Route path="/HotelBooking/:id/:day"  element={<HotelBooking/>} />
          <Route path="/Hotel/:id" element={<DetailHotel/>}/>
          <Route path="/"  element={<TextFile/>} />
          <Route path="/restaurant" element={<Restaurant />} />
          <Route path="/hotel" element={<Hotel/>} />
          <Route path="/magazine" element={<Magazine/>} />
          <Route path="/tf" element={<TextFile/>} />
          <Route path="/addDish" element={<AddDishForm/>} />
          <Route path="/searchrestaurant" element={<FilterRestaurant/>} />
          <Route path="/restaurant/:id" element={<DetailRestaurant/>} />
          <Route path="/province" element={<ProviceForm/>} />
          <Route path="/admin" element={<Admin/>} />
          <Route path="/ownerRestaurant/:id" element={<AdminPage/>} />
        </Routes>
</Fragment>
);
};

export default App ;
