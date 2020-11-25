import React, {useState,useEffect} from "react"
import ReactDOM from 'react-dom';
import Header from "./Header";
import Navbar from "./Navbar";
import axios from "axios";
//import {useHistory} from 'react-router-dom'
import { PromiseProvider } from "mongoose";
import {toast} from 'react-toastify';  
import 'react-toastify/dist/ReactToastify.css';  
import CONFIG from './config';
toast.configure()

function Category(props) {
  //const history = useHistory();
  const [fname,setFname]=useState("");
  const [Img,setImg]=useState("");
  const [cat,setCat]=useState("");
  const [catd,setCatd]=useState("");
  const [name,setName]=useState("");
  const [cat_data,setCatdata]=useState([]);
  let d=[];
  const Added = ()=>{  
    toast('Successfully Added') 
         
  }
  const Deleted = ()=>{  
    toast('Successfully Deleted') 
         
  }
  useEffect(()=>{
    //const q=window.location.search;
    //console.log(q.substring(4));
    setTimeout(() => {
      axios.get(`${CONFIG.baseUrl}/login/catdisplay/`,{
        headers: {'auth':`${JSON.parse(localStorage.getItem('auth'))}`}}).then(res=>{
        
       setCatdata(res.data);
        console.log(cat_data);
      })
      
    }, 1000);
    //console.log(catd);
  }, []);
   
    //setCatdata(d);
    function reSet(e){
      e.preventDefault();
      setCat("");

    }
  function handleDel(e){
    e.preventDefault();
    console.log(e.target.id);
    if(e.target.id!="")
    {
      axios.get(`${CONFIG.baseUrl}/login/catdel/${e.target.id}`).then(res=>{
        if(res.data)
        {
          Deleted()
          setInterval(() => {
						window.location="/category"
					},1000)//props.history.push('/category');
        }
        
      })
    }
  }
  function createCat(e){
    e.preventDefault();
    let data={
      fname:fname,
      photo:Img,
      cat:cat
     }
    
     console.log(e.target.id)
     
     axios.post(`${CONFIG.baseUrl}/login/cat/`, data).then(res=>{
       //window.location='/cat';
       if(res.data){
        Added()
        document.getElementById(e.target.id).disabled=true;
       
        setInterval(() => {
          window.location="/category"
        },1000)
        //e.target.reset();
       //props.history.push('/category');
       }
    
     })
     
  }
    return (
      <div className="page-container">  
      <div className="left-content">
        <div className="mother-grid-inner">
         <Header/>
         <div class="content-wrapper">
          
          <div class="titleblk clearfix">       
            <h1>Food Category</h1>
          </div>

          <div class="newblk bgwhite">                
            <div class="subtitle">
              <h3>Create Category</h3>
            </div>
            <div class="row">
              <div class="col-md-6 formsingle">
                <label>Category Name</label>
                <input type="text" name="" value={cat} onChange={(event)=>{setCat(event.target.value);console.log(cat)}} placeholder="Category Name" />
              </div>
              <div class="col-md-6 formsingle">
                <label>Image Upload</label>
                <input type="file" name="" placeholder={name} class="iconblk"  onChange={(event)=>{
                let file=event.target.files;
                let reader=new FileReader();
                reader.readAsDataURL(file[0]);
                reader.onload=(event)=>{
                    setFname(file[0].type.substring(6));
                    setImg(event.target.result);
                    setName(file[0].name)
                console.warn("Data",event.target.result);
                console.warn("File",file[0].type.substring(6));}}}/>
                <small>Dimension 750px x 500px</small>
              </div>
            </div>
            <div class="col-md-12 formsingle">
              <button class="btnBlue btnSmall" id="save" onClick={createCat} name=""><i class="fas fa-save"></i>Save</button>
              <button class="btnGrey btnSmall" onClick={reSet} name="">Reset</button>
            </div>
          </div>   


         <div class="newblk bgwhite">                
            <div class="subtitle">
              <h3>View Category</h3>
            </div>
            <table class="datatable">
              <thead>
                <tr>
                  <th>Category Name</th>
                  <th>Category Image</th>
                  <th>Action</th>
                </tr>
              </thead>

              <tbody>
              
              {cat_data.map(d=>
              <tr>
              
                <td><p key={d.id}>{d.title}</p></td>
                  <td><img src={d.path} alt="" /></td>
                  <td>
                  <button id={d._id} onClick={(event)=> /*setCatd(event.target.id)*/window.location="/editcat?id="+d._id} type="button" class="btn btn-success" data-toggle="modal" data-target="#exampleModal">
                  <i class="fa fa-edit"></i></button>
                    <button id={d._id} onClick={handleDel} type="button" class="btn btn-danger"><i class="fa fa-trash"></i></button>
                  </td>
                </tr>
              )}
         
         



<div className="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog" role="document">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div className="modal-body">
      ...
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Save changes</button>
      </div>
    </div>
  </div>
</div>
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
  
  export default Category;