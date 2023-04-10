import React,{Fragment} from "react";
import HeroesHotel from "./HeroesHotel";
import Heroes from "./Heroes";
import HotelCarousel from "./HotelCarousel";
import { DateRangePicker } from "rsuite";
import Review from "./Review";
import Header from "./Header";
import productApi from "../api/productApi";
import { useState } from "react";
import { useEffect } from "react";


const Hotel=()=>{
const [hotelList,setHotelList] = useState([]);

useEffect(() => {
    const fetchProductList = async () => {
      try {
        const response = await productApi.getAllHotel();
   
        setHotelList(response);
      } catch (error) {
        console.log('Failed to fetch product list: ', error);
      }
    }
    fetchProductList();
  }, []);

    
     return(
        <Fragment>
            <Header/>
            <HeroesHotel/>
            <HotelCarousel hotel={hotelList}/>
            <Review/>
            <DateRangePicker/>
        </Fragment>
     );
   


}
export default Hotel;