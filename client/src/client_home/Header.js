import React, {useState,useEffect} from "react";
import $ from 'jquery';
import './css/bootstrap.min.css';
import './css/plugins.css';
import './css/style.css';
import './css/responsive.css';
import axios from "axios";
import {toast} from 'react-toastify';  
import 'react-toastify/dist/ReactToastify.css';  
import CONFIG from '../config';
import logo from './images/logo.png';
toast.configure()
function Header(props) {
    const notify = ()=>{  
		toast('Item removed') 
			 
      }
      const checouts = ()=>{  
		toast('Checkout successfully') 
			 
      }
      const login=()=>{
          toast("Login to continue")
      }
    const [address,setAddress]=useState("");
    const [order,setD]=useState([]);
    const [tot,setTot]=useState(0);
    const [tologin,setLogin]=useState({});
    const [logout,setLogout]=useState({});
    
    function change_qty(a,b){
		console.log(a,b);
		let qty_change=JSON.parse(localStorage.getItem("data"))
	for(let j=0;j<qty_change.length;j++){
		if(qty_change[j].id==a)
		{
			qty_change[j].qty=parseInt(b);
		//localStorage.removeItem("data")
		localStorage.setItem("data",JSON.stringify(qty_change));
		}
		else{
			console.log("not changed")
		}
		console.log(qty_change[j]);
	}
}
function f(){
	let d=JSON.parse(localStorage.getItem("data"));
	console.log(d) 
	let l=0;
	d.map(o=>{
		 l=l+o.qty*o.rs;
		//console.log("tot"+l+" "+tot);
		
	})
	//setTot(l)
	document.getElementById("gt").textContent=l;
	//console.log(document.getElementById("gt"))
}

function proceed(){
    document.getElementById("p").disabled=true;
	if(localStorage.getItem("user"))
	{
		if(localStorage.getItem("data"))
		{
			let p={
				order:JSON.parse(localStorage.getItem("data")),
				tot:document.getElementById("gt").textContent,
				user:localStorage.getItem("user"),
				address:address,
				phone:localStorage.getItem("phone")
			}
			console.log(p.user)
			axios.post(`${CONFIG.baseUrl}/cart/insert/`,p).then((res)=>{
				console.log(res.data);
                localStorage.removeItem('data')
                document.getElementById("p").disabled=false;
                //props.history.push('/');
                checouts()
				setInterval(() => {
                    window.location="/"
                },1000)
			})
			
		}
		
	}
	else{
		login()
        setInterval(() => {
            window.location="/user_log"
        },1000)
    }
}
function plus(v){
	console.log(v)
	var inc=Number(document.getElementById(v).value)+1
	document.getElementById(v).value=inc;
	change_qty(document.getElementById(v).id,inc)
	 f()
	
}
function minus(v){
	console.log(document.getElementById(v).value)
	if(Number(document.getElementById(v).value)>1){
		var dec=Number(document.getElementById(v).value)-1
		document.getElementById(v).value=dec;
		change_qty(document.getElementById(v).id,dec)
		f()	
	}
	else{
		console.log("final dec")
		let items=JSON.parse(localStorage.getItem("data"))
		var index=items.findIndex(i=> i.id == v)
		items.splice(index, 1)
		console.log(items);
		localStorage.setItem("data",JSON.stringify(items))
		notify()
		//window.location='/';
		//history.replace(loc)
		
	}
}

useEffect(()=>{

	$("#cart-panel").click(function(){
		$("body").addClass("cart-show");
	});
	$(".close-cart").click(function(){
		$("body").removeClass("cart-show");
	});

    setTimeout(() => {
        //axios
        document.getElementById(props.nav).classList="active";
        if(localStorage.getItem('id'))
        {
            setLogout({"display":"none"});     
         
        }
        else{
            setLogin({"display":"none"}); 
           
        }
         // alert('hi');  
       axios.get(`${CONFIG.baseUrl}/home/`).then(res=>{
          console.log(res.data);
         
          console.log(props.history);
          if(localStorage.getItem("address")){
              setAddress(localStorage.getItem("address"))
          }
          if(localStorage.getItem("data"))
          {
              setD(JSON.parse(localStorage.getItem("data")))
              f();
          }
    
       })   
        
    }, 1000);
    //console.log("or"+order)
    setInterval(()=>{
        if(localStorage.getItem("data"))
        {
            setD(JSON.parse(localStorage.getItem("data")))
            f();
        }
    },1000);

  }, []);
  return(<div>
    <header>
    <div class="logo">
        <a href="/"><img src={logo} class="img-fluid"/></a>
        <a href="#menu" id="burgernav"><span></span><span></span><span></span></a>
    </div>

    <div class="headerright">
        <nav id="menu">
            <ul>
            <li id="home"><a  href="/">Home</a></li>
                <li id="menus"><a href="/menu">Menu</a></li>
                <li id="offer"><a href="/offers">Offers</a></li>
                <li id="about"><a href="/about">About Us</a></li>
                <li id="contact"><a href="/contact">Contact Us</a></li>
                <li id="login" style={logout}><a href="/user_log">Login</a></li>
                <li id="user" style={tologin}><a href="/user_dash"><i class="fas fa-user"></i></a></li>
                <li id="logout" style={tologin} ><a href="" onClick={(e)=>{e.preventDefault();localStorage.clear();window.location='/user_log';}}><i className="fas fa-sign-out-alt"></i></a></li>
                
            </ul>
        </nav>
        <div class="search_btn">
            <div class="control">
                <input class="control__input control__input--search" type="search" placeholder="Search Food"/>
                <svg class="control__icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
            </div>
        </div>
        <div class="cartlink">
            <a href="#cart" id="cart-panel" ><i class="fas fa-cart-plus"></i>{order.length}</a>
        </div>
    </div>
</header>
<div id="cart" class="cartpanel">
    <a href="javascript:void(0)" title="Close" class="close-cart">
        <i class="fas fa-times"></i><span>Close</span>
    </a>
<h2>SHOPPING CART :</h2>
    <ul>
        
        {order.map(o=>(
                           <li>
                            <div class="cartimg">
                                <img src={o.path} />
                            </div>
                            <div class="cartdtl">
        <h6>{o.name}</h6>
                                <div class="cartaction">
        <div class="rate">{o.rs}</div>
                                    <div class="quantity" key={o.id}>
                                        <input type="button"  value="-" onClick={(e)=>{ e.preventDefault(); minus(o.id); }}  class="minus"/>
                                        <input type="text" name="quantity" id={o.id}  value={o.qty}  title="Qty" class="qty" size="4"/>
                                        <input type="button" value="+" onClick={(e)=>{ e.preventDefault(); plus(o.id); }} class="plus"/> 
                                    </div>
                                </div>
        
                            </div>
                        </li>

        ))}
        
        
    </ul>
    <div class="carttotal">
    <span class="label"> Total: </span>
        <span class="price"> <span id="gt"> {tot}</span>QR</span> 
  </div>
  <button class="checkbtn" id="p" onClick={proceed}> Proceed to Checkout</button>
  <label class="labcart">Delivery Address</label>
  <textarea class="addcart" type="text" onChange={(event)=>{setAddress(event.target.value);}} value={address}></textarea>
</div>

<div class="wrap-overlay"></div>
</div>
  )

}

export default Header;
