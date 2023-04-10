import React,{Fragment} from "react";
import { useState } from "react";
import Admin from "../Component/Admin";
import { Navigate } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";
import { redirect } from "react-router-dom";

const ModalAddProduct =(props)=>{
    const navigate = useNavigate();
    const [files,setFiles] = useState([]);
    const [name,setName] = useState();
    const [price,setPrice] = useState();
    const handlechange=(e)=>{
     setFiles(e.target.files);
    }
    function redirectBack(){
        return redirect(`/ownerRestaurant/${props.admin}`);
    }
    function handleupload(e){
        e.preventDefault();
        const formData = new FormData();
        formData.append('maso',props.maso);
        formData.append('name',name);
        formData.append('price',price);
        for(let i=0 ;i<files.length;i++){
            formData.append(`ImageUploads`,files[i]);
        }
        fetch('https://localhost:7276/api/Dish1',{
            mode: "cors",
            method: "POST",
            headers: {
                Accept: "application/json",
            },
            body: formData
          }).then(props.onclose
          
            
            )
          .then(data=> console.log(data))
          .catch(err => console.log(err));
     
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
                                        <h1 class="h4 text-gray-900 mb-4">Thêm sản phẩm vào của hàng của bạn đi nào!!</h1>
                                    </div>
                                    <form class="user">
                                        <div class="form-group">
                                            <input required type="text" class="form-control form-control-user"
                                               onChange={(e)=>setName(e.target.value)} id="exampleInputEmail" aria-describedby="emailHelp"
                                                placeholder="Nhập vào tên món ăn"/>
                                        </div>
                                        <div class="form-group">
                                            <input required type="text" class="form-control form-control-user"
                                               onChange={(e)=>setPrice(e.target.value)} id="exampleInputEmail" aria-describedby="emailHelp"
                                                placeholder="Giá cho món ăn"/>
                                        </div>
                                        <div class="form-group">
                                            <input required type="file" multiple  class="form-control form-control-user"
                                                onChange={handlechange} aria-describedby="emailHelp"
                                                placeholder="Hình ảnh cho món ăn"/>
                                        </div>
                                        <button onClick={handleupload} class="btn btn-primary btn-user btn-block">
                                            Thêm 
                                        </button>
                                        <hr/>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </Fragment>)
}
export default ModalAddProduct;