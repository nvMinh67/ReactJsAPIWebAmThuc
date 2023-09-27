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
    const AdminHotelPage=()=>{
        const {id} = useParams();
        const [admin, setAdmin] = useState();
        const [typeRoom,setTypeRoom]= useState();
        const [openModelAddDish,setOpenModalAddDish] = useState(false);
        const [openModelEditRoom,setOpenModalEditRoom] = useState(false);
        const [openModelEditDish,setOpenModalEditDish] = useState(false);
    
        const [idproduct,setIdProduct] = useState();
        const [addProdudct,setAddProduct] = useState(false);
        const [statusDelete,setStatusDelete] = useState(false);
        useEffect(() => {
        const fetchProductList = async () => {
            try {
            const response = await productApi.getHotelInfor(id);
            const typeRoom = await productApi.getTypeRoom();
            setAdmin(response);
            setTypeRoom(typeRoom);
            } catch (error) {
            console.log('Failed to fetch product list: ', error);
            }
        }
        fetchProductList();
        },[openModelAddDish,statusDelete,openModelEditRoom]);
       
      
        
        const handleEdit =(e)=>{
            setOpenModalEditRoom(true);
            setIdProduct(e.target.value);
        }
        const handleDelete =(e)=>{
            Swal.fire({
                title: 'Are you sure?',
                text: "You won't be able to revert this!",
                icon: 'warning',
                showCancelButton: true,
                confirmButtonColor: '#3085d6',
                cancelButtonColor: '#d33',
                confirmButtonText: 'Yes, delete it!'
              }).then((result) => {
                if (result.isConfirmed) {
                    fetch(`https://localhost:7276/api/Room/id?id=${e.target.value}`,{
                        mode: "cors",
                        method: "Delete",
                        headers: {
                            Accept: "application/json",
                        },
                    }).then()
                    .then(data=>setStatusDelete(true))
                    .catch(err => console.log(err));
                    setStatusDelete(false);
                  Swal.fire(
                    'Deleted!',
                    'Your file has been deleted.',
                    'success'
                  )
                }
              })
        }
        function status (value){
            if (!value) return (<h6>Available</h6>)
            return (<h6>UnAvailable</h6>)
        }
        function rendertable (){
            admin.roomdetails.map((room) =>{
                return (
                    <h1>test {room.name}</h1>
                )
            })
        }

        function renderlayout(){
            if(!admin && !typeRoom)
            return(
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
                                            <span onClick={()=>setOpenModalAddDish(true)} class="text">Add Room</span>
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
                                <h6 class="m-0 font-weight-bold text-primary">DataTables Example</h6>
                            </div>
                            <div class="card-body">
                                <div class="table-responsive">
                                    <table class="table table-bordered" id="dataTable" width="100%" cellspacing="0">
                                        <thead>
                                            <tr>
                                                <th>Name</th>
                                                <th>Price</th>
                                                <th>Image</th>
                                                <th>Status</th>
                                                <th>Edit</th>
                                                <th>Delete</th>
                                            </tr>
                                        </thead>
                                        <tfoot>
                                            {admin.roomdetails.map((dish)=>{
                                                return (
                                                    <tr>
                                                    <td>{dish.name}</td>
                                                    <td>{dish.price}</td>
                                                    <td >
                                                        <button className="btn btn-primary">{dish.image.length}</button></td>
                                                    <td>{status(dish.isActived)}</td>
                                                    <td> 

                                                    <button onClick={handleEdit} value={dish.room1.id} className="btn btn-primary">
                                                    Edit
                                                    </button>
                                                  {/* <button  required readOnly  onClick={handleEdit} value={admin.id} placeholder="Edit" />  */}
                                                    </td>
                                                    <td>  <button onClick={handleDelete} value={dish.room1.id} className="btn btn-danger">
                                                    Delete
                                                    </button></td>
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
                <ModalEditRoom idProduct={idproduct} open={openModelEditRoom} onclose={()=>setOpenModalEditRoom(false)}/>
                <ModalAddRoom id_hotel={admin.roomdetails[0].id_Hotels} id={id} typeRoom={typeRoom} open={openModelAddDish} onclose={()=>setOpenModalAddDish(false)} addProdudct={addProdudct} setAddProduct={()=>setAddProduct(true)}/>
                </Fragment>
            )
        }
        return(
            renderlayout()
    )
    }
    export default AdminHotelPage;