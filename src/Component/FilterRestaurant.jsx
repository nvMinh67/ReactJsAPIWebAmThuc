import React,{Fragment,useState,useEffect} from "react";
import Search from "./Search";
import productApi from "../api/productApi";
import Productpaginate from "./Productpaginate";


const FilterRestaurant =()=>{
 
    const [productList, setProductList] = useState([]);




    useEffect(() => {
      const fetchProductList = async () => {
        try {
        
          const response = await productApi.getAll();
        
          setProductList(response);
          console.log(response);
        } catch (error) {
          console.log('Failed to fetch product list: ', error);
        }
      }
  
      fetchProductList();
    }, []);


 

    

    return(
        <main>
            <Search restaurant={productList}/>
           
            <Productpaginate restaurants={productList}/>
        </main>
    )
}

export default FilterRestaurant;