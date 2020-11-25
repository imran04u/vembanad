import React, {useState,useEffect} from "react"
import Header from "./Header";
import Navbar from "./Navbar";
import axios from "axios";
import {useHistory} from 'react-router-dom'
import { PromiseProvider } from "mongoose";
import CONFIG from './config';

function Userlist(props) {
  const [cat_data,setCatdata]=useState([]);
  let d=[];
  useEffect(()=>{
    //const q=window.location.search;
    //console.log(q.substring(4));
    setTimeout(() => {
      axios.get(`${CONFIG.baseUrl}/user/display/`).then(res=>{
        console.log(res.data);
       setCatdata(res.data);
        
      })
      
    }, 1000);
    //console.log(catd);
  }, []);
   
    //setCatdata(d);
    return (
      <div className="page-container">  
      <div className="left-content">
        <div className="mother-grid-inner">
         <Header/>
         <div class="content-wrapper">
          
          <div class="titleblk clearfix">       
            <h1>User</h1>
          </div>


         <div class="newblk bgwhite">                
            <div class="subtitle">
              <h3>View user</h3>
            </div>
            <table class="datatable">
              <thead>
                <tr>
                <th>ID</th>
                  <th>Name</th>
                  <th>Address</th>
                  <th>Phone no</th>
                  <th>Email</th>
                  </tr>
              </thead>

              <tbody>
              
              {cat_data.map(d=>
              <tr key={d._id}>
              
                <td><p >{d._id}</p></td>
                <td><p >{d.name}</p></td>
                <td><p >{d.address}</p></td>
                <td><p >{d.phone}</p></td>
                <td><p >{d.email}</p></td>
              
                 </tr>
              )}
         
         



              </tbody>
            </table>
          </div> 

        </div>
      </div>
     <Navbar/>
    <div className="clearfix"> </div>
  </div>
  </div>
    );
  }
  
  export default Userlist;