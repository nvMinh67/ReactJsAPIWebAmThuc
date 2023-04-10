import React,{Fragment} from "react";


const Heroes =()=>{

    return(
        <Fragment>
       <div className="home_banner-explore">
            <div className="home_banner-explore-container">
                <div className="image-bg" style={{
                    backgroundImage: "url(" + "../image/banner.jpg" + ")",
                }} >
                </div>
                <div className="home_banner-explore-content">
                    <div className="home_restaurant-masthead">
                        <div className="home_restaurant-masthead-container">
                            <div className="row">
                                <div className="col col-12 col-xl-5">
                                    <h4 className="home_restaurant-masthead-text">
                                        Find your next great culinary experience with the MICHELIN Guide
                                    </h4>
                                </div>
                            </div>
                            <div className="home_restaurant-search">
                                <div className="home_banner-explore">
                                    <div className="row no-gutters">
                                        <div className="col col-12 col-xl-5">
                                            <div className="home_banner-explore-tab">
                                                <div className="tab-container">
                                                    <div className="tab-contents">
                                                        <div className="tab-container-content">
                                                            <div className="tab-container-content-restaurant">
                                                                <form action="">
                                                                    <div className="flex-fill search-explore">
                                                                        <span className="search-hotelswrap-close">
                                                                            <i></i>
                                                                        </span>
                                                                        <div className="typehead-field">
                                                                            <div className="search-explore-item">
                                                                                <i className="fa-solid fa-magnifying-glass"></i>
                                                                                <input type="text" placeholder="Search Form Destination , Restaurant...." className="search-explore-item-input form-control1"/>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </form>
                                                            </div>
                                                            <div className="search-explore-result">
                                                                <div className="input-search input-group">
                                                                    <div className="typeahead-container flex-fill">
                                                                        <div className="typeahead-result d-block">
                                                                            <div className="typeahead-list position-relative">
                                                                                <span className="aa-drop-dowm-menu" 
                                                                                style={{  
                                                                                 
                                                                                    display: 'block',
                                                                                    top: '0',
                                                                                    left:'0',
                                                                                    right:'auto',
                                                                                   
                                                                                  }}>
                                                                                    <div className="aa-data-set-1">
                                                                                        <div className="typeahead-group">
                                                                                            <a>
                                                                                                <div className="typeahead-group-heading">
                                                                                                    <i className="typeahead-group-icon fa-light fa-location-dot"></i>
                                                                                                    <h6 className="typeahead-item-title">
                                                                                                        Locations
                                                                                                    </h6>
                                                                                                </div>
                                                                                            </a>
                                                                                        </div>
                                                                                        <span className="aa-suggestions">
                                                                                            <div className="aa-suggestion">
                                                                                                <div className="typeahead-item">
                                                                                                    <a href="">
                                                                                                        <div className="typeahead">
                                                                                                            <div className="typeahead-item-title-container">
                                                                                                                <h6 className="typeahead-item-title">

                                                                                                                </h6>
                                                                                                            </div>
                                                                                                            <div className="typeahead-item-location">
                                                                                                                see all
                                                                                                            </div>
                                                                                                        </div>
                                                                                                    </a>
                                                                                                </div>
                                                                                            </div>
                                                                                        </span>
                                                                                    </div>
                                                                                </span>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="home_banner-explore-footer">
                        <div className="home_banner-explore-footer-restaurants">
                            <a href="">
                                <span className="distinction-icon rest-badgeicon">
                                    {/* <img src="/assets/image/1star-1f2c04d7e6738e8a3312c9cda4b64fd0.svg" alt="" className="michelin-award"> */}
                                </span>
                                <p className="home_banner-explore-footer-country">
                                    clover Hill
                                </p>
                                <p className="home_banner-explore-footer-address">
                                    New York,USA
                                </p>
                                <p className="home_banner-explore-footer-copy">
                                    @sign clover hill
                                </p>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <section className="section-search section-search-restaurant d-block d-lg-none" style={{marginTop:'24px'}}>
            <h1 className="section-search-label">
                Restaurant
            </h1>
            <form action="">
                <form action="">
                 <div className="row no-gutters">
                    {/* <div className="col-12"> */}
                    <input 
                    style={{
                        padding:'10px',
                        borderRadius:'3px'
                    }} type="text" id="name" name="name" required
                    minlength="4" maxlength="8" size="10"/>
                 </div>

                   
                    
                  <div className="typeahead-container flex-fill search-explore">
                        <span className="search-hotelswrap-close">
                        </span>
                        <div className="typeahead-field">
                            <div className="search-explore-item">
                                <input type="hidden" name=""/>
                                <div className="form-control search-explore-item-input">
                                    <div className="aa-Autocomplete">
                                        <form action="" className="aa-form">
                                            <div className="input-wrapperPrefix">
                                                <label for="" className="aa-label">
                                                    <button className="aa-submitbutton">

                                                    </button>

                                                </label>
                                                <div className="aa-loadingIncator">

                                                </div>
                                                <div className="aa-input-wrapper">
                                                    <input type="text" className="aa-input"/>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
            </form>
            <div className="home_restaurant-search">
                <div className="home_banner-explore">
                    <div className="row no-gutters">
                        <div className="col col-12 col-xl-5">
                            <form action="">
                               

                                <input type="text" id="name" name="name" required
                                       minlength="4" maxlength="8" size="10"/>
                                
                                <div className="typeahead-container flex-fill search-explore">
                                    <span className="search-hotelswrap-close">
                                    </span>
                                    <div className="typeahead-field">
                                        <div className="search-explore-item">
                                            <input type="hidden" name=""/>
                                            <div className="form-control search-explore-item-input">
                                                <div className="aa-Autocomplete">
                                                    <form action="" className="aa-form">
                                                        <div className="input-wrapperPrefix">
                                                            <label for="" className="aa-label">
                                                                <button className="aa-submitbutton">

                                                                </button>

                                                            </label>
                                                            <div className="aa-loadingIncator">

                                                            </div>
                                                            <div className="aa-input-wrapper">
                                                                <input type="text" className="aa-input"/>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div> 
                            </form>
                            <div className="home_banner-explore-tab">
                                <div className="tab-container">
                                    <div className="tab-content">
                                        <div className="tab-container-content">
                                            <div className="tab-container-content-restaurant">
                                                <form action="">
                                                    <label for="name">Name (4 to 8 characters):</label>

                                                    <input type="text" id="name" name="name" required
                                                           minlength="4" maxlength="8" size="10"/>
                                                    
                                                     <div className="typeahead-container flex-fill search-explore">
                                                        <span className="search-hotelswrap-close">
                                                        </span>
                                                        <div className="typeahead-field">
                                                            <div className="search-explore-item">
                                                                <input type="hidden" name=""/>
                                                                <div className="form-control search-explore-item-input">
                                                                    <div className="aa-Autocomplete">
                                                                        <form action="" className="aa-form">
                                                                            <div className="input-wrapperPrefix">
                                                                                <label for="" className="aa-label">
                                                                                    <button className="aa-submitbutton">
    
                                                                                    </button>

                                                                                </label>
                                                                                <div className="aa-loadingIncator">

                                                                                </div>
                                                                                <div className="aa-input-wrapper">
                                                                                    <input type="text" className="aa-input"/>
                                                                                </div>
                                                                            </div>
                                                                        </form>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div> 
                                                </form>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        
        </Fragment>
        );
        };

       

 


export default Heroes;