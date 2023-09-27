import React from "react";
import { NavLink } from "react-router-dom";



const SideBar =(props)=>{
    return (
        <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
        <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
            <div className="sidebar-brand-icon rotate-n-15">
                <i className="fas fa-laugh-wink"></i>
            </div>
            <div className="sidebar-brand-text mx-3">{props.admin.name}<sup>9</sup></div>
        </a>
        <hr className="sidebar-divider my-0" />
        <NavLink to={`/ownerHotel/${props.id}`}>
        <li className="nav-item active-menu" >
            <a className="nav-link" href="index.html">
                <i className="fas fa-fw fa-tachometer-alt"></i>
                <span>Dashboard</span></a>
        </li>
        </NavLink>
        <NavLink to={`/ownerHotel/orders/${props.id}/${props.admin.roomdetails[0].id_Hotels}`}>
        <li className="nav-item">
            <a className="nav-link" href="charts.html">
                <i className="fas fa-fw fa-chart-area"></i>
                <span>Orders</span></a>
        </li>
        </NavLink>
    </ul>
    )
}
export default SideBar;