import React,{Fragment} from "react";
import { useState,useEffect } from "react";
import Admin from "../Component/Admin";
import productApi from "../api/productApi";

const ModalEditProduct =(props)=>{

    const [files,setFiles] = useState([]);
    const [name,setName] = useState();
    const [price,setPrice] = useState();
    const [dish,setDish] = useState();
    const [id,setId] = useState('');

    const handlechange=(e)=>{
     setFiles(e.target.files);
    }
    useEffect(() => {
        setId(props.idProduct);
                const fetchProductList = async () => {
                    try {
                    const response = await productApi.getDish(props.idProduct);
                    setDish(response);
                    console.log(response);
                    } catch (error) {
                    console.log('Failed to fetch product list: ', error);
                    }
                }
                fetchProductList();
            },[props.idProduct]);
            console.log(dish);
    function handleupload(e){
        e.preventDefault();
        const formData = new FormData();
        formData.append('maso',props.idProduct);
        formData.append('name',name);
        formData.append('price',price);
        for(let i=0 ;i<files.length;i++){
            formData.append(`ImageUploads`,files[i]);
        }
        fetch(`https://localhost:7276/api/Dish1/${props.idProduct}`,{
            mode: "cors",
            method: "PUT",
            headers: {
                Accept: "application/json",
            },
            body: formData
          }).then(props.onclose)
          .then(data=>console.log(data))
          .catch(err => console.log(err));
    }
     function renderForm (){
        if(!dish) return 'Loadding';
        return (
            <form class="user">
            <div class="form-group">
                <input required type="text" class="form-control form-control-user"
                   onChange={(e)=>setName(e.target.value)} id="exampleInputEmail" placeholder={dish.name}  aria-describedby="emailHelp"/>
            </div>
            <div class="form-group">
                <input required type="text" class="form-control form-control-user"
                   onChange={(e)=>setPrice(e.target.value)}  id="exampleInputEmail" placeholder={dish.price}   aria-describedby="emailHelp"/>
            </div>
            <div class="form-group">
                <input required type="file" multiple  class="form-control form-control-user"
                    onChange={handlechange} aria-describedby="emailHelp"
                    placeholder="Hình ảnh cho món ăn"/>
            </div>
            <button onClick={handleupload} class="btn btn-primary btn-user btn-block">
                Sửa
            </button>
            <hr/>
        </form>
        )

        
        
    }
  
    if(!props.open) return null
    return ( 
    <Fragment>
        <div onClick={props.onclose} className="overlay" style={{zIndex:'11111111111111111111111111111'}}>
             <div class="container">            
                <div class="card o-hidden border-0 shadow-lg my-5" onClick={(e) => {
                        e.stopPropagation();
                        }}>
                    <div class="card-body p-0">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="p-5">
                                    <div class="text-center">
                                        <h1 class="h4 text-gray-900 mb-4">Chỉnh sửa sản phẩm của bạn đi nào!!</h1>
                                    </div>
                                     {renderForm()}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>)
}
export default ModalEditProduct;