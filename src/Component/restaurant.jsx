  import React,{Fragment,useState,useEffect} from "react";
  import Location from "./Location";
  import Review from "./Review";
  import Dish from "./Dish";
  import Inspiration from "./Inspiration";
  import Heroes from "./Heroes";
  import Auth from "./Auth";
  import UserService from "../service/user.service";
  import productApi from "../api/productApi";
  import axios from "axios";
import { positions } from "@mui/system";
 import Header from "./Header";
 import Footer from "./Footer";

  const Restaurant =()=>{
    const [productList, setProductList] = useState([]);
    // const[Latitute,setLatitute] = useState('');
    // const[Longitute,setLongitute] =useState('');


   
      // let finalAPI =`${API_endpoint}lat${Latitute}&lon=${Longitute}&exclude=hour&appid=${API_key}`
      // axios.get(finalAPI).then((res)=>{
      //   console.log(res.data)
      // })

    useEffect(() => {
      const fetchProductList = async () => {
        try {
          navigator.geolocation.getCurrentPosition((position)=>{
           fetch("https://ipapi.co/json/")
           .then((res)=>res.json())
           .then((data)=>{
            console.log(data);
           })
            // setLatitute(position.coords.latitude);
            // setLongitute(position.coords.longitude);
        //  setLatitute(position.coords.latitude);
        //  setLongitute(position.coords.longitude);
        
          
      //     let finalAPI =`${API_endpoint}lat=${position.coords.latitude}&lon=${position.coords.longitude}&exclude=hourly,daily&appid=${API_key}`
      // axios.get(finalAPI).then((res)=>{
      //   console.log(res.data)
      // })
      })
          
          const response = await productApi.getAll();
         console.log(response);
          setProductList(response);
        } catch (error) {
          console.log('Failed to fetch product list: ', error);
        }
      }
  
      fetchProductList();
    }, []);
  



  return (
   <div>
      <Header/>
      <Heroes/>
      <Inspiration/>
      <Dish users={productList}/>
      <Review/>
      <Location/> 
      <Footer/>
   </div>
  )
  }
  export default Restaurant;