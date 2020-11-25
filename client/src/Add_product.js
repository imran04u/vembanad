import React, {useState,useEffect} from "react"
import Header from "./Header";
import Navbar from "./Navbar";
import axios from "axios";
import $ from "jquery";
import {toast} from 'react-toastify';  
import 'react-toastify/dist/ReactToastify.css';  
import CONFIG from './config';
toast.configure()


function Add_product() {
  const [cname,setCname]=useState("");
  const [Img,setImg]=useState("");
  const [pname,setPname]=useState("");
  const [fname,setFname]=useState("");
  const [description,setDescription]=useState("");
  const [price,setPrice]=useState("");
  const [offer_price,setOPrice]=useState(0);
  const [spl,setSpl]=useState("false");
  const [search,setSearch]=useState("");
  const [cat_data,setCatdata]=useState([]);
  const [pro_data,setPdata]=useState([]);
  const Added = ()=>{  
    toast('Successfully Added') 
         
  } 
  const Delete = ()=>{  
    toast('Successfully deleted') 
         
  } 
  useEffect(()=>{
    
      $("#searchT").on("keyup", function() {
        var value = $(this).val().toLowerCase();
        $("#myTable tr").filter(function() {
          $(this).toggle($(this).text().toLowerCase().indexOf(value) > -1)
        });
      });

    setTimeout(() => {
      axios.get(`${CONFIG.baseUrl}/product/display/`).then(res=>{
        setCatdata(res.data.b);
      setPdata(res.data.a);
        console.log();
      })
      
    }, 1000);
  }, []);
  
  function handleDel(e){
    e.preventDefault();
    console.log(e.target.id);
    if(e.target.id!="")
    {
      axios.get(`${CONFIG.baseUrl}/product/delete/${e.target.id}`).then(res=>{
        Delete()
        //alert('successfully deleted');
        setInterval(() => {
          window.location="/pro"
        },1000)
      })
    }
  }
  function reSet(e){
    e.preventDefault();
    setPname("");
    setPrice("");
    setDescription("");
    setOPrice("");

  }
  function createCat(e){
    e.preventDefault();
    let data={
      photo:Img,
      cname:cname,
      fname:fname,
      pname:pname,
      description:description,
      offer_price:offer_price,
      price:price,
      spl:spl
     }
     console.log(data)
     axios.post(`${CONFIG.baseUrl}/product/insert`, data).then(res=>{
     //alert('succesfully added');
     Added()
     document.getElementById(e.target.id).disabled=true;
    
     setInterval(() => {
      window.location="/pro"
    },1000)
     })
  }
    return (
      <div className="page-container">  
      <div className="left-content">
        <div className="mother-grid-inner">
         <Header/>
         <div class="content-wrapper">
          
          <div class="titleblk clearfix">       
            <h1>Food </h1>
          </div>

          <div class="newblk bgwhite">                
            <div class="subtitle">
              <h3>Create Product</h3>
            </div>
            <div class="row">
              <div class="col-md-6 formsingle">
                <label>Category Name</label>
                <select onChange={(event)=>{setCname(event.target.value);}} >
                <option>--select--</option>
                {cat_data.map(d=>
                  <option>{d.title}</option>
                )}
                </select>
    
              </div>
              <div class="col-md-6 formsingle">
                <label>Image Upload</label>
                <input type="file" name="" class="iconblk"  onChange={(event)=>{
                let file=event.target.files;
                let reader=new FileReader();
                reader.readAsDataURL(file[0]);
                reader.onload=(event)=>{
                    setFname(file[0].type.substring(6));
                    setImg(event.target.result);
                console.warn("Data",event.target.result);
                //console.warn("File",file[0].name);
                }}}/>
                <small>Dimension 750px x 600px</small>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6 formsingle">
                <label>Product Name</label>
                <input type="text" name="pname" value={pname}  onChange={(event)=>{setPname(event.target.value);}} placeholder="Product Name" />
              </div>
              <div class="col-md-6 formsingle">
                <label>Product Description</label>
                <input type="text" name="description" value={description} onChange={(event)=>{setDescription(event.target.value);}} placeholder="Product description" class="iconblk" />
              </div>
            </div>
            <div class="row">
              <div class="col-md-6 formsingle">
                <label>Product prize</label>
                <input type="text" name="" value={price} onChange={(event)=>{setPrice(event.target.value);}} placeholder="Category prize" />
              </div>
              <div class="col-md-6 formsingle">
                <label>Today Special</label>
                <div class="radiocat"> 
                 <input type="radio" id="enable" name="r1" value="true" onClick={(event)=>{setSpl(event.target.value);}}  /> 
                <label for="enable">Enable</label>
                <input type="radio" id="disable" name="r1" value="false" onClick={(event)=>{setSpl(event.target.value);}}  checked/>
                <label for="disable">Disable</label>
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6 formsingle">
                <label>Offer prize</label>
                <input type="text" name="" value={offer_price} onChange={(event)=>{setOPrice(event.target.value);}} placeholder="Category offer prize" />
              </div>
              </div>
            <div class="col-md-12 formsingle">
              <button class="btnBlue btnSmall" id="save" onClick={createCat} name=""><i class="fas fa-save"></i>Save</button>
              <button class="btnGrey btnSmall" onClick={reSet} name="">Reset</button>
            </div>
          </div>   


         <div class="newblk bgwhite">                
            <div class="subtitle">
              <h3>View Category</h3>  <input className="col-md-6" placeholder="search products" type="text" id="searchT" onChange={(event)=>{setSearch(event.target.value);}}/>
           
            </div>
            <table id="myTable" class="datatable">
              <thead>
                <tr>
                  <th>Product Name</th>
                  <th>Product Image</th>
                  <th>Category Name</th>
                  <th>Description</th>
                  <th>Prce</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
              
          
         
              {pro_data.map(d=>
              <tr>
              
                <td><p key={d.id}>{d.title}</p></td>
                  <td><img src={d.path} alt="" /></td>
                  <td>{d.cname}</td>
                  <td>{d.description}</td>
                  <td>{d.price} QR
                  <br/>
              <b>offer:{d.offer_price}</b>
                  </td>
                  
                  <td>
                  <button id={d._id} onClick={(event)=> /*setCatd(event.target.id)*/window.location="/editpro?id="+d._id} type="button" class="btn btn-success" data-toggle="modal" data-target="#exampleModal">
                  <i class="fa fa-edit"></i></button>
                  <button id={d._id} onClick={handleDel} type="button" class="btn btn-danger"><i class="fa fa-trash"></i></button>
                
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
  
  export default Add_product;