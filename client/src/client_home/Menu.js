import jquery from "jquery";
import React, {useState,useEffect} from "react";
import {Link} from 'react-router-dom';
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
import CONFIG from  '../config';
import {toast} from 'react-toastify';  
import 'react-toastify/dist/ReactToastify.css';  
toast.configure()



function Menu(props) {
	const [data,setData]=useState([]);
	const [banner,setBanner]=useState([]);
	const [cat,setCat]=useState([]);
	const [offer,setOffer]=useState([]);
	const [product,setP]=useState([]);
	const [tot,setTot]=useState(0);
	const [order,setD]=useState([]);
	const notify = ()=>{  
		toast('Added to cart') 
			 
	  }
	  const already = ()=>{  
		toast('Already added') 
			 
	  }
	let url="/menu?"


    useEffect(()=>{
		$('.count').each(function () {
			$(this).prop('Counter',0).animate({
				Counter: $(this).text()
			}, {
				duration: 3000,
				easing: 'swing',
				step: function (now) {
					$(this).text(Math.ceil(now));
				}
			});
		});
	
	
		
	
	
		$("#cart-panel").click(function(){
			$("body").addClass("cart-show");
		});
		$(".close-cart").click(function(){
			$("body").removeClass("cart-show");
		});
	
		$('.plus').on('click', function() {
			if ($(this).prev().val()) {
				$(this).prev().val(+$(this).prev().val() + 1);
			
			}
		});
		$('.minus').on('click', function() {
			if ($(this).next().val() > 1) {
				if ($(this).next().val() > 1) $(this).next().val(+$(this).next().val() - 1);
				
			}
		});
	
    
  
      setTimeout(() => {
          //axios
		 // alert('hi');  
		 console.log(window.location.search.substring(1))
		 axios.get(`${CONFIG.baseUrl}/home/menu/`).then(res=>{
			console.log(res.data);
			setData(res.data.d);
			setBanner(res.data.b);
			setCat(res.data.c);
			
			if(window.location.search.substring(1))
			{
				res.data.offer.map(o=>{
				if(o.cname==window.location.search.substring(1)){
					setOffer(offer=>[...offer,o]);
				}
			})
				res.data.p.map(p=>{
				if(p.cname==window.location.search.substring(1)){
					setP(product=>[...product,p]);
				}
			})
			}
			else{
				setOffer(res.data.offer);
				setP(res.data.p);

			}
			if(localStorage.getItem("data"))
			{
				setD(JSON.parse(localStorage.getItem("data")))
			
			}
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
	localStorage.setItem("data",JSON.stringify([order_data]))
	notify()
	// setInterval(() => {
	// 	window.location="/menu"
	// },1000)
}
else{
	//another add cart
	let chec=JSON.parse(localStorage.getItem("data"))
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
		localStorage.setItem("data",JSON.stringify(chec));
		notify()
		//window.location="/menu";
		// setInterval(() => {
		// 	window.location="/menu"
		// },1000)

	}
}

}
    return (
<div id="page">
<Header nav="menus"/>
		
		<section className="innerban subv-1">
			<h1><span>Our Menu</span></h1>
		</section>
		<section className="content">
			<div className="container">
				<div className="row">
					<div className="col-md-3">
						<ul className="nav-tabs tabs-left">
							<li>Category</li>
							{cat.map(d=>
							
								<li><a href={url+d.title}>{d.title}</a></li>
								)}
							
							
						</ul>
					</div>
					<div className="col-md-9">
						<div className="mainmenu">
						{offer.map(o=>
								
								<div className="menulist">
								<div className="dish-img">
									<img src={o.path}/>
								</div>
								<div className="dish-desc">
									<p className="offer-txt">Today Offer</p>
						<h5>{o.title}</h5>
						<p>{o.description}</p>
								</div>
								<div className="dish-price">
						<div><span className="offpriz"><i>{o.offer_price} QR</i></span>
						<span className="netpriz"><i>{o.price} QR</i></span></div>
									<a href="" onClick={(event)=>{
										//localStorage.setItem("data",JSON.stringify([{id:o._id,name:o.title,rs:o.offer_price}]))
										add_cart(event,o._id,o.title,o.offer_price,o.path)
										}}>Add to cart <i className="fas fa-cart-plus"></i></a>
								</div>
							</div>

								)}
						{product.map(p=>
							<div className="menulist">
							<div className="dish-img">
								<img src={p.path}/>
							</div>
							<div className="dish-desc">
						<h5>{p.title}</h5>
						<p>{p.description}</p>
							</div>
							<div className="dish-price">
						<div><span className="netpriz">QR.<i>{p.price}</i></span></div>
								<a href="" onClick={(event)=>{add_cart(event,p._id,p.title,p.price,p.path)}}>Add to cart <i className="fas fa-cart-plus"></i></a>
							</div>
						</div>
							)}
							
	
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
  
  export default Menu;