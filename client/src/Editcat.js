import React, {useState,useEffect} from "react"
import Header from "./Header";
import Navbar from "./Navbar";
import axios from "axios";

function Editcat() {
  const [fname,setFname]=useState("");
  const [Img,setImg]=useState("");
  const [cat,setCat]=useState("");
  const [catid,setId]=useState("");
  
  useEffect(()=>{
    //const q=window.location.search;
    //console.log(q.substring(4));
    
    setTimeout(() => {
      const q=window.location.search;
      console.log(q.substring(4));
      
      axios.get('http://localhost:2000/login/catd/'+q.substring(4)).then(res=>{
      setCat(res.data[0].title); 
      setId(q.substring(4))
      })
      
    }, 1000);
    //console.log(catd);
  }, []);
   
    //setCatdata(d);
  function createCat(){
    let data={
      fname:fname,
      photo:Img,
      cat:cat,
      id:catid
     }
     
     axios.post('http://localhost:2000/login/catedit/', data).then(res=>{
      console.log(res.data)
    alert('successfully Updated');
    window.location="/category"
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
              <div class="col-md-12 formsingle">
                <label>Category Name</label>
                <input type="text" name="" value={cat} onChange={(event)=>{setCat(event.target.value);console.log(cat)}} placeholder="Category Name" />
              </div>
              <div class="col-md-12 formsingle">
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
  
  export default Editcat;