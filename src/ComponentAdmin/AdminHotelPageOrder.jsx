import React,{Fragment,useState,useEffect} from "react";
import '../admin.css';
import { Link, NavLink } from "react-router-dom";
import { useParams } from "react-router-dom";
import productApi from "../api/productApi";
import ModalAddProduct from "./ModalAddProduct";
import Iframe from "react-iframe";
import ModalAddRoom from "./ModalAddRoom";
import Swal from "sweetalert2";
import ModalEditRoom from "./ModalEditRoom";
import SideBar from "./SideBar";
import format from "date-fns/format";
import dateFormat from "dateformat";
import eachDayOfInterval from "date-fns/eachDayOfInterval";
const AdminHotelPageOrder=()=>{
    const {id} = useParams();
    const {idhotel} = useParams();
    const [approve,setApprove] = useState();
    const [admin, setAdmin] = useState();
    const [checkIn,setCheckIn] = useState();
    const [order,setOrder] = useState();
    const [orderCheckIn,setOrderCheckIn] = useState();
    const [typeRoom,setTypeRoom]= useState();
    const [openModelAddDish,setOpenModalAddDish] = useState(false);
    const [openModelEditRoom,setOpenModalEditRoom] = useState(false);
    const [idproduct,setIdProduct] = useState();
    const [addProdudct,setAddProduct] = useState(false);
    const [statusDelete,setStatusDelete] = useState(false);
    useEffect(() => {
    const fetchProductList = async () => {
        try {
        const formData = new FormData();
        formData.append('id_user',id);
        formData.append('id_Hotel',idhotel);
        const res = await productApi.getAllOrderList(formData);
        const response = await productApi.getHotelInfor(id);
        const orderChIn = await productApi.getAllOrderCheckInList(formData);
        setAdmin(response);
        setOrderCheckIn(orderChIn);
        setOrder(res);
        } catch (error) {
        console.log('Failed to fetch product list: ', error);
        }
    }
    fetchProductList();
    },[approve,checkIn]);
    function renderOrderStatus(value,id){
        switch(value){
            case 0:
                return (<button value={id} onClick={handleBrowser} className="btn btn-primary">Pending</button>)
                break;
            case -1:
                return (<button value={id}  className="btn btn-danger">Reject</button>)
                break;
            case 1:
                return (<button value={id}  className="btn btn-success">Approve</button>)
              break;

        }
    }
    const CheckIn = (e)=>{
        Swal.fire({
            title: 'Do you want to save the changes?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Approve',
            denyButtonText: `Reject`,
          }).then((result) => {
          
            if (result.isConfirmed) {
                const comfim = async () => {
                    try{
                        const res = await productApi.CheckIn(e.target.value);
                        setCheckIn(res);
                    }
                    catch(error){
                    }
                }
                comfim();
    
              Swal.fire('Saved!', '', 'success')
            } else if (result.isDenied) {
              Swal.fire('Changes are not saved', '', 'info')
            }
          })
    }
    const CheckOut = (e)=>{
        Swal.fire({
            title: 'Do you want to change to check out status?',
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: 'Approve',
            denyButtonText: `Reject`,
          }).then((result) => {
          
            if (result.isConfirmed) {
                const comfim = async () => {
                    try{
                        const res = await productApi.CheckIn(e.target.value);
                        setCheckIn(res);
                    }
                    catch(error){

                    }
                }
                comfim();
    
              Swal.fire('Saved!', '', 'success')
            } else if (result.isDenied) {
              Swal.fire('Changes are not saved', '', 'info')
            }
          })
    }

    function renderCheckIn(id,value){
        switch(value){
            case 1:
                return (<button value={id} onClick={CheckIn} className="btn btn-primary">Check In</button>)
                break;
            case 2:
                return (<button value={id}  className="btn btn-success">Check Out</button>)
                break;
            case 3:
                return (<button value={id}  className="btn btn-success">Done</button>)
              break;
            case 0:
                return (<button value={id} onClick={handleBrowser} className="btn btn-success">None</button>)
              break;
        }
      
    }
    function renderPayment(value){
        switch(value) {
            case  0 : 
            return (<h6>Cash</h6>)
            break;
            case  1 : 
            return (<h6>Paypal</h6>)
            break;
        }
    }
   const handleBrowser = (e) =>{
 
    Swal.fire({
        title: 'Do you want to save the changes?',
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: 'Approve',
        denyButtonText: `Reject`,
      }).then((result) => {
      
        if (result.isConfirmed) {
            const comfim = async () => {
                try{
                    const res = await productApi.browserOrder(e.target.value);
                    setApprove(res);
                }
                catch(error){

                }
            }
            comfim();

          Swal.fire('Saved!', '', 'success')
        } else if (result.isDenied) {
            const reject = async () => {
                try{
                    const res = await productApi.browserOrderReject(e.target.value);
                    setApprove(res);
                }
                catch(error){
                }
            }
            reject();
          Swal.fire('Changes are not saved', '', 'info')
        }
      })
   }
    const handleEdit =(e)=>{
        setOpenModalEditRoom(true);
        setIdProduct(e.target.value);
    }
    const handleDelete =(e)=>{

    }

    function renderlayout(){
        if(!order && !admin && !orderCheckIn)
        return (
        
         <h3>Loading...........</h3>
        
        )
        return (
            <Fragment>
            <body id="page-top">
                <div id="wrapper">

                <SideBar id={id} admin={admin}></SideBar>
                
              
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                            <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                                <i className="fa fa-bars"></i>
                            </button>
                            <form
                                className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                                <div className="input-group">
                                    <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..."
                                        aria-label="Search" aria-describedby="basic-addon2" />
                                    <div className="input-group-append">
                                        <button className="btn btn-primary" type="button">
                                            <i className="fas fa-search fa-sm"></i>
                                        </button>
                                    </div>
                                </div>
                            </form>
                            <ul className="navbar-nav ml-auto">         
                                <li className="nav-item dropdown no-arrow d-sm-none">
                                    <a className="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="fas fa-search fa-fw"></i>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                                        aria-labelledby="searchDropdown">
                                        <form className="form-inline mr-auto w-100 navbar-search">
                                            <div className="input-group">
                                                <input type="text" className="form-control bg-light border-0 small"
                                                    placeholder="Search for..." aria-label="Search"
                                                    aria-describedby="basic-addon2" />
                                                <div className="input-group-append">
                                                    <button className="btn btn-primary" type="button">
                                                        <i className="fas fa-search fa-sm"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </li>
                                <li className="nav-item dropdown no-arrow mx-1">
                                    <a className="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="fas fa-bell fa-fw"></i>
                                        <span className="badge badge-danger badge-counter">3+</span>
                                    </a>
                            
                                    <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                        aria-labelledby="alertsDropdown">
                                        <h6 className="dropdown-header">
                                            Alerts Center
                                        </h6>
                                        <a className="dropdown-item d-flex align-items-center" href="#">
                                            <div className="mr-3">
                                                <div className="icon-circle bg-primary">
                                                    <i className="fas fa-file-alt text-white"></i>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="small text-gray-500">December 12, 2019</div>
                                                <span className="font-weight-bold">A new monthly report is ready to download!</span>
                                            </div>
                                        </a>
                                        <a className="dropdown-item d-flex align-items-center" href="#">
                                            <div className="mr-3">
                                                <div className="icon-circle bg-success">
                                                    <i className="fas fa-donate text-white"></i>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="small text-gray-500">December 7, 2019</div>
                                                $290.29 has been deposited into your account!
                                            </div>
                                        </a>
                                        <a className="dropdown-item d-flex align-items-center" href="#">
                                            <div className="mr-3">
                                                <div className="icon-circle bg-warning">
                                                    <i className="fas fa-exclamation-triangle text-white"></i>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="small text-gray-500">December 2, 2019</div>
                                                Spending Alert: We've noticed unusually high spending for your account.
                                            </div>
                                        </a>
                                        <a className="dropdown-item text-center small text-gray-500" href="#">Show All Alerts</a>
                                    </div>
                                </li>
                                <li className="nav-item dropdown no-arrow mx-1">
                                    <a className="nav-link dropdown-toggle" href="#" id="messagesDropdown" role="button"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="fas fa-envelope fa-fw"></i>
                                        <span className="badge badge-danger badge-counter">7</span>
                                    </a>
                                    <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                        aria-labelledby="messagesDropdown">
                                        <h6 className="dropdown-header">
                                            Message Center
                                        </h6>
                                        <a className="dropdown-item d-flex align-items-center" href="#">
                                            <div className="dropdown-list-image mr-3">
                                                <img className="rounded-circle" src="img/undraw_profile_1.svg"
                                                    alt="..." />
                                                <div className="status-indicator bg-success"></div>
                                            </div>
                                            <div className="font-weight-bold">
                                                <div className="text-truncate">Hi there! I am wondering if you can help me with a
                                                    problem I've been having.</div>
                                                <div className="small text-gray-500">Emily Fowler · 58m</div>
                                            </div>
                                        </a>
                                        <a className="dropdown-item d-flex align-items-center" href="#">
                                            <div className="dropdown-list-image mr-3">
                                                <img className="rounded-circle" src="img/undraw_profile_2.svg"
                                                    alt="..." />
                                                <div className="status-indicator"></div>
                                            </div>
                                            <div>
                                                <div className="text-truncate">I have the photos that you ordered last month, how
                                                    would you like them sent to you?</div>
                                                <div className="small text-gray-500">Jae Chun · 1d</div>
                                            </div>
                                        </a>
                                        <a className="dropdown-item d-flex align-items-center" href="#">
                                            <div className="dropdown-list-image mr-3">
                                                <img className="rounded-circle" src="img/undraw_profile_3.svg"alt="..." />
                                                <div className="status-indicator bg-warning"></div>
                                            </div>
                                            <div>
                                                <div className="text-truncate">Last month's report looks great, I am very happy with
                                                    the progress so far, keep up the good work!</div>
                                                <div className="small text-gray-500">Morgan Alvarez · 2d</div>
                                            </div>
                                        </a>
                                        <a className="dropdown-item d-flex align-items-center" href="#">
                                            <div className="dropdown-list-image mr-3">
                                                <img className="rounded-circle" src="https://source.unsplash.com/Mv9hjnEUHR4/60x60"
                                                    alt="..." />
                                                <div className="status-indicator bg-success"></div>
                                            </div>
                                            <div>
                                                <div className="text-truncate">Am I a good boy? The reason I ask is because someone
                                                    told me that people say this to all dogs, even if they aren't good...</div>
                                                <div className="small text-gray-500">Chicken the Dog · 2w</div>
                                            </div>
                                        </a>
                                        <a className="dropdown-item text-center small text-gray-500" href="#">Read More Messages</a>
                                    </div>
                                </li>
            
                                <div className="topbar-divider d-none d-sm-block"></div>
                                <li className="nav-item dropdown no-arrow">
                                    <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <span className="mr-2 d-none d-lg-inline text-gray-600 small">Douglas McGee</span>
                                        <img className="img-profile rounded-circle"
                                            src="img/undraw_profile.svg" />
                                    </a>
            
                                    <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                        aria-labelledby="userDropdown">
                                        <a className="dropdown-item" href="#">
                                            <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                                            Profile
                                        </a>
                                        <a className="dropdown-item" href="#">
                                            <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                                            Settings
                                        </a>
                                        <a className="dropdown-item" href="#">
                                            <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                                            Activity Log
                                        </a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                                            <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                                            Logout
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </nav>
                        <div className="container-fluid">
                            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                                <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                                <Link to="/restaurant" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                        className="fas fa-download fa-sm text-white-50"></i>Trở Về Trang Chủ</Link>
                            </div>
                            <div className="row">
                                <div className="col-xl-3 col-md-6 mb-4">
                                    <div className="card border-left-primary shadow h-100 py-2">
                                        <div className="card-body">
                                            <div className="row no-gutters align-items-center">
                                                <div className="col mr-2">
                                                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                                        Tổng Số Món Ăn</div>
                                                    <div className="h5 mb-0 font-weight-bold text-gray-800"></div>
                                                </div>
                                                <div className="col-auto">
                                                    <i className="fas fa-calendar fa-2x text-gray-300"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-6 mb-4">
                                    <div className="card border-left-success shadow h-100 py-2">
                                        <div className="card-body">
                                            <div className="row no-gutters align-items-center">
                                                <div className="col mr-2">
                                                    <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                                                        Earnings (Annual)</div>
                                                    <div className="h5 mb-0 font-weight-bold text-gray-800">$215,000</div>
                                                </div>
                                                <div className="col-auto">
                                                    <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-6 mb-4">
                                    <div className="card border-left-info shadow h-100 py-2">
                                        <div className="card-body">
                                            <div className="row no-gutters align-items-center">
                                                <div className="col mr-2">
                                                    <div className="text-xs font-weight-bold text-info text-uppercase mb-1">Tasks
                                                    </div>
                                                    <div className="row no-gutters align-items-center">
                                                        <div className="col-auto">
                                                            <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">50%</div>
                                                        </div>
                                                        <div className="col">
                                                            <div className="progress progress-sm mr-2">
                                                                <div className="progress-bar bg-info" role="progressbar"
                                                                    style={{width:'50%'}} aria-valuenow="50" aria-valuemin="0"
                                                                    aria-valuemax="100"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-auto">
                                                    <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-6 mb-4">
                                    <div className="card border-left-warning shadow h-100 py-2">
                                        <div className="card-body">
                                            <div className="row no-gutters align-items-center">
                                                <div className="col mr-2">
                                                    <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                                                        Pending Requests</div>
                                                    <div className="h5 mb-0 font-weight-bold text-gray-800">18</div>
                                                </div>
                                                <div className="col-auto">
                                                    <i className="fas fa-comments fa-2x text-gray-300"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xl-8 col-lg-7">
                                    <div className="">
                                        <div className="">
                                        <div class="btn btn-success btn-icon-split">
                                        <span class="icon text-white-50">
                                            <i class="fas fa-check"></i>
                                        </span>
                                        <span  class="text">Add Room</span>
                                    </div>
                                        <div class="container">
                                        <div class="row justify-content-center">
                                        </div>

                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card shadow mb-4 mt-30">
                        <div class="card-header py-3">
                            <h6 class="m-0 font-weight-bold text-primary">Tables Of Orders</h6>
                        </div>
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>Email</th>
                                            <th>Phone</th>
                                            <th>Payment</th>
                                            <th>CheckIn</th>
                                            <th>CheckOut</th>
                                            <th>Total Price</th>
                                            <th>Create At</th>
                                            <th>Browser</th>
                                        </tr>
                                    </thead>
                                    <tfoot>
                                        {order.map((ord) => {
                                            return (
                                                <tr>
                                                    <td>{ord.email}</td>
                                                    <td>{ord.phone}</td>
                                                    <td>{renderPayment(ord.payment)}</td>
                                                    <td>{dateFormat(ord.checkIn, "mm/dd/yyyy")}</td>
                                                    <td>{dateFormat(ord.checkOut, "mm/dd/yyyy")}</td>
                                                    <td>{ord.totalPrice}</td>
                                                    <td>{dateFormat(ord.createAt, "mm/dd/yyyy")}</td>
                                                    <td>{renderOrderStatus(ord.status,ord.id)}</td>
                                                </tr>
                                            )
                                        })}
                                    </tfoot>
                                
                                </table>
                            </div>
                        </div>
                        <div class="card-header py-3">
                            <h6 class="m-0 font-weight-bold text-primary">Tables Of CheckIn & CheckOut</h6>
                        </div>
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>Email</th>
                                            <th>Phone</th>
                                            <th>Payment</th>
                                            <th>CheckIn</th>
                                            <th>CheckOut</th>
                                            <th>Total Price</th>
                                            <th>Create At</th>
                                            <th>Browser</th>
                                        </tr>
                                    </thead>
                                    <tfoot>
                                        {orderCheckIn.map((ord) => {
                                            return (
                                                <tr>
                                                    <td>{ord.email}</td>
                                                    <td>{ord.phone}</td>
                                                    <td>{renderPayment(ord.payment)}</td>
                                                    <td>{dateFormat(ord.checkIn, "mm/dd/yyyy")}</td>
                                                    <td>{dateFormat(ord.checkOut, "mm/dd/yyyy")}</td>
                                                    <td>{ord.totalPrice}</td>
                                                    <td>{dateFormat(ord.createAt, "mm/dd/yyyy")}</td>
                                                    <td>{renderCheckIn(ord.id,ord.isCheckIn)}</td>
                                                </tr>
                                            )
                                        })}
                                    </tfoot>
                                
                                </table>
                            </div>
                        </div>
                    </div>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-12">
                                  <div className="google-wrapper">
                                  <Iframe url={admin.mapdata}
                                        position="absolute"
                                        width="1640"
                                        id="myId"
                                        height="340"
                                        className="myClassname"
                                    />
                                  </div>
                              </div>
                    <footer className="sticky-footer bg-white">
                        <div className="container my-auto">
                            <div className="copyright text-center my-auto">
                                <span>Copyright &copy; Your Website 2021</span>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
            <a className="scroll-to-top rounded" href="#page-top">
                <i className="fas fa-angle-up"></i>
            </a>
            <div className="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                            <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">Select "Logout" below if you are ready to end your current session.</div>
                        <div className="modal-footer">
                            <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                            <a className="btn btn-primary" href="login.html">Logout</a>
                        </div>
                    </div>
                </div>
            </div>
            </body>
         
            </Fragment>
        )
    }
    function renderTableOrder(){
        if (!order) return (<h2>Loading............</h2>)
        return (
         order.map(ord => (
                <tr>
                    <td>{ord.email}</td>
                    <td>{ord.phone}</td>
                    <td>{renderPayment(ord.payment)}</td>
                    <td>{dateFormat(ord.checkIn, "mm/dd/yyyy")}</td>
                    <td>{dateFormat(ord.checkOut, "mm/dd/yyyy")}</td>
                    <td>{ord.totalPrice}</td>
                    <td>{dateFormat(ord.createAt, "mm/dd/yyyy")}</td>
                    <td>{renderOrderStatus(ord.status,ord.id)}</td>
                </tr>
     )))}
    function renderTableCheckIn (){
        if(!orderCheckIn) return(<h1>Loading.......................</h1>)
        return (
            orderCheckIn.map(ord => (
            
                    <tr>
                        <td>{ord.email}</td>
                        <td>{ord.phone}</td>
                        <td>{renderPayment(ord.payment)}</td>
                        <td>{dateFormat(ord.checkIn, "mm/dd/yyyy")}</td>
                        <td>{dateFormat(ord.checkOut, "mm/dd/yyyy")}</td>
                        <td>{ord.totalPrice}</td>
                        <td>{dateFormat(ord.createAt, "mm/dd/yyyy")}</td>
                        <td>{renderCheckIn(ord.id,ord.isCheckIn)}</td>
                    </tr>
                
            ))
        )
    }
    function renderSideBar(){
        if (!admin)  return (<ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">
        <a className="sidebar-brand d-flex align-items-center justify-content-center" href="index.html">
            <div className="sidebar-brand-icon rotate-n-15">
                <i className="fas fa-laugh-wink"></i>
            </div>
            <div className="sidebar-brand-text mx-3"><sup>9</sup></div>
        </a>
        <hr className="sidebar-divider my-0" />
        <NavLink to={`/ownerHotel`}>
        <li className="nav-item active-menu" >
            <a className="nav-link" href="index.html">
                <i className="fas fa-fw fa-tachometer-alt"></i>
                <span>Dashboard</span></a>
        </li>
        </NavLink>
        <NavLink to={`/ownerHotel/orders`}>
        <li className="nav-item">
            <a className="nav-link" href="charts.html">
                <i className="fas fa-fw fa-chart-area"></i>
                <span>Orders</span></a>
        </li>
        </NavLink>
    </ul>)
        return  (<SideBar id={id} admin={admin}></SideBar>)
        
    }

    return(
        <Fragment>
                
            <body id="page-top">
                <div id="wrapper">

                {renderSideBar()}
                
              
                <div id="content-wrapper" className="d-flex flex-column">
                    <div id="content">
                        <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
                            <button id="sidebarToggleTop" className="btn btn-link d-md-none rounded-circle mr-3">
                                <i className="fa fa-bars"></i>
                            </button>
                            <form
                                className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
                                <div className="input-group">
                                    <input type="text" className="form-control bg-light border-0 small" placeholder="Search for..."
                                        aria-label="Search" aria-describedby="basic-addon2" />
                                    <div className="input-group-append">
                                        <button className="btn btn-primary" type="button">
                                            <i className="fas fa-search fa-sm"></i>
                                        </button>
                                    </div>
                                </div>
                            </form>
                            <ul className="navbar-nav ml-auto">         
                                <li className="nav-item dropdown no-arrow d-sm-none">
                                    <a className="nav-link dropdown-toggle" href="#" id="searchDropdown" role="button"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="fas fa-search fa-fw"></i>
                                    </a>
                                    <div className="dropdown-menu dropdown-menu-right p-3 shadow animated--grow-in"
                                        aria-labelledby="searchDropdown">
                                        <form className="form-inline mr-auto w-100 navbar-search">
                                            <div className="input-group">
                                                <input type="text" className="form-control bg-light border-0 small"
                                                    placeholder="Search for..." aria-label="Search"
                                                    aria-describedby="basic-addon2" />
                                                <div className="input-group-append">
                                                    <button className="btn btn-primary" type="button">
                                                        <i className="fas fa-search fa-sm"></i>
                                                    </button>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </li>
                                <li className="nav-item dropdown no-arrow mx-1">
                                    <a className="nav-link dropdown-toggle" href="#" id="alertsDropdown" role="button"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="fas fa-bell fa-fw"></i>
                                        <span className="badge badge-danger badge-counter">3+</span>
                                    </a>
                            
                                    <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                        aria-labelledby="alertsDropdown">
                                        <h6 className="dropdown-header">
                                            Alerts Center
                                        </h6>
                                        <a className="dropdown-item d-flex align-items-center" href="#">
                                            <div className="mr-3">
                                                <div className="icon-circle bg-primary">
                                                    <i className="fas fa-file-alt text-white"></i>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="small text-gray-500">December 12, 2019</div>
                                                <span className="font-weight-bold">A new monthly report is ready to download!</span>
                                            </div>
                                        </a>
                                        <a className="dropdown-item d-flex align-items-center" href="#">
                                            <div className="mr-3">
                                                <div className="icon-circle bg-success">
                                                    <i className="fas fa-donate text-white"></i>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="small text-gray-500">December 7, 2019</div>
                                                $290.29 has been deposited into your account!
                                            </div>
                                        </a>
                                        <a className="dropdown-item d-flex align-items-center" href="#">
                                            <div className="mr-3">
                                                <div className="icon-circle bg-warning">
                                                    <i className="fas fa-exclamation-triangle text-white"></i>
                                                </div>
                                            </div>
                                            <div>
                                                <div className="small text-gray-500">December 2, 2019</div>
                                                Spending Alert: We've noticed unusually high spending for your account.
                                            </div>
                                        </a>
                                        <a className="dropdown-item text-center small text-gray-500" href="#">Show All Alerts</a>
                                    </div>
                                </li>
                                <li className="nav-item dropdown no-arrow mx-1">
                                    <a className="nav-link dropdown-toggle" href="#" id="messagesDropdown" role="button"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <i className="fas fa-envelope fa-fw"></i>
                                        <span className="badge badge-danger badge-counter">7</span>
                                    </a>
                                    <div className="dropdown-list dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                        aria-labelledby="messagesDropdown">
                                        <h6 className="dropdown-header">
                                            Message Center
                                        </h6>
                                        <a className="dropdown-item d-flex align-items-center" href="#">
                                            <div className="dropdown-list-image mr-3">
                                                <img className="rounded-circle" src="img/undraw_profile_1.svg"
                                                    alt="..." />
                                                <div className="status-indicator bg-success"></div>
                                            </div>
                                            <div className="font-weight-bold">
                                                <div className="text-truncate">Hi there! I am wondering if you can help me with a
                                                    problem I've been having.</div>
                                                <div className="small text-gray-500">Emily Fowler · 58m</div>
                                            </div>
                                        </a>
                                        <a className="dropdown-item d-flex align-items-center" href="#">
                                            <div className="dropdown-list-image mr-3">
                                                <img className="rounded-circle" src="img/undraw_profile_2.svg"
                                                    alt="..." />
                                                <div className="status-indicator"></div>
                                            </div>
                                            <div>
                                                <div className="text-truncate">I have the photos that you ordered last month, how
                                                    would you like them sent to you?</div>
                                                <div className="small text-gray-500">Jae Chun · 1d</div>
                                            </div>
                                        </a>
                                        <a className="dropdown-item d-flex align-items-center" href="#">
                                            <div className="dropdown-list-image mr-3">
                                                <img className="rounded-circle" src="img/undraw_profile_3.svg"alt="..." />
                                                <div className="status-indicator bg-warning"></div>
                                            </div>
                                            <div>
                                                <div className="text-truncate">Last month's report looks great, I am very happy with
                                                    the progress so far, keep up the good work!</div>
                                                <div className="small text-gray-500">Morgan Alvarez · 2d</div>
                                            </div>
                                        </a>
                                        <a className="dropdown-item d-flex align-items-center" href="#">
                                            <div className="dropdown-list-image mr-3">
                                                <img className="rounded-circle" src="https://source.unsplash.com/Mv9hjnEUHR4/60x60"
                                                    alt="..." />
                                                <div className="status-indicator bg-success"></div>
                                            </div>
                                            <div>
                                                <div className="text-truncate">Am I a good boy? The reason I ask is because someone
                                                    told me that people say this to all dogs, even if they aren't good...</div>
                                                <div className="small text-gray-500">Chicken the Dog · 2w</div>
                                            </div>
                                        </a>
                                        <a className="dropdown-item text-center small text-gray-500" href="#">Read More Messages</a>
                                    </div>
                                </li>
            
                                <div className="topbar-divider d-none d-sm-block"></div>
                                <li className="nav-item dropdown no-arrow">
                                    <a className="nav-link dropdown-toggle" href="#" id="userDropdown" role="button"
                                        data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                        <span className="mr-2 d-none d-lg-inline text-gray-600 small">Douglas McGee</span>
                                        <img className="img-profile rounded-circle"
                                            src="img/undraw_profile.svg" />
                                    </a>
            
                                    <div className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
                                        aria-labelledby="userDropdown">
                                        <a className="dropdown-item" href="#">
                                            <i className="fas fa-user fa-sm fa-fw mr-2 text-gray-400"></i>
                                            Profile
                                        </a>
                                        <a className="dropdown-item" href="#">
                                            <i className="fas fa-cogs fa-sm fa-fw mr-2 text-gray-400"></i>
                                            Settings
                                        </a>
                                        <a className="dropdown-item" href="#">
                                            <i className="fas fa-list fa-sm fa-fw mr-2 text-gray-400"></i>
                                            Activity Log
                                        </a>
                                        <div className="dropdown-divider"></div>
                                        <a className="dropdown-item" href="#" data-toggle="modal" data-target="#logoutModal">
                                            <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                                            Logout
                                        </a>
                                    </div>
                                </li>
                            </ul>
                        </nav>
                        <div className="container-fluid">
                            <div className="d-sm-flex align-items-center justify-content-between mb-4">
                                <h1 className="h3 mb-0 text-gray-800">Dashboard</h1>
                                <Link to="/restaurant" className="d-none d-sm-inline-block btn btn-sm btn-primary shadow-sm"><i
                                        className="fas fa-download fa-sm text-white-50"></i>Trở Về Trang Chủ</Link>
                            </div>
                            <div className="row">
                                <div className="col-xl-3 col-md-6 mb-4">
                                    <div className="card border-left-primary shadow h-100 py-2">
                                        <div className="card-body">
                                            <div className="row no-gutters align-items-center">
                                                <div className="col mr-2">
                                                    <div className="text-xs font-weight-bold text-primary text-uppercase mb-1">
                                                        Tổng Số Món Ăn</div>
                                                    <div className="h5 mb-0 font-weight-bold text-gray-800"></div>
                                                </div>
                                                <div className="col-auto">
                                                    <i className="fas fa-calendar fa-2x text-gray-300"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-6 mb-4">
                                    <div className="card border-left-success shadow h-100 py-2">
                                        <div className="card-body">
                                            <div className="row no-gutters align-items-center">
                                                <div className="col mr-2">
                                                    <div className="text-xs font-weight-bold text-success text-uppercase mb-1">
                                                        Earnings (Annual)</div>
                                                    <div className="h5 mb-0 font-weight-bold text-gray-800">$215,000</div>
                                                </div>
                                                <div className="col-auto">
                                                    <i className="fas fa-dollar-sign fa-2x text-gray-300"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-6 mb-4">
                                    <div className="card border-left-info shadow h-100 py-2">
                                        <div className="card-body">
                                            <div className="row no-gutters align-items-center">
                                                <div className="col mr-2">
                                                    <div className="text-xs font-weight-bold text-info text-uppercase mb-1">Tasks
                                                    </div>
                                                    <div className="row no-gutters align-items-center">
                                                        <div className="col-auto">
                                                            <div className="h5 mb-0 mr-3 font-weight-bold text-gray-800">50%</div>
                                                        </div>
                                                        <div className="col">
                                                            <div className="progress progress-sm mr-2">
                                                                <div className="progress-bar bg-info" role="progressbar"
                                                                    style={{width:'50%'}} aria-valuenow="50" aria-valuemin="0"
                                                                    aria-valuemax="100"></div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="col-auto">
                                                    <i className="fas fa-clipboard-list fa-2x text-gray-300"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-xl-3 col-md-6 mb-4">
                                    <div className="card border-left-warning shadow h-100 py-2">
                                        <div className="card-body">
                                            <div className="row no-gutters align-items-center">
                                                <div className="col mr-2">
                                                    <div className="text-xs font-weight-bold text-warning text-uppercase mb-1">
                                                        Pending Requests</div>
                                                    <div className="h5 mb-0 font-weight-bold text-gray-800">18</div>
                                                </div>
                                                <div className="col-auto">
                                                    <i className="fas fa-comments fa-2x text-gray-300"></i>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                                <div className="col-xl-8 col-lg-7">
                                    <div className="">
                                        <div className="">
                                        <div class="btn btn-success btn-icon-split">
                                        <span class="icon text-white-50">
                                            <i class="fas fa-check"></i>
                                        </span>
                                        <span  class="text">Add Room</span>
                                    </div>
                                        <div class="container">
                                        <div class="row justify-content-center">
                                        </div>

                                        </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div class="card shadow mb-4 mt-30">
                        <div class="card-header py-3">
                            <h6 class="m-0 font-weight-bold text-primary">Tables Of Orders</h6>
                        </div>
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>Email</th>
                                            <th>Phone</th>
                                            <th>Payment</th>
                                            <th>CheckIn</th>
                                            <th>CheckOut</th>
                                            <th>Total Price</th>
                                            <th>Create At</th>
                                            <th>Browser</th>
                                        </tr>
                                    </thead>
                                    <tfoot>
                                      {renderTableOrder()}
                                    </tfoot>
                                
                                </table>
                            </div>
                        </div>
                        <div class="card-header py-3">
                            <h6 class="m-0 font-weight-bold text-primary">Tables Of CheckIn & CheckOut</h6>
                        </div>
                        <div class="card-body">
                            <div class="table-responsive">
                                <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                    <thead>
                                        <tr>
                                            <th>Email</th>
                                            <th>Phone</th>
                                            <th>Payment</th>
                                            <th>CheckIn</th>
                                            <th>CheckOut</th>
                                            <th>Total Price</th>
                                            <th>Create At</th>
                                            <th>Browser</th>
                                        </tr>
                                    </thead>
                                    <tfoot>
                                       {renderTableCheckIn()}
                                    </tfoot>
                                
                                </table>
                            </div>
                        </div>
                    </div>
                        </div>
                    </div>
                    <div className="col-md-12 col-lg-12">
                                  {/* <div className="google-wrapper">
                                  <Iframe url={admin.mapdata}
                                        position="absolute"
                                        width="1640"
                                        id="myId"
                                        height="340"
                                        className="myClassname"
                                    />
                                  </div> */}
                              </div>
                    <footer className="sticky-footer bg-white">
                        <div className="container my-auto">
                            <div className="copyright text-center my-auto">
                                <span>Copyright &copy; Your Website 2021</span>
                            </div>
                        </div>
                    </footer>
                </div>
            </div>
            <a className="scroll-to-top rounded" href="#page-top">
                <i className="fas fa-angle-up"></i>
            </a>
            <div className="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
                aria-hidden="true">
                <div className="modal-dialog" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Ready to Leave?</h5>
                            <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                        </div>
                        <div className="modal-body">Select "Logout" below if you are ready to end your current session.</div>
                        <div className="modal-footer">
                            <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancel</button>
                            <a className="btn btn-primary" href="login.html">Logout</a>
                        </div>
                    </div>
                </div>
            </div>
            </body>
         
            </Fragment>
)
}
export default AdminHotelPageOrder;