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
import CONFIG from './config'
//import BootBox from 'react-bootbox';
import Dialog from 'react-bootstrap-dialog';
import {Modal,Button} from 'react-bootstrap';

toast.configure()

function SalesDashboard(props) {
  const [cat_data,setCatdata]=useState([]);

  const [length,setLength]=useState(0);
  const ref= useRef()
  const [showConfirm, setShowConfirm] = useState(false);
  const [status, setStatus] = useState("");
  const [orders, setOrders] = useState("");
  const [d, setD] = useState("");
  const [v, setV] = useState("");


  playAlert.content['not']=[sound]
  //let d=[];
  const notify = ()=>{  
    toast('Status Updated') 
         
  }
    
  const handleUpdate = () => {
    let data={
      id:d,
      status:v
    }
    console.log(data);
    axios.post(`${CONFIG.baseUrl}/cart/update/`,data).then(res=>{
    console.log(res.data)
    notify()
     
    })
  }
  function statusChange(e){

    //setShowConfirm(true);
    setStatus(e.target.value);
    
    if(e.target.value=="Accepted"){
      let data={
        id:e.target.id,
        status:e.target.value
      }
      console.log(data);
      axios.post(`${CONFIG.baseUrl}/cart/update/`,data).then(res=>{
      console.log(res.data)
      notify()
       
      })    
      

    }
    else{
      
      setShowConfirm(true);
      setStatus(e.target.value);
    }
   

    //bootbox.prompt("Are you sure you want to cancel this order?")
    
    //bootbox.alert("Are you sure you want to cancel this order?");
    // bootbox.prompt("Are you sure you want to cancel this order?",(res)=>{
    //   alert(res);
    // });
 
    

  }
  useEffect(()=>{
    //const q=window.location.search;
    //console.log(q.substring(4));
    axios.get(`${CONFIG.baseUrl}/cart/display/`).then(res=>{
      setLength(res.data.length);
      setCatdata(res.data);
      ref.current=res.data.length;
    }).then(console.log(ref.current))
   const n= setInterval(() => {
      //setLength(cat_data.length)
      console.log(length)
      axios.get(`${CONFIG.baseUrl}/cart/display/`).then(res=>{
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
        setCatdata(res.data);
       }
      
       
      })
      return ()=> clearInterval(n);
     
    }, 15000);

    // setTimeout(() => {
    //   axios.get(`${CONFIG.baseUrl}/cart/display/').then(res=>{
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




      const handleYes = () => {
       // this.dialog.showAlert("h");
       if(status!="Pending"){
        handleUpdate();
       }
         setShowConfirm(false);
  }

    return (
      <div className="page-container saleswrap">  
      <div className="left-content">
        <div className="mother-grid-inner">
         <Header d="auths"/>
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
              <select  name="" id={d._id} onChange={(e)=>{setD(e.target.id);setV(e.target.value); console.log(v); statusChange(e)}}>
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
     
      <Modal show={showConfirm}>

<Modal.Header closeButton onClick={() => setShowConfirm(false)}>

<Modal.Title>Confirmation</Modal.Title>

</Modal.Header>

<Modal.Body>"Are you sure you want to {status} this order?"</Modal.Body>

<Modal.Footer>

<Button variant="danger" onClick={() => setShowConfirm(false)}>

   NO

</Button>

<Button variant="primary" onClick={handleYes}>

   YES
</Button>

</Modal.Footer>

</Modal>

    <div className="clearfix"> </div>
    {/* <bootbox 
     message="Are you sure you want to cancel this order?"
     show={!show}
     onYesClick={alert("YES")}
     onNoClick={alert("no")}
     onClose={false}
    /> */}
    
  </div>
  </div>
    );
  }
  
  export default SalesDashboard;