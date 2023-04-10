import React,{Fragment, useState} from "react";
import Iframe from 'react-iframe'
import {FaHotel,FaUtensils,FaHeart,FaNewspaper,FaUser,FaBars,FaRegWindowClose, FaWindowClose,FaSearch, FaClosedCaptioning}  from 'react-icons/fa'
const Search =({restaurant})=>{

    const [filterdata,setfilterdata] = useState([]);
    const [wordIntered,setwordIntered] = useState("");
    const handlefilter =(event)=>{
        const searchword = event.target.value;

        setwordIntered(searchword);
        const newfilter = restaurant.filter(value=>{
            return value.name.toLowerCase().includes(searchword.toLowerCase());
            
        });
        if(searchword ===""){
            setfilterdata([]);
        }else{
            setfilterdata(newfilter)
        }
    }
   const clearInput=()=>{
        setfilterdata([]);
        setwordIntered("");
    }
  
    function renderdata(){
            if(restaurant){
                return(
                   
                        <>
                                                                                     <div className="search-explore-result" >
                        <div className="input-group input-search">
                            <div className="typeahead-container flex-fill">
                                <div className="typeahead-result">
                                    <div className="typeahead-list">
                                        <div className="aa-anel">
                                            <div className="aa-panel-layout">
                                                <section className="aa-source">
                                                    <div className="aa-source-header">
                                                        <div className="typeahead-group">
                                                            <a >
                                                                <div className="typeahead-group-heading">
                                                                    <img src="../image/hotel-icon.svg" className="typeahead-group-icon" alt=""/>
                                                                    <h6 className="typeahead-item-title">
                                                                        hotels
                                                                    </h6>
                                                                </div>
                                                            </a>
                                                        </div>
                                                    </div>
                                                    <ul className="aa-list">
                                                   { filterdata.map(res =>(
                                                    <li className="aa-item" key={res.id.value}>
                                                         <div className="typeahead-item">
                                                             <a href="">
                                                                 <div className="typeahead">
                                                                     <div className="typeahead-title-container">
                                                                         <h6 className="typeahead-item-title">{res.name}</h6>
                                                                     </div>
                                                                     <div className="typeahead-title-container">
                                                                         <div className="typeahead-sub-title-container">
                                                                             <div className="typeahead-item-sub-title">
                                                                                 tokyo,japan
                                                                             </div>
                                                                         </div>
                                                                     </div>
                                                                 </div>
                                                             </a>
                                                         </div>
                                                     </li>))}
                                              
                                                    </ul>
                                                </section>
                                            </div>
                                            <div className="aa-gradient-button">
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                   
                 </>
                    
                     
                    
                 
                   

           
                   
                  
    
             
            )
    
            }
            else{
                return(
                 
                    <Fragment>
                    <h1>Loading</h1>
                </Fragment>
                    
               
                )
                    
              
            }
            
        }
    
  
 
 if(restaurant === undefined) return null;
return(
    <Fragment>
         <div  className="section-search section-search-hotel section-search-hotel-list with-filters mt-60">
            <h1 className="section-search-label d-block d-lg-none">Hotels</h1>
            <div className="home-hotel-stack">
                <div className="home_banner-explore">
                    <div className="home_banner-explore-tab">
                        <form action="" method="get">
                            <div className="tab-container">
                                <div className="tab-container-content noshadow"  style={{padding:'0'}}>
                                    <p className="d-none error">please select destination/please select travel dates</p>
                                        <p className="d-none error">you can not book more than 31 days</p>
                                        <div className="tab-container-content-hotel">
                                        <div className="destination-explore">
                                            <div className="row destination-explore-preview">
                                                <div className="col col-12 d-lg-none">
                                                    <div className="tab-container-content-restaurant">
                                                        <div className="search-explore">
                                                            <div className="search-explore-item">
                                                                <i className="fa-solid fa-magnifying-glass"></i>
                                                                <input type="text" placeholder="Destination/Hotels" className="search-explore-item-input search-explore-input-inline"/>
                                                                <input type="text" placeholder="Arriving/leaving" className="search-explore-item-input search-explore-input-inline"/>
                                                                <div className="search-explore-item-usercounted">
                                                                    <span>
                                                                        <i className="fa-solid fa-user icon"></i>
                                                                    </span>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div className="destination-explore-group mt-20">
                                                    <div className="row">
                                                        <div className="col col-12 col-md-4">
                                                            <div className="destination-explore-form">
                                                                <span className="search-hotelswrap-close">
                                                              
                                                                </span>
                                                                <div className="destination-explore-item destination-explore-item-left">
                                                                    <div className="destination-explore-item-label">
                                                                        where to ?
                                                                    </div>
                                                                    <div className="destination-explore-item-input">
                                                                        <div className="aa-autocomplete">
                                                                            <form action="" className="aa-form" role="search">
                                                                                <div className="aa-input-wrapperprefix">

                                                                                </div>
                                                                                <div className="aa-input-wrapper">
                                                                              
                                                                                    <i className="typeahead-cancel-button icon">{filterdata.length===0 ?<FaSearch/>:<FaWindowClose onClick={clearInput}/>}</i>
                                                                                    <input value={wordIntered} onChange={handlefilter}  style={{border:'0'}} type="text" className="aa-input"/>
                                                                                
                                                                                </div>
                                                                            </form>
                                                                        </div>
                                                                    </div>
                                                                    <input type="hidden" name=""/>
                                                                </div>
                                                                {
                                                    filterdata.length != 0 &&(
                                                        renderdata()

                                                    )
                                                   }
                                                       
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
            <div className="filter-bar" style={{top:'auto',padding:'0 0 10px 0'}}>
                <div className="filter-bar-content d-flex">
                    <div className="flex-fill d-block d-lg-none">
                        <div className="filter-bar-content d-flex">
                            <div className="flex-fill d-block d-lg-none">
                                <div className="filter-bar-mobile pd-10">
                                    <div className="filter-bar-mobile-menu">
                                        <div className="filter-list">
                                            <div className="filter-list-left">
                                                <button className="btn btn-sm btn-black-border btn-round">
                                                    <img src="/assets/image/filterbar.svg" alt="" className="image-icon"/>
                                                </button>
                                            </div>
                                            <div className="filter-list-right">
                                                <a href="" className="btn btn-sm btn-black-border btn-round">
                                                    <img src="/assets/image/map.svg" alt="" className="image-icon"/>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex-fill d-none d-lg-flex">
                        <div className="filter-bar-container">
                            <button className="btn btn-sm btn-black-border btn-round">
                                <img src="/assets/image/filterbar.svg" alt="" className="image-icon"/>
                            </button>
                        </div>
                    </div>
                    <div className="d-none d-lg-flex flex-grow-1 justify-content-end">
                        <div className="custom-switch-desktop">
                            <a href="" className="btn btn-sm btn-black-border btn-round">
                                <img src="/assets/image/map.svg" alt="" className="image-icon"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>

   )
                                                }

export default Search;