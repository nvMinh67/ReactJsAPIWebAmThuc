import React,{Fragment,useState,useEffect} from "react";
import {Link,Form,Route,Routes, json,useNavigate} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import axios from "axios";
export default function Auth(){
   const navigate = useNavigate();
   const gettoken =()=>{
      const tokenstring = sessionStorage.getItem('token');
      const usertoken = JSON.parse(tokenstring);
      return usertoken;
   }
   const getuser =()=>{
      const userstring = sessionStorage.getItem('user');
      const userdetail = JSON.parse(userstring);
      return userdetail;
   }
   const [token,settoken] = useState(gettoken());
   const [user,setuser] = useState(getuser())
   const savetoken =(user,token)=>{
      sessionStorage.setItem('token',JSON.stringify(token));
      sessionStorage.setItem('user',JSON.stringify(user));
      settoken(token);
      setuser(user);
      if (user.roleName=="Admin")
      navigate('/admin');
      else
      navigate('/restaurant');
   }
   const logout =()=>{
      sessionStorage.clear();
      navigate('/hotel');
   }
   const http = axios.create({
      mode: "cors",
      baseURL:"https://localhost:7276/api/Account",
      headers:{
         "Content-Type":"application/json",
      }
   });
 return{
   settoken:savetoken,
   token,
   user,
   gettoken,
   getuser,
   http,
   logout,
 }
 

}
