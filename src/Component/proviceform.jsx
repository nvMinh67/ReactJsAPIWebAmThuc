import React,{Fragment, useState,useEffect} from "react";
import selectLocation from "./selectLocation";
import productApi from "../api/productApi";

const ProviceForm=()=>{
    const [provinces,setProvinces]= useState([]);
    const [province,setProvince] = useState('');
    const [districts,setdistricts]= useState([]);
    const [district,setdistrict] =useState('');
    const [wards,setwards]= useState([]);
    const [ward,setward] =useState('');
    const [address,setaddress] = useState('');
   
 




    
    useEffect(() => {
        const fetchProductList = async () => {
          try {
            const response = await productApi.apigetprovice();
            setProvinces(response.data.results);
          } catch (error) {
            console.log('Failed to fetch product list: ', error);
          }
        }
    
        fetchProductList();
      }, []);
      useEffect(() => {
        setdistrict(null);
        const fetchProductList = async () => {
          try {
            const response = await productApi.apigetdistrict(province);
            setdistricts(response.data.results);
          } catch (error) {
            console.log('Failed to fetch product list: ', error);
          }
        }
    
        fetchProductList();
      }, [province]);

      useEffect(() => {
        const fetchProductList = async () => {
          console.log(district);
          try {
          
            const response = await productApi.apigetward(district);
          
            setwards(response.data.results);
          } catch (error) {
            console.log('Failed to fetch product list: ', error);
          }
        }
    
        fetchProductList();
      }, [district]);


      function handleupload(e){
        e.preventDefault();
        const provincename=province ?provinces?.find(item=>item.province_id===province)?.province_name: '';
        const districtname=district ?districts?.find(item=>item.district_id===district)?.district_name: '';
        const wardname=ward ?wards?.find(item=>item.ward_id===ward)?.ward_name: '';

        const formdata = new FormData();
        formdata.append('provice',provincename);
        formdata.append('district',districtname);
        formdata.append('ward',wardname);
        formdata.append('address',address);
        console.log(formdata);
        fetch('http://localhost:8001/api/location',{
            method:'POST',
            body: formdata,
    
        }).then(res => res.json())
        .then(data=>console.log(data))
        .catch(err => console.log(err));
    }

   
     
  
    return(
        <Fragment>
            <h1>Provice</h1>
            <label htmlFor="select-provice">Select-Province</label>
            <select id="select-provice"  onChange={(e)=>(setProvince(e.target.value))} class="form-select mt-80">
            <option>chon tinh</option>
            {
              
                provinces.map(pro =>{
                    return (
                        <option 
                           key={pro?.province_name} value={pro?.province_id}>{pro?.province_name}</option>
                    )
                })
            }
          
            </select>
            <h1>District</h1>
            <select  onChange={(e)=>(setdistrict(e.target.value))} class="form-select mt-80">
            <option>chon huyen</option>
            {
                districts.map(dis =>{
                    return (
                        <option 
                           key={dis?.district_id} value={dis?.district_id}>{dis?.district_name}</option>
                    )
                })
            }
            
           
         
            </select>
            <h1>Ward</h1>
            <select  onChange={(e)=>(setward(e.target.value))} class="form-select mt-80">
            <option>chon xa</option>
            {
                wards.map(dis =>{
                    return (
                        <option 
                           key={dis?.ward_id} value={dis?.ward_id}>{dis?.ward_name}</option>
                    )
                })
            }

            


            </select>
            <label htmlFor="">address</label>
            <input type="text" onChange={(e)=>{setaddress(e.target.value)}}  />

            <button onClick={handleupload} className="btn bnt-submit">submit</button>
            {/* <input type="text" value={
                                `${district ? `${districts?.find(item=>item.district_id===district)?.district_name}` : ''} ${province ? `${provinces?.find(item=>item.province_id===province)?.province_name}` : ''}`
           } */}
     
            <selectLocation/>
        </Fragment>
    )
}
export default ProviceForm;