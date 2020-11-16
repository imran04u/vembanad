import jquery from "jquery";
import React, {useState,useEffect} from "react";
import ReactDOM from 'react-dom';
import axios from "axios";
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



function Offers() {
	const [data,setData]=useState([]);
	//const [banner,setBanner]=useState([]);

    useEffect(()=>{
    
    
  
      setTimeout(() => {
          //axios
		 // alert('hi');  
		 axios.get('http://localhost:2000/home/').then(res=>{
			console.log(res.data);
			setData(res.data.offer);
			//setBanner(res.data.b);
		 })      
      }, 1000);
    }, []);
    const options = {
		items: 4,
	};

	function add_cart(e,id,name,rs){
		e.preventDefault();
		let result=true;
		let order_data={id:id,name:name,rs:rs,qty:1};
		//intial 
		if(JSON.stringify(localStorage.getItem("data"))=="null"){
			localStorage.setItem("data",JSON.stringify([order_data]))
		}
		else{
			//another add cart
			let chec=JSON.parse(localStorage.getItem("data"))
			for(let j=0;j<chec.length;j++)
			{//check existing cart
				if(chec[j].id==order_data.id)
				{
					result=false;
					break;
				}
			}
			if(result)
			{//push data
				chec.push(order_data);
				localStorage.removeItem("data")
				localStorage.setItem("data",JSON.stringify(chec));
		
			}
		}
		
		}

    return (
<div id="page">
		<header>
			<div className="logo">
				<a href="/"><img src={logo} class="img-fluid"/></a>
				<a href="#menu" id="burgernav"><span></span><span></span><span></span></a>
			</div>

			<div className="headerright">
				<nav id="menu">
					<ul>
					<li><a href="/">Home</a></li>
						<li><a href="/menu">Menu</a></li>
						<li className="active"><a href="/offers">Offers</a></li>
						<li ><a href="/about">About Us</a></li>
						<li><a href="/contact">Contact Us</a></li>
					</ul>
				</nav>
				<div className="search_btn">
					<div className="control">
						<input className="control__input control__input--search" type="search" placeholder="Search Food"/>
						<svg className="control__icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
							<circle cx="11" cy="11" r="8"></circle>
							<line x1="21" y1="21" x2="16.65" y2="16.65"></line>
						</svg>
					</div>
				</div>
				<div className="cartlink">
					<a href="#cart"><i className="fas fa-cart-plus"></i>Cart</a>
				</div>
			</div>
		</header>
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
							<span className="offpriz">QR.<i>{d.offer_price}</i></span>
							<span className="netpriz">QR.<i>{d.price}</i></span>
									<div><a href="" onClick={(event)=>{add_cart(event,d._id,d.pname,d.offer_price)}}>Add to cart <i className="fas fa-cart-plus"></i></a></div>
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
						<img src="images/callus.png"/>
						<div className="contact-txt">
							<p>Call us</p>
							<p>+974 4412 5928</p>
						</div>
					</div>
					<div className="footer-contact clearfix">
						<img src="images/callus.png"/>
						<div className="contact-txt">
							<p>Call us</p>
							<p>+974 4412 5928</p>
						</div>
					</div>
					<div className="footer-contact clearfix">
						<ul>
							<li><a href="#">Privacy Policy</a></li>
							<li><a href="#">Terms of sale</a></li>
							<li><a href="#">Terms of use</a></li>
							<li><a href="#">Payments</a></li>
						</ul>
					</div>
					<div className="footer-contact clearfix">
						<ul>
							<li><a href="#">Register</a></li>
							<li><a href="#">Login</a></li>
							<li><a href="#">My Account</a></li>
							<li><a href="#">Order History</a></li>
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