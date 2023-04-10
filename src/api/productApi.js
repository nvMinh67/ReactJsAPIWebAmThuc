import axiosClient from "./axiosClient";
import axios, { AxiosDefaults } from "axios";

const productApi = {
  getAll: () => {
    const url = '/Dish1';
    return axiosClient.get(url);
  },
 adminApi: (id)=>{
  const url= `/AdminRestaurant/id?id=${id}`; 
  return axiosClient.get(url);
},
getRoomDetail:(id)=>{
  const url = `/Room/id?id=${id}`;
  return axiosClient.get(url);
},
getDetailHotel:(id)=>{
  const url = `/Room/id_hotel?id_hotel=${id}`;
  return axiosClient.get(url);
},
getHotel:(id)=>{
  const url =  `/Hotel/id?id=${id}`; 
  return axiosClient.get(url);
},
getAllHotel:() => {
 const url ='/Room';
 return axiosClient.get(url);
},
getDish:(id) =>{
    const url = `/Dish1/${id}`;
    return axiosClient.get(url);
},
  get: (id) => {
    const url = `/Restaurant/${id}`;
    return axiosClient.get(url);
  },
  apigetprovice : ()=> new Promise (async(resolve,reject)=>{
  try{
    const response = await axios({
      method:'get',
      url:'https://vapi.vnappmob.com/api/province'
    })
    resolve(response);

  }
  catch(error){
    reject(error)
  }
  })
  ,  apigetdistrict : (provinceid)=> new Promise (async(resolve,reject)=>{
    try{
      const response = await axios({
        method:'get',
        url:`https://vapi.vnappmob.com/api/province/district/${provinceid}`
      })
      resolve(response);
  
    }
    catch(error){
      reject(error)
    }
    })
    ,
    apigetward : (provinceid)=> new Promise (async(resolve,reject)=>{
      try{
        const response = await axios({
          method:'get',
          url:`https://vapi.vnappmob.com/api/province/ward/${provinceid}`
        })
        resolve(response);
    
      }
      catch(error){
        reject(error)
      }
      }),
}

export default productApi;