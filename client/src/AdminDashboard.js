import React, {useState,useEffect,useRef} from "react"
import ReactDOM from 'react-dom';
import Header from "./Header";
import Navbar from "./Navbar";
import axios from "axios";
import {useHistory} from 'react-router-dom'
import { PromiseProvider } from "mongoose";
import playAlert from 'alert-sound-notify';
import {toast} from 'react-toastify';  
import 'react-toastify/dist/ReactToastify.css';
import sound from './client_home/images/notification.mp3';
toast.configure()

function AdminDashboard(props) {
  const [cat_data,setCatdata]=useState([]);
 
  const [length,setLength]=useState(0);
  const ref= useRef()
  playAlert.content['not']=[sound]
  let d=[];
  const notify = ()=>{  
    toast('Status Updated') 
         
  }
  function statusChange(e){
    let data={
      id:e.target.id,
      status:e.target.value
    }
    console.log(data);
    axios.post('http://localhost:2000/cart/update/',data).then(res=>{
    console.log(res.data)
    notify()
    setInterval(() => {
      window.location="/dash"
    },1000)
    })
  }
  useEffect(()=>{
    //const q=window.location.search;
    //console.log(q.substring(4));
    axios.get('http://localhost:2000/cart/display/').then(res=>{
      setLength(res.data.length);
      setCatdata(res.data);
      ref.current=res.data.length;
    }).then(console.log(ref.current))
    setInterval(() => {
      //setLength(cat_data.length)
      console.log(length)
      axios.get('http://localhost:2000/cart/display/').then(res=>{
       // console.log(res.data);
      
      
      console.log(ref.current+""+res.data.length);
       if(ref.current==res.data.length)
       {
         console.log("equal");
         
       }
       else{
         console.log("notequal");
        // setCatdata(prevcat_data => res.data);
         playAlert('not');
         ref.current=res.data.length
        //setLength(res.data.length);
       }
       setCatdata(res.data);
       
      })
     
    }, 15000);

    // setTimeout(() => {
    //   axios.get('http://localhost:2000/cart/display/').then(res=>{
    //     // console.log(res.data);
    //    setCatdata(res.data);
    //     setLength(res.data.length);
    //     console.log(length);
    //     clearTimeout();
       
    //   })
   
    // }, 1000);
    //console.log(catd);
  }, []);
   
//   const incrementCounter = () => {
//     setLength(cat_data.length);
// }

    //setCatdata(d);
    return (
      <div className="page-container">  
      <div className="left-content">
        <div className="mother-grid-inner">
         <Header/>
         <div class="content-wrapper">
          
          <div class="titleblk clearfix">       
          <h1>Dashboard</h1>
          </div>


         <div class="newblk bgwhite">                
            <div class="subtitle">
              <h3>Received Orders ({ref.current})</h3>
              <button class="adminprint" onClick={(e)=>{//e.preventDefault();
              window.print();}}>PRINT</button>
             
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
                <td><span class="date">{d.created}</span></td>
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
              <select name="" id={d._id} onChange={(e)=>{statusChange(e)}}>
                       <option >Pending</option>
                       <option >Accepted</option>
                       <option >Canceled</option>
                     </select>
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
  
  export default AdminDashboard;