 import jquery from "jquery";
import React, {useState,useEffect} from "react";
import ReactDOM from 'react-dom';
import axios from "axios";
import Header from "./Header";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
//import 'owl.carousel2/dist/assets/owl.carousel.css';
import $ from 'jquery';
//import './https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css';
import './css/bootstrap.min.css';
import './css/plugins.css';
import './css/style.css';
import './css/responsive.css';
import logo from './images/logo.png';
import hmeabout from './images/abtus.png';
import callus from './images/callus.png';
import fb from './images/fb.png';
import insta from './images/insta.png';
import twitter from './images/twitter.png';
//import 'owl.carousel2/dist/assets/owl.carousel.js';
//import 'imports?jQuery=jquery!owl.carousel';
import {toast} from 'react-toastify';  
import 'react-toastify/dist/ReactToastify.css';  
import CONFIG from '../config';
toast.configure()


function Offers() {
	const [data,setData]=useState([]);
	//const [banner,setBanner]=useState([]);
	const notify = ()=>{  
		toast('Added to cart') 
			 
	  }
	  const already = ()=>{  
		toast('Already added') 
			 
	  }
    useEffect(()=>{
    
    
  if(atob(localStorage.getItem("offer"))){
setData(JSON.parse(atob(localStorage.getItem("offer"))));
  }
      setTimeout(() => {
          //axios
		 // alert('hi');  
		 axios.get(`${CONFIG.baseUrl}/home/`).then(res=>{
			console.log(res.data);
			setData(res.data.offer);
			localStorage.setItem("offer",btoa(JSON.stringify(res.data.offer)));
			//setBanner(res.data.b);
		 })      
      }, 1000);
    }, []);
    const options = {
		items: 4,
	};

	function add_cart(e,id,name,rs,path){
		e.preventDefault();
		let result=true;
		let order_data={id:id,name:name,rs:rs,qty:1,path:path};
		//intial 
		if(JSON.stringify(localStorage.getItem("data"))=="null"){
			localStorage.setItem("data",btoa(JSON.stringify([order_data])))
			notify()
		}
		else{
			//another add cart
			let chec=JSON.parse(atob(localStorage.getItem("data")))
			for(let j=0;j<chec.length;j++)
			{//check existing cart
				if(chec[j].id==order_data.id)
				{
					result=false;
					already()
					// setInterval(() => {
					// 	window.location="/menu"
					// },1000)
					break;
					
				}
			}
			if(result)
			{//push data
				chec.push(order_data);
				localStorage.removeItem("data")
				localStorage.setItem("data",btoa(JSON.stringify(chec)));
				notify()
				// setInterval(() => {
				// 	window.location="/offers"
				// },1000)
		
			}
		}
		
		}

    return (
<div id="page">
	<Header nav="offer"/>
		<section className="innerban subv-1">
			<h1><span>Today Offer's</span></h1> 
		</section>
		<section className="content">
			<div className="container">
				<div className="row">
					<div className="col-sm-12">
						<div className="offermenu">
							{data.map(d=>(
								<div className="menulist">
								<div className="dish-img">
									<img src={d.p_photo}/>
								</div>
								<div className="dish-desc">
									<p className="offer-txt">Today Offer</p>
							<h5>{d.pname}</h5>
							<p>{d.description}</p>
								</div>
								<div className="dish-price">
							<span className="offpriz"><i>{d.offer_price} QR</i></span>
							<span className="netpriz"><i>{d.price} QR</i></span>
									<div><a href="" onClick={(event)=>{add_cart(event,d._id,d.pname,d.offer_price,d.p_photo)}}>Add to cart <i className="fas fa-cart-plus"></i></a></div>
								</div>
							</div>

							))}
							
							
							
						</div>
					</div>
				</div>
			</div>
		</section>
		<footer className="footer">
			<div className="footer-1 clearfix">
				<div className="container flx">
					<div className="footer-contact clearfix">
						<img src={callus}/>
						<div className="contact-txt">
							<p>Call us</p>
							<p>+974 4412 5928</p>
						</div>
					</div>
					<div className="footer-contact clearfix">
						<img src={callus}/>
						<div className="contact-txt">
							<p>Call us</p>
							<p>+974 4412 5928</p>
						</div>
					</div>
					<div className="footer-contact clearfix">
						<ul>
							<li><a href="#">Privacy Policy</a></li>
							<li><a href="#">Terms of use</a></li>
							</ul>
							</div>
							<div className="footer-contact clearfix">
							<ul>
							<li><a href="/register">Register</a></li>
							<li><a href="/user_log">Login</a></li>
							</ul>
					</div>
				</div>
			</div>
		<div className="footer-2">
			<div className="container clearfix">
				<div className="footer-2-txt">
					<p>© Copyright 2020 Vembanad Restaurant. All rights reserved</p>
				</div>
				<div className="footer-social-links">
					<a href=""><img src={fb} /></a>
		<a href=""><img src={insta} /></a>
		<a href=""><img src={twitter} /></a>
				</div>
			</div>
		</div>
	</footer>	
	</div>	
		
    );
  }
  
  export default Offers;