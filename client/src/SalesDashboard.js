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
//import sound from './client_home/images/notification.mp3';
import CONFIG from './config'
//import BootBox from 'react-bootbox';
import Dialog from 'react-bootstrap-dialog';
import {Modal,Button} from 'react-bootstrap';
import $ from 'jquery'

toast.configure()

function SalesDashboard(props) {
  const [cat_data,setCatdata]=useState([]);

  const [length,setLength]=useState(0);
  const ref= useRef()
  const ref1= useRef(0)
  
  const [showConfirm, setShowConfirm] = useState(false);
  const [status, setStatus] = useState("");
  const [orders, setOrders] = useState("");
  const [d, setD] = useState("");
  const [v, setV] = useState("");
  const sd = useRef(0);


 // playAlert.content['not']=[sound]
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
      ref.current=ref.current-1;
    console.log(res.data)
    notify()
    
    })
  }
  function sou(c){
   
      const so=setInterval(()=>{
              if(sd.current==0){
      // playAlert('not');
      }
      if(sd.current>0){
        // console.log("termnate"+sd.current);
       return ()=> clearInterval(so);
    }
     
    }, 2000);
   
     
   // return ()=> sou(sd.current);
    
  }
  function statusChange(e){

      setStatus(e.target.value);
      setShowConfirm(true);
      console.log( $("#"+e.target.id).val());
      $("#"+e.target.id).html("<option >Pending</option><option >Accepted</option><option >Canceled</option>");
      //setSd(1);
      sd.current=sd.current+1;
    

  }
  useEffect(()=>{

  if(ref1.current==0)
  {

    axios.get(`${CONFIG.baseUrl}/cart/display/`).then(res=>{
      ref.current=res.data.length;
        setLength(res.data.length);
        setCatdata(res.data);
        ref1.current=1;
       
      }).then(console.log("ref1"+ref.current))
  }
   const n= setInterval(() => {
      //setLength(cat_data.length)
      console.log(ref.current)
      axios.get(`${CONFIG.baseUrl}/cart/display/`+ref.current).then(res=>{
       console.log(res.data);
      
       if(res.data.s){
        console.log(res.data.s);
        ref.current=res.data.a.length;
        sd.current=0;
        //setSd(0);
        sou(sd.current);
       
       }
       else{
        console.log(res.data.s);
       }
       setCatdata(res.data.a);
      

       
      })
      return ()=> clearInterval(n);
     
    }, 15000);


  }, []);
   




      const handleYes = () => {
       // this.dialog.showAlert("h");
       if(status!="Pending"){
        handleUpdate();
       }
         setShowConfirm(false);
  }
  const handleNo = () => {

      setShowConfirm(false);
     
}

    return (
      <div className="page-container">  
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

<Button variant="danger" onClick={handleNo}>

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