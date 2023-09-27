import React,{Fragment} from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { redirect } from "react-router-dom";
import productApi from "../api/productApi";
import { useEffect } from "react";

const ModalAddRoom =(props)=>{
    const navigate = useNavigate();
    const [files,setFiles] = useState([]);
    const [price,setPrice] = useState();
    const [idRoom,setIdRoom] = useState();
    const [size,setSize] = useState();
    const [view,setView] = useState();
    const [capacity,setCapacity] = useState();
    const handlechange=(e)=>{
     setFiles(e.target.files);
    }
    function handleupload(e){
        e.preventDefault();
        const formData = new FormData();
        formData.append('HotelId',props.id_hotel);
        formData.append('RoomID',idRoom);
        formData.append('Price',price);
        formData.append('Size',size);
        formData.append('View',view);
        formData.append('Capacity',capacity);
        for(let i=0 ;i<files.length;i++){
            formData.append(`Image`,files[i]);
        }
        fetch('https://localhost:7276/api/CreateARoom',{
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
    function renderOptiont(){
        return(
          
        props.typeRoom.map((type)=>(
           
          ( <option value={type.id}>{type.name}</option>)
    )))
    }
    if(!props.open) return null
    return ( 
    <Fragment>
        <div onClick={props.onclose} className="overlay" style={{zIndex:'11111111111111111111111111111'}}>
             <div class="container">
                <div class="card o-hidden border-0 shadow-lg my-5" onClick={(e) => {
                        e.stopPropagation(); }}>
                    <div class="card-body p-0">
                        <div class="row">
                            <div class="col-lg-12">
                                <div class="p-5">
                                    <div class="text-center">
                                        <h1 class="h4 text-gray-900 mb-4">Add A New Room To Your Hotel!!</h1>
                                    </div>
                                    <form class="user">
                                    <div class="form-group">
                                        <label>Select Type Room</label>
                                        <select onChange={(e)=>setIdRoom(e.target.value)} required class="form-control" placeholder="Select Type Room.....">
                                          {renderOptiont()}
                                        </select>
                                        </div>
                                        <div class="form-group">
                                            <input onChange={(e)=>setPrice(e.target.value)} required type="text" multiple  class="form-control form-control-user"
                                                aria-describedby="emailHelp"
                                                placeholder="Price"/>
                                        </div>
                                        <div class="form-group">
                                            <input required type="text" class="form-control form-control-user"
                                               onChange={(e)=>setSize(e.target.value)} id="exampleInputEmail" aria-describedby="emailHelp"
                                                placeholder="Size"/>
                                        </div>
                                        <div class="form-group">
                                            <input required type="text" class="form-control form-control-user"
                                               onChange={(e)=>setView(e.target.value)} id="exampleInputEmail" aria-describedby="emailHelp"
                                                placeholder="View"/>
                                        </div>
                                        <div class="form-group">
                                            <input required type="text" class="form-control form-control-user"
                                               onChange={(e)=>setCapacity(e.target.value)} id="exampleInputEmail" aria-describedby="emailHelp"
                                                placeholder="Capacity"/>
                                        </div>
                                        <div class="form-group">
                                            <input required type="file" multiple  class="form-control form-control-user"
                                                onChange={handlechange} aria-describedby="Image"
                                                placeholder="Hình ảnh cho món ăn"/>
                                        </div>
                                        <button onClick={handleupload} class="btn btn-primary btn-user btn-block">
                                            Thêm 
                                        </button>
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
export default ModalAddRoom;