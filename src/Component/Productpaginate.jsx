import React, { useEffect, useState,useContext, Fragment} from 'react';

import ReactPaginate from 'react-paginate';
import { Link } from 'react-router-dom';


const  Productpaginate=(props)=>{

   const [currentItems,setcurrentItems] = useState([]);
   const [pageCount,setPageCount] = useState(0);
   const [itemOffset,setitemoffset] = useState(0);
   const itemsPerPage = 4;
   

 
   useEffect(()=>{
    const endOffset = itemOffset + itemsPerPage;
    setcurrentItems(props.restaurants.slice(itemOffset,endOffset));
    setPageCount(Math.ceil(props.restaurants.length / itemsPerPage));

   },[itemOffset,itemsPerPage,props.restaurants]);

   const handlePageClick = (event)=>{
    const newOffset = (event.selected * itemsPerPage) % props.restaurants.length;
    setitemoffset(newOffset);

   }

    function Items({ currentItems }) {
        return (
        <>
            {currentItems &&
            currentItems.map((item) => (
                <div>
                <h3>Item #{item}</h3>
                </div>
            ))}
        </>
        );
    }
    
    return (
 
        <Fragment>

           <section className="section-main search-results mt-60">
                <div className="row">
                    <div className="search-results-column col-lg-12">
                        <div className="search-results-count">
                            <div className="align-item-end search-results-status">
                                <div className="flex-fill search-results-stats">
                                    <h1><span className="color-primary">
                                    {itemOffset +4}
                                    </span>
                                        of ,{props.restaurants.length} Dishes
                                </h1>
                                </div>
                                <div className="btn-carousel hide-not-dekstop">
                                    <a href="" className="btn btn-outline-secondary btn-sm btn-carousel-link">
                                        <i className="fa-solid fa-chevron-right icon"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="row restaurant-list-row">
                            {
                                currentItems.map(item => (
                                    <div className="col-md-6 col-lg4 col-xl-3" key={item.id}>
                                    <div className="item item-menu">
                                        <div className="card-menu">
                                            <div className="card-menu-image w3-animate-zoom image-wrapper">
                                                <img src={`https://localhost:7276/${item.image[0]}`} alt="" className="pl-imagelayzy"/>
                                            </div>
                                            <div className="card-menu-content">
                                                <div className="card-menu-content-rating d-flex">
                                                    <span className="distinction-icon">
                                                        <img src="assets/image/bib-gourmand.svg" alt="" className="michelin-award"/>
                                                    </span>
                                                </div>
                                                <h3 className="card-menu-content-title">
                                                    <a href="">{item.name}</a>
                                                </h3>
                                                <div className="card-menu-footer-location flex-fill">
                                                    VietNamese
                                                </div>
                                                <div className="card-menu-footer-price">
                                                    $$$
                                                </div>
                                            </div>
                                            <div className="card-menu-footer d-flex">
                                                <div className="card-menu-like">
                                                    <img src="/assets/image/love-off-58dca5751a8ad8f50468df25d762b097.svg" alt="" className="love-this pl-image"/>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                ))
                            }
                           
                          
                        </div>
                    </div>
                </div>
            </section>
            <div className="search-results-btn-carousel-wrapper search-results-btn-carousel-pagination">
            <ReactPaginate 
                breakLabel="..."
                nextLabel="next>"
                onPageChange={handlePageClick}
                pageRangeDisplayed={6}
                pageCount={pageCount}
                previousLabel="<previous"
                renderOnZeroPageCount={null}
                containerClassName="search-results-btn-carousel-pagination pagination"
                pageLinkClassName='btn btn-outline-secondary btn-sm'
                activeLinkClassName='active'
                previousLinkClassName='btn btn-outline-secondary btn-sm'
                nextLinkClassName='btn btn-outline-secondary btn-sm'
         
                />

            </div>
        </Fragment>

           


        
    
   
    
      
        );
    };
    export default Productpaginate;