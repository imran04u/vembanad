import ReactDOM from 'react-dom';
import React, {useState} from "react"
import axios from 'axios'
import {toast} from 'react-toastify';  
import 'react-toastify/dist/ReactToastify.css';  
import CONFIG from './config';
toast.configure()

function Login(props) {
const [uname,setUname]=useState("");
const [pass,setPass]=useState("");
const [color,setColor]=useState("");
const [res,setResult]=useState("");
const notify = ()=>{  
  toast('Logged in successfully') 
       
} 
   

   function btn_click(e){
     e.preventDefault();
     let data={
       uname:uname,
       pass:pass
     }
     console.log(data);
     axios.post(`${CONFIG.baseUrl}/login/`, data).then(res=>{
      console.log(res.data.result);
      
      if(res.data.result)
      {
        // setColor("alert-success")
        // setResult("successfully logged");
       // window.location="/cat"
       console.log(res.data.user_type);
       if(res.data.user_type=="sales"){
       localStorage.setItem('auths',JSON.stringify(res.data.token));
       notify()
     props.history.push('/sales')
           }
           else{
            localStorage.setItem('auth',JSON.stringify(res.data.token));
            notify()
          props.history.push('/dash')
           }
      }
      else{
        setColor("alert-danger")
        setResult("login failed");
      }
     })
   }
    return (
      <div  className="loginpage" >
        <div className="loginBlk">
        <div className="login-logo">
          <img src="assets/images/logo.png" alt="No" />
        </div>
        <p>Enter your login credentials to access the portal</p>
    <p className={color}>{res}</p>
        <div className="md-input md-user">
          <input type="text" value={uname} onChange={event=>setUname(event.target.value)} autoComplete="off"/>
          <label className="">Username</label>
          <div className="border"></div>
        </div> 
        <div className="md-input md-pass">
          <input type="Password" onChange={event=>setPass(event.target.value)} value={pass} />
          <label className="">Password</label>
          <div className="border"></div>
        </div>            
        <button onClick={btn_click} className="btnBlue">Login</button>
      </div>
      </div>
    );
  }
  
  export default Login;
  