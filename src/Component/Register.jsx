import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import Auth from "./Auth";
import axios from "axios";


const Register=(props)=>{

    const {http,settoken} = Auth();
    const [name,setname] = useState();
    const [password,setPassword] = useState();
    const [email,setemail] = useState();
    const [firstname,setfirstname] = useState();
    const [lastName,setlastname] = useState();
    const submmitform1 =()=>{

            http.post('/SignUp',JSON.stringify({email:email,password:password,firstName:firstname,lastName:lastName,comfirmPassword:password})).then((res)=>{
                props.onclose();
});
    }

 if(!props.open) return null
 return(
    <div onClick={props.onclose} className='overlay' style={{zIndex:'11111111111111111111111111111'}}>
    <div
     onClick={(e) => {
        e.stopPropagation();
      }}
     
      className='modalContainer'
    >
      <img src="../image/post.jpg" alt='/' />
      <div className='modalRight'>
        <p className='closeBtn'  onClick={props.onclose}>
          X
        </p>
        <div className='content'>
          <h3 className="form-title" style={{fontWeight:'500',marginBottom:'20px'}}>Register</h3>
          <div class="form-outline mb-4 mt-20">
              <label class="form-label" for="form2Example1">FirstName</label>
              <input type="Name"  id="form2Example1" onChange={e=>setfirstname(e.target.value)} class="form-control" />
            </div>
            <div class="form-outline mb-4 mt-20">
              <label class="form-label" for="form2Example1">LastName</label>
              <input type="Name"  id="form2Example1" onChange={e=>setlastname(e.target.value)} class="form-control" />
            </div>
        <div class="form-outline mb-4 mt-20">
              <label class="form-label" for="form2Example1">UserName</label>
              <input type="email"  id="form2Example1" onChange={e=>setemail(e.target.value)} class="form-control" />
            </div>


            <div class="form-outline mb-4 mt-20">
              <label class="form-label" for="form2Example2">Password</label>
              <input type="password" onChange={e=>setPassword(e.target.value)} id="form2Example2" class="form-control" />
            </div>
            <div class="form-outline mb-4 mt-20">
              <label class="form-label" for="form2Example2">ConFirm Password</label>
              <input type="password" id="form2Example2" class="form-control" />
            </div>

          
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


            <button type="button" onClick={submmitform1} class="btn btn-primary btn-block mb-4">Sign in</button>
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
export default Register;