import React, {useState,useEffect} from "react"
import Header from "./Header";
import Navbar from "./Navbar";
import axios from "axios";
import {toast} from 'react-toastify';  
import 'react-toastify/dist/ReactToastify.css';  
import { PromiseProvider } from "mongoose";
import CONFIG from './config';
toast.configure()
function EditBanner(props) {
  const [fname,setFname]=useState("");
  const [Img,setImg]=useState("");
  const [title,setTitle]=useState("");
  const [description,setDescription]=useState("");
  const [url_link,setUrl_link]=useState("");
  const [catid,setId]=useState("");
  const [banpath,setPath]=useState("");
  const notify = ()=>{  
    toast('Updated Successfully') 
         
  } 

  useEffect(()=>{
    //const q=window.location.search;
    //console.log(q.substring(4));
    
    setTimeout(() => {
      const q=window.location.search;
      console.log(q.substring(4));
      
      axios.get(`${CONFIG.baseUrl}/home/fetch/`+q.substring(4)).then(res=>{
        setTitle(res.data[0].title);
        setDescription(res.data[0].description);
        setPath(res.data[0].path); 
        setUrl_link(res.data[0].link); 
      setId(q.substring(4))

      })
      
    }, 1000);
    //console.log(catd);
  }, []);
   
    //setCatdata(d);
  function createCat(){
    let data={
      fname:fname,
      photo:banpath,
      description:description,
      link:url_link,
      title:title,
      id:catid,
      path:banpath
     }
     
     axios.post(`${CONFIG.baseUrl}/home/ban_edit/`, data).then(res=>{
      console.log(res.data)
    //alert('successfully Updated');
    notify()
    props.history.push("/ban")
     })
  }
    return (
      <div className="page-container">  
      <div className="left-content">
        <div className="mother-grid-inner">
        <Header/>
         <div class="content-wrapper">
          
          <div class="titleblk clearfix">       
            <h1>Banner</h1>
          </div>

          <div class="newblk bgwhite">                
            <div class="subtitle">
              <h3>Edit Banner</h3>
            </div>
            <div class="row">
              <div class="col-md-12 formsingle">
                <label>Banner Name</label>
                <input type="text" name="" value={title} onChange={(event)=>{setTitle(event.target.value);}} placeholder="Banner Name" />
              </div>
              <div class="col-md-12 formsingle">
                <label>Image Upload (Dimension 1920px x 920px)</label><br/>
                <label><img src={banpath} style={{"height":"100px","width":"120px"}}/></label>
                <input type="file" name="" class="iconblk"  onChange={(event)=>{
                let file=event.target.files;
                let reader=new FileReader();
                reader.readAsDataURL(file[0]);
                reader.onload=(event)=>{
                    setFname(file[0].type.substring(6));
                    setImg(event.target.result);
                    setPath(event.target.result);
                console.warn("Data",event.target.result);
                console.warn("File",file[0].type.substring(6));}}}/>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12 formsingle">
                <label>Banner Description</label>
                <input type="text" name="" value={description} onChange={(event)=>{setDescription(event.target.value);}} placeholder="Category Name" />
              </div>
              <div class="col-md-12 formsingle">
                <label>URL link</label>
                <input type="text" name="" value={url_link} onChange={(event)=>{setUrl_link(event.target.value);}} placeholder="Category Name" />
              </div>
              </div>
            <div class="col-md-12 formsingle">
              <button class="btnBlue btnSmall" onClick={createCat} name=""><i class="fas fa-save"></i>Update</button>
              <button class="btnGrey btnSmall" name="">Reset</button>
            </div>
          </div>   


        </div>
      </div>
     <Navbar/>
    <div className="clearfix"> </div>
  </div>
  </div>
    );
  }
  
  export default EditBanner;