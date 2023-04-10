
import {FaHotel,FaUtensils,FaHeart,FaNewspaper,FaUser,FaBars}  from 'react-icons/fa'
import Register from "./Register";
import React, { Component, Fragment,useEffect,useState } from 'react';
import ModalForm from "./ModalForm";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Auth from './Auth';
const Header=()=>{
      const {gettoken,logout,token,getuser,user} = Auth();
var rolename = getuser();
function renderLayout(){
    if(!rolename.roleName=="AdminRestaurant")
        return(
            <h2>
            </h2>
        )
        if(rolename.roleName=="")
        return(
            <h2>
            </h2>
        )
        if(rolename.roleName == "Admin")
        return(
            <Link to='/admin'>
            <div className='link'>
                Go To Admin Page
            </div>
            </Link>
        )
    return(
        <li className="menubar_content-list-item">
            <Link to={`/ownerRestaurant/${rolename.id}`}>
             <div   className="link">Go To Store</div>
            </Link>
       
        </li>
    )
}
const [openModalLogin,setopenModalLogin] = useState(false);
const [openregisterform,setregisterform] = useState(false);

// setRoleName(user.roleName);
const logoutuser =()=>{
    if(token != undefined){
        logout();
    }

}
    return(
        <Fragment>
        <header>
        <div className="header-wrapper">
            <nav id="header" className="d-flex">
              <div className="header_logo">
                <a href="">
                    <img src="../logo192.png" alt="" />
                </a>

              </div>
              <div className="header_nav">
                <div className="header_menu">
               
                <ul className="header_menu-list">
                            <li className="item"><NavLink to="/restaurant" className="link" activeclassname="active-menu">Restaurant</NavLink></li>
                            <li className="item"><NavLink to="/hotel"  className="link" activeclassname="active-menu">Hotel</NavLink></li>
                            <li className="item"><NavLink to="/magazine"  className="link" activeclassname="active-menu">Magazine</NavLink></li>
                            <li className="item"><NavLink to="/myfavorite"  className="link" activeclassname="active-menu">My Favorite</NavLink></li>
                        </ul>
                </div>
              </div>
              <div className="header_account">
                <button className="header_account-button">
                <img src="../image/user.svg" alt="" />
                   <div className="header_account-button-icon">
                    <i className="burger-menu" style={{  
  backgroundImage: "url(" + "../image/bar.svg" + ")",
  backgroundPosition: 'center',
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat'
}} ></i>
                        <div className="menubar">
        <div className="menubar_wrapper">
            <div className="menubar_content">
                <ul className="menubar_content-list">
                    {!gettoken() ? (
                     <Fragment>
                     <li className="menubar_content-list-item">
                        <div onClick={()=>setopenModalLogin(true)} className="link">Login</div>
                        </li>
                         <li className="menubar_content-list-item">
                             <div onClick={()=>setregisterform(true)} className="link">Register</div>
                         </li>
                        </Fragment>
                         ):(
                        <Fragment> 
                         
                        <li className="menubar_content-list-item">
                        <div onClick={()=>logoutuser()}  className="link">Logout</div>
                        </li>
                        {getuser() ? (
                        renderLayout()
                        ) : (
                            <li className="menubar_content-list-item">
                        <div onClick={()=>logoutuser()}  className="link"></div>
                        </li>
                        )}
                    </Fragment>
                    )
                    }
                    
                   
                   
                    <li className="menubar_content-list-item list-separator">
                        <a href="" className="link"></a>
                    </li>
                    <li className="menubar_content-list-item">
                        <a href="" className="link">Restaurants</a>
                    </li>
                    <li className="menubar_content-list-item">
                        <a href="" className="link">Hotels</a>
                    </li>
                    <li className="menubar_content-list-item">
                        <a href="" className="link">Best of Guide</a>
                    </li>
                    <li className="menubar_content-list-item">
                        <a href="" className="link">Magazines</a>
                    </li>
                    <li className="menubar_content-list-item">
                        <a href="" className="link">Events</a>
                    </li>
                    <li className="menubar_content-list-item">
                        <a href="" className="link">The Fork for refer Partnership</a>
                    </li>
                    <li className="menubar_content-list-item">
                        <a href="" className="link">The Fork For partner Restaurents</a>
                    </li>
                    <li className="menubar_content-list-item list-separator">
                        <a href="" className="link"></a>
                    </li>
                    <li className="menubar_content-list-item">
                        <a href="" className="link">Global</a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
                   </div>
                </button>
              </div>
            </nav>
        </div>
        <div className="navmobile">
            <div className="nav-mobile-wrapper">
                <div className="nav-mobile-content">
                    <ul className="nav-mobile-content-list">
                        <li className="nav-moblie-content-list-item">
                            <a href="" className="link">
                            <FaUtensils className="active icon"/>
                            </a>
                        </li>
                        <li className="nav-moblie-content-list-item">
                            <a href="" className="link">
                            <FaHotel/>
                            </a>
                        </li>
                        <li className="nav-moblie-content-list-item">
                            <a href="" className="link">
                               <FaHeart/>
                            </a>
                        </li>
                        <li className="nav-moblie-content-list-item">
                            <a href="" className="link">
                                <FaNewspaper/>
                            </a>
                        </li>
                        <li className="nav-moblie-content-list-item">
                            <a href="" className="link">
                               <FaUser/>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
            </header>
            <ModalForm open={openModalLogin} onclose={()=>setopenModalLogin(false)}/>
            <Register open={openregisterform} onclose={()=>setregisterform(false)}/>
        </Fragment>

    )
}
export default Header;