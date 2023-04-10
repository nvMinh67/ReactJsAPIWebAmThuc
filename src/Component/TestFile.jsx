import React, { useState } from "react";

const TextFile =()=>{
    const [files,setfile]=  useState();
    const [name,setname]=useState();
    const [phone,setphone]=useState();
    const [address,setaddress]=useState();
    const [mapdata,setmapdata] =useState();
    const [about,setabout] = useState();
    const [capcity,setcapacity]=useState();

    const handlechange =(e)=>{
        setfile(e.target.files);
    }
    function handleupload(e){
        e.preventDefault();
        
        const formdata = new FormData();
        formdata.append('name',name);
        formdata.append('phone',phone);
        formdata.append('address',address);
        formdata.append('mapdata',mapdata);
        formdata.append('about',about);
        formdata.append('capacity',capcity);
        for(let i=0;i<files.length;i++){
            formdata.append(`images[${i}]`,files[i]);
        }
        fetch('http://localhost:8001/api/image',{
            method:'POST',
            body: formdata,
    
        }).then(res => res.json())
        .then(data=>console.log(data))
        .catch(err => console.log(err));
    }
    return(
        <div o className='overlay' style={{zIndex:'11111111111111111111111111111'}}>
        <div
         
          className='modalContainer'
        >
          <img src="../image/post.jpg" alt='/' />
          <div className='modalRight'>
            <p className='closeBtn'  >
              X
            </p>
            <div className='content'>
              <h3 className="form-title" style={{fontWeight:'500',marginBottom:'20px'}}>Login</h3>
            <div class="form-outline mb-4 mt-20">
                  <label class="form-label" for="form2Example1">Name</label>
                  <input onChange={(e)=>setname(e.target.value)} id="form2Example1" class="form-control" />
                </div>
                <div class="form-outline mb-4 mt-20">
                  <label class="form-label" for="form2Example1">phone</label>
                  <input onChange={(e)=>setphone(e.target.value)} id="form2Example1" class="form-control" />
                </div>
                <div class="form-outline mb-4">
                  <label class="form-label" for="form2Example2">address</label>
                  <input onChange={(e)=>setabout(e.target.value)}  id="form2Example2" class="form-control" />
                </div>
                <div class="form-outline mb-4">
                  <label class="form-label" for="form2Example2">mapdata</label>
                  <input onChange={(e)=>setmapdata(e.target.value)} id="form2Example2" class="form-control" />
                </div>
                <div class="form-outline mb-4">
                  <label class="form-label" for="form2Example2">about</label>
                  <input onChange={(e)=>setabout(e.target.value)} id="form2Example2" class="form-control" />
                </div>
                <div class="form-outline mb-4">
                  <label class="form-label" for="form2Example2">capacity</label>
                  <input onChange={(e)=>setcapacity(e.target.value)} id="form2Example2" class="form-control" />
                </div>
                
                <div class="form-outline mb-4">
                  <label class="form-label" for="form2Example2">image</label>
                  <input onChange={handlechange} type="file" multiple id="form2Example2" class="form-control" />
                </div>
                <button onClick={handleupload}  class="btn btn-primary btn-block mb-4">Sign in</button>

      
              
                <div class="row mb-4">
                  <div class="col d-flex justify-content-center">
                
                    <div class="form-check">
                      <input class="form-check-input" type="checkbox" value="" id="form2Example31" checked />
                      <label class="form-check-label" for="form2Example31"> Remember me </label>
                    </div>
                  </div>
  
                  <div class="col">
                    
                    <a href="#!">Forgot password?</a>
                  </div>
                </div>
  
                <div class="text-center">
                  <p>Not a member? <a href="#!">Register</a></p>
                  <p>or sign up with:</p>
                  <button type="button" class="btn btn-link btn-floating mx-1">
                    <i class="fab fa-facebook-f"></i>
                  </button>
                  <button type="button" class="btn btn-link btn-floating mx-1">
                    <i class="fab fa-google"></i>
                  </button>
  
                  <button type="button" class="btn btn-link btn-floating mx-1">
                    <i class="fab fa-twitter"></i>
                  </button>
  
                  <button type="button" class="btn btn-link btn-floating mx-1">
                    <i class="fab fa-github"></i>
                  </button>
                </div>
            </div>
         
          </div>
        </div>
      </div>
    )
}
export default TextFile;