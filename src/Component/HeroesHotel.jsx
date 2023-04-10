import React, { Fragment, useState } from "react";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { LocalizationProvider } from '@mui/x-date-pickers-pro';
import { AdapterDayjs } from '@mui/x-date-pickers-pro/AdapterDayjs';
import { DateRangePicker } from '@mui/x-date-pickers-pro/DateRangePicker';


const HeroesHotel = () => {
const [date,setdate] =useState();
const [dateCheckIn,setDateCheckIn] = useState();




// console.log(dateCheckIn);
  return (
    <Fragment>
      <div className="home_banner-explore home-explore-hero">
        <div className="home_banner-explore-container">
          <div
            className="image-bg lazy entered loaded adjusted"
            style={{ backgroundImage: "url(" + "../image/hotel.jpg" + ")" }}
          ></div>
        </div>
        <div className="home_banner-explore-content-container">
          <div className="home_banner-explore-content">
            <div className="home_restaurant-masthead">
              <div className="home_restaurant-masthead-container">
                <div className="row">
                  <div className="col col-12 col-xl-7">
                    <div className="home_banner-explore-tab">
                      <h4 className="home-hotel-masthead-text">
                        Book the world's most exciting hotels, as selected by
                        the MICHELIN Guide
                      </h4>
                      <div className="tab-container">
                        <div className="tab-content">
                          <form action="">
                            <div className="tab-container-content">
                              <p className="d-none error">
                                Please select destination / Please select travel
                                dates
                              </p>
                              <p className="d-none error">
                                You cannot book more than 31 days
                              </p>
                              <div className="tab-container-content-hotel">
                                <div className="destination-explore">
                                  <span className="search-hotelswrap-close"></span>
                                  <div className="destination-explore-item">
                                    <div className="destination-explore-item-label">
                                      where to ?<i></i>
                                      <input
                                        type="text"
                                        className="form-control destination-explore-item-input"
                                      />
                                    </div>
                                  </div>
                                </div>
                                <div className="search-explore-result">
                                  <div className="input-group input-search">
                                    <div className="typehead-container flex-fill">
                                      <div className="typehead-result">
                                        <div className="typehead-list">
                                          <span className="aa-dropdowm-menu">
                                            <div className="aa-dataset-1"></div>
                                          </span>
                                          <div className="typehead-link typehead-link-empty">
                                            <a href=""></a>
                                            <i className="icon"></i>
                                            {/* <strong>find hotel near me</strong> */}
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  </div>
                                </div>
                                <div className="tab-container-content-hotel">
                                  <div className="destination-explore">
                                    <div className="row">
                                      <input type="hidden" />
                                      <input type="hidden" />
                                      <div className="col col-12 col-md-5 col-date">
                                        <div className="destination-explore-form destiantion-explore-form-date">
                                          <div className="destination-explore-item">
                                            <div className="destination-explore-item-label">
                                              Stay Date
                                            </div>
                                            <input type="hidden" name="" />
                                            <input type="hidden" name="" />
                                            {/* <input
                                              className="destination-explore-item-input"
                                              type="text"
                                              name=""
                                              id=""
                                              placeholder="Arriving-leaving"
                                            /> */}
                                            <LocalizationProvider className="destination-explore-item-input"dateAdapter={AdapterDayjs}>
                                                   <div className="" style={{height:'1.6rem'}}>
                                                   <DemoContainer sx={{padding:'2px 2px'}} style={{padding:'2px'}}  components={['DateRangePicker']}>
                                                         <DateRangePicker onChange={e=>setdate(e)}/>
                                                       </DemoContainer>
                                                   </div>
                                               </LocalizationProvider>
                                          </div>
                                         
                                        </div>
                                       
                                      </div>
                                      <div className="col col-auto col-md-4 col-spin">
                                        <div className="destination-explore-form">
                                          <div className="row">
                                            <div className="col col-6 col-md-6 destination-explore-item-groupleft">
                                              <div className="destination-explore-item">
                                                <div className="destination-explore-item-label-select">
                                                  Guests
                                                </div>
                                                <input type="hidden" name="" />
                                                <input type="hidden" name="" />
                                                <input
                                                  type="text"
                                                  name=""
                                                  id=""
                                                  className="destination-explore-item-input destination-explore-item-input-spinner"
                                                />
                                              </div>
                                            </div>
                                            <div className="col col-6 col-md-6 destination-explore-item-groupright">
                                              <div className="destination-explore-item">
                                                <div className="destination-explore-item-label-select">
                                                  Rooms
                                                </div>
                                                <input type="hidden" name="" />
                                                <input type="hidden" name="" />
                                                <input
                                                  type="text"
                                                  name=""
                                                  id=""
                                                  className="destination-explore-item-input destination-explore-item-input-spinner"
                                                />
                                              </div>
                                            </div>
                                          </div>
                                        </div>
                                      </div>
                                      <div className="col col-auto col-md-3 col-btn">
                                        <div className="destination-explore-rms">
                                          <button className="destination-explore-item-cta destination-explore-item-submit">
                                            Search
                                          </button>
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
                  </div>
                </div>
              </div>
            </div>
            <div className="home_banner-explore-footer">
              <div className="home_banner-explore-footer-hotels">
                <a href="">
                  <p className="home_banner-explore-footer-country">
                    {" "}
                    Castello di Reschio
                  </p>
                  <p className="home_banner-explore-footer-address">
                    Perugia, Italy
                  </p>
                  <p className="home_banner-explore-footer-copy">
                    ©Kleiner/Castello di Reschio
                  </p>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default HeroesHotel;
