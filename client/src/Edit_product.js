import React, {useState,useEffect} from "react"
import Header from "./Header";
import Navbar from "./Navbar";
import axios from "axios";
import {toast} from 'react-toastify';  
import 'react-toastify/dist/ReactToastify.css';  
import CONFIG from './config';
toast.configure()

function Edit_product(props) {
  const [cname,setCname]=useState("");
  const [Img,setImg]=useState("");
  const [pname,setPname]=useState("");
  const [fname,setFname]=useState("");
  const [description,setDescription]=useState("");
  const [price,setPrice]=useState("");
  const [offer_price,setOPrice]=useState("");
  const [spl,setSpl]=useState("");
  const [propath,setPath]=useState("");
  const [cat_data,setCatdata]=useState([]);
  const notify = ()=>{  
    toast('Updated successfully') 
         
  } 
 
 // const [pro_data,setPdata]=useState([]);
  useEffect(()=>{
    setTimeout(() => {
      const q=window.location.search;
      axios.get(`${CONFIG.baseUrl}/product/fetch/`+q.substring(4)).then(res=>{
        setCatdata(res.data.b);
      //setPdata(res.data.a);
      
      
        console.log(cat_data);
       // console.log(pro_data);
        setPname(res.data.a[0].title);
      setDescription(res.data.a[0].description);
      setPrice(res.data.a[0].price);
      setOPrice(res.data.a[0].offer_price);
      setPath(res.data.a[0].path); 
      })
      
    }, 1000);
  }, []);
  
   
  function createCat(e){
    const q=window.location.search;
    e.preventDefault();
    let data={
      photo:propath,
      cname:cname,
      fname:fname,
      pname:pname,
      description:description,
      offer_price:offer_price,
      price:price,
      spl:spl,
      id:q.substring(4),
      path:propath
      
     }
     console.log(data)
     axios.post(`${CONFIG.baseUrl}/product/update`, data).then(res=>{
     //alert('succesfully updated');
      notify()
     props.history.push('/pro');
     //window.location="/pro"
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
              <h3>Update Product</h3>
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
                <label>Image Upload</label><br/>
                <label><img src={propath} style={{"height":"200px","width":"200px"}}/></label>
                <input type="file" name="" class="iconblk"  onChange={(event)=>{
                let file=event.target.files;
                let reader=new FileReader();
                reader.readAsDataURL(file[0]);
                reader.onload=(event)=>{
                    setFname(file[0].type.substring(6));
                    setImg(event.target.result);
                console.warn("Data",event.target.result);
                setPath(event.target.result);
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
                <input type="radio" name="r1" value="true" onClick={(event)=>{setSpl(event.target.value);}}  />Enable
                <input type="radio" name="r1" value="false" onClick={(event)=>{setSpl(event.target.value);}}  checked/>Disable
              
              </div>
            </div>
            <div class="row">
              <div class="col-md-6 formsingle">
                <label>Offer prize</label>
                <input type="text" name="" value={offer_price} onChange={(event)=>{setOPrice(event.target.value);}} placeholder="Category offer prize" />
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
  
  export default Edit_product;