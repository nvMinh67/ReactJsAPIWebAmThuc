    import React,{Fragment} from "react";
    import { useState,useEffect } from "react";
    import Admin from "../Component/Admin";
    import productApi from "../api/productApi";
    const ModalEditRoom =(props)=>{
        const [files,setFiles] = useState([]);
        const [name,setName] = useState();
        const [price,setPrice] = useState();
        const [size,setSize] = useState();
        const [view,setView] = useState();
        const [capacity,setCapacity] = useState();
        const [dish,setDish] = useState();
        const [id,setId] = useState('');
        const [typeRoom,setTypeRoom] = useState();
        const handlechange=(e)=>{
        setFiles(e.target.files);
        }
        useEffect(() => {
            setId(props.idProduct);
                const fetchProductList = async () => {
                    try {
                    const typeRoom = await productApi.getTypeRoom();
                    const response = await productApi.getRoom(props.idProduct);
                    setDish(response);
                    setTypeRoom(typeRoom);
                    } catch (error) {
                    console.log('Failed to fetch product list: ', error);
                    }
                }
                fetchProductList();
            },[props.idProduct]);
        function handleupload(e){
            e.preventDefault();
            const formData = new FormData();
            formData.append('RoomID',props.idProduct);
            formData.append('Price',price);
            formData.append('Size',size);
            formData.append('View',view);
            formData.append('capacity',capacity);
            for(let i=0 ;i<files.length;i++){
            formData.append(`ImageUploads`,files[i]);
            }
            fetch(`https://localhost:7276/api/Room`,{
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
            if(!dish) return 'Loadding...........';
            return (
                <form class="user">
                <div class="form-group">
                    <input required type="text" class="form-control form-control-user"
                    onChange={(e)=>setName(e.target.value)} id="exampleInputEmail" placeholder={dish.resRoomDetail[0].name} disabled="false"   aria-describedby="emailHelp"/>
                </div>
                <div class="form-group">
                    <input required type="text" class="form-control form-control-user"
                    onChange={(e)=>setPrice(e.target.value)} id="exampleInputEmail" placeholder={dish.resRoomDetail[0].price}  aria-describedby="emailHelp"/>
                </div>
                <div class="form-group">
                    <input required type="text" class="form-control form-control-user"
                    onChange={(e)=>setSize(e.target.value)} id="exampleInputEmail" placeholder={dish.resRoomDetail[0].size}  aria-describedby="emailHelp"/>
                </div>
                <div class="form-group">
                    <input required type="text" class="form-control form-control-user"
                    onChange={(e)=>setView(e.target.value)} id="exampleInputEmail" placeholder={dish.resRoomDetail[0].view}   aria-describedby="emailHelp"/>
                </div>
                <div class="form-group">
                    <input required type="text" class="form-control form-control-user"
                    onChange={(e)=>setCapacity(e.target.value)} id="exampleInputEmail" placeholder={dish.resRoomDetail[0].capacity}  aria-describedby="emailHelp"/>
                </div>
                <div class="form-group">
                    <input required type="file" multiple  class="form-control form-control-user" disabled="false" 
                        onChange={handlechange} aria-describedby="emailHelp"
                        placeholder="Images Room"/>
                </div>
                <button onClick={handleupload} class="btn btn-primary btn-user btn-block">
                EDIT
                </button>
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
                                            <h1 class="h4 text-gray-900 mb-4">Edit Your Room Now!!!!</h1>
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
    export default ModalEditRoom;