import React, {useState,useEffect} from "react"
import Header from "./Header";
import Navbar from "./Navbar";
import axios from "axios";
import {useHistory} from 'react-router-dom'
import { PromiseProvider } from "mongoose";
import $ from "jquery";
import CONFIG from './config';

function Orderlist(props) {
  const [cat_data,setCatdata]=useState([]);
 
  const [length,setLength]=useState(0);
  const [search,setSearch]=useState("");
  let d=[];
  
  useEffect(()=>{
    //const q=window.location.search;
    //console.log(q.substring(4));
    
    $("#searchT").on("change", function() {
      var value = $(this).val().toLowerCase();
      $("#myTable > tr").filter(function() {
        $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
      });
    });


    setTimeout(() => {
      axios.get(`${CONFIG.baseUrl}/cart/display1/`).then(res=>{
        // console.log(res.data);
       setCatdata(res.data);
        setLength(res.data.length);
        clearTimeout();
       
      })
      
    }, 1000);
    //console.log(catd);
  }, []);
   
    //setCatdata(d);
    return (
      <div className="page-container">  
      <div className="left-content">
        <div className="mother-grid-inner">
         <Header d="auth"/>
         <div class="content-wrapper">
          
          <div class="titleblk clearfix">       
            <h1>Order Management</h1>
          </div>


         <div class="newblk bgwhite">                
            <div class="subtitle">
              <h3>View Orders</h3>
              <span>Select to filter orders &nbsp;</span>  
              <select className="col-md-3 filterselect" placeholder="search products" type="text" id="searchT" onChange={(event)=>{setSearch(event.target.value);}}>
                <option value="">All orders</option>
                <option>Accepted</option>
                <option>Canceled</option>
                </select>
             
            </div>
        
            <table class="datatable ordertable" >
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

              <tbody id="myTable" >
              {cat_data.map(d=>
              <tr key={d._id}>
                 <td><span class="id">{d._id}</span></td>
                <td><span>{d.created}</span></td>
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
  
  export default Orderlist;