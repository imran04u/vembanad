import React, {useState,useEffect} from "react"
import Header from "./Header";
import Navbar from "./Navbar";
import axios from "axios";
import {useHistory} from 'react-router-dom'
import { PromiseProvider } from "mongoose";
import CONFIG from './config';
import $ from 'jquery';

function Report(props) { 
  const [cat_data,setCatdata]=useState([]);
  const [tot,setTot]=useState(0);
  let d=[];
  useEffect(()=>{
    //const q=window.location.search;
    //console.log(q.substring(4));
    setTimeout(() => {
      axios.get(`${CONFIG.baseUrl}/cart/display2/`).then(res=>{
        console.log(res.data);
       setCatdata(res.data);
        // res.data.map(t=>{
        //   setTot(...tot+res.data.total);
        // })

      })
      clearTimeout();
    }, 1000);
    //console.log(catd);
  }, []);
   function dateget(d) {
    d.preventDefault();
    var a=$("#from").val();
     var b=$("#to").val();
     let data={a:a,b:b}
     axios.post(`${CONFIG.baseUrl}/cart/display3/`,data).then(res=>{
        console.log(res.data);

       setCatdata(res.data);
        // res.data.map(t=>{
        //   setTot(...tot+res.data.total);
        // })
      })
     //console.log(a);
   }
    //setCatdata(d);
    return (
      <div className="page-container">  
      <div className="left-content">
        <div className="mother-grid-inner">
         <Header d="auth"/>
         <div class="content-wrapper">
          
          <div class="titleblk clearfix">       
            <h1>User</h1>
          </div>


         <div class="newblk bgwhite">                
            <div class="subtitle">
              <h3>Orders History</h3>
              <div>
                  <input type="date" id="from" />
                   <input type="date" id="to" />
                    <input type="button" onClick={(event)=>dateget(event)} value="GET" className="btn btn-success" />
              </div>
              <button class="printbtn" onClick={(e)=>{//e.preventDefault();
              window.print();}}>Print</button>
            </div>
            <table class="datatable ordertable">
              <thead>
                <tr>
                  <th>Order Id</th>
                  <th>Order Date</th>
                  <th>Name</th>
                  <th>Contact No.</th>
                  <th>Address</th>
                  <th>Order Details</th>
                  <th>Grand Total</th>
                  <th>Status</th>
                </tr>
              </thead>

              <tbody>
              {cat_data.map(d=>
              <tr key={d._id}>
                <td><span class="id">{d._id}</span></td>
                <td><span>{d.created.split("T")[0]}</span></td>
                <td>{d.customer}</td>
                <td>{d.phone}</td>
                <td>{d.address}</td>
                
                <td>
                <table>
                      <tr>
                        <th>Item Name</th>
                        <th>No. Of Item</th>
                        <th>Total</th>
                      </tr>

                  {d.product.map(p=>(
                     <tr>
                     <td>{p[0].name}</td>
                  <td>{p[0].qty}</td>
                  <td>{p[0].rs}</td>
                   </tr>
                  ))}
                    </table>
                  </td>
              <td>{d.total}</td>
              <td><label title={d.status} class="stat">{d.status}</label>
                </td>
              
               
              
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
  
  export default Report;