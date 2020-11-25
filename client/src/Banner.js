import React, {useState,useEffect} from "react"
import Header from "./Header";
import Navbar from "./Navbar";
import axios from "axios";
import {useHistory} from 'react-router-dom'
import { PromiseProvider } from "mongoose";
import {toast} from 'react-toastify';  
import 'react-toastify/dist/ReactToastify.css';  
import CONFIG from  './config';
toast.configure()
function Banner(props) {
  //const history = useHistory();
  const [fname,setFname]=useState("");
  const [Img,setImg]=useState("");
  const [bname,setBname]=useState("");
  const [description,setDescription]=useState("");
  const [banner_link,setBanner_link]=useState("#");
  const [ban_data,setBandata]=useState([]);
  let d=[];
  const Added = ()=>{  
    toast('Added Successfully') 
         
  } 
  const Deleted = ()=>{  
    toast('Deleted Successfully') 
         
  } 
  useEffect(()=>{
    //const q=window.location.search;
    //console.log(q.substring(4));
    setTimeout(() => {
      axios.get(`${CONFIG.baseUrl}/home/banner/`).then(res=>{
        
        setBandata(res.data);
        console.log(ban_data);
      })
      
    }, 1000);
    //console.log(catd);
  }, []);
   
    //setCatdata(d);
  function handleDel(e){
    e.preventDefault();
    console.log(e.target.id);
    if(e.target.id!="")
    {
      axios.get(`${CONFIG.baseUrl}/home/del_ban/${e.target.id}`).then(res=>{
        //alert('successfully deleted');
        Deleted()
        setInterval(() => {
          window.location="/ban"
        },1000)
      })
    }
  }
  function createCat(e){
    e.preventDefault();
    let data={
      fname:fname,
      photo:Img,
      bname:bname,
      description:description,
      banner_link:banner_link
      
     }
     console.log(data)
     axios.post(`${CONFIG.baseUrl}/home/add_ban/`, data).then(res=>{
       Added()
      document.getElementById(e.target.id).disabled=true;
      setInterval(() => {
        window.location="/ban"
      },1000)
    //alert('successfully added');
    //e.target.reset();
   //history.push('/cat');
     })
  }
    return (
      <div className="page-container">  
      <div className="left-content">
        <div className="mother-grid-inner">
         <Header/>
         <div class="content-wrapper">
          
          <div class="titleblk clearfix">       
            <h1>Banner Management</h1>
          </div>

          <div class="newblk bgwhite">                
            <div class="subtitle">
              <h3>Create Banner</h3>
            </div>
            <div class="row">
              <div class="col-md-6 formsingle">
                <label>Banner Name</label>
                <input type="text" name="" value={bname} onChange={(event)=>{setBname(event.target.value);}} placeholder="Banner Name" />
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
                console.warn("File",file[0].type.substring(6));}}}/>
              </div>
            </div>
            <div class="row">
              <div class="col-md-6 formsingle">
                <label>Description</label>
                <input type="text" name="" value={description} onChange={(event)=>{setDescription(event.target.value);}} placeholder="Banner description" />
              </div>
              <div class="col-md-6 formsingle">
                <label>Banner Link</label>
                <input type="text" name="" value={banner_link} onChange={(event)=>{setBanner_link(event.target.value);}} placeholder="Banner link" />
              </div>
              </div>
            <div class="col-md-12 formsingle">
              <button class="btnBlue btnSmall" id="save" onClick={createCat} name=""><i class="fas fa-save"></i>Save</button>
              <button class="btnGrey btnSmall" name="">Reset</button>
            </div>
          </div>   


         <div class="newblk bgwhite">                
            <div class="subtitle">
              <h3>View Banner</h3>
            </div>
            <table class="datatable">
              <thead>
                <tr>
                  <th>Banner Name</th>
                  <th>Banner Image</th>
                  <th>Description</th>
                  <th>Link</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
              
              {ban_data.map(d=>
              <tr key={d.id}>
              
                <td><p >{d.title}</p></td>
                
                  <td><img src={d.path} alt="" /></td>
                  <td><p >{d.description}</p></td>
                  <td><p >{d.link}</p></td>
                
                  <td>
                  <button id={d._id} onClick={(event)=> /*setCatd(event.target.id)*/window.location="editban/?id="+d._id} type="button" class="btn btn-success" data-toggle="modal" data-target="#exampleModal">
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
  
  export default Banner;