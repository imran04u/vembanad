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



function Dashboard() {
	const [data,setData]=useState([]);
	const [banner,setBanner]=useState([]);

    useEffect(()=>{
    
    
  
      setTimeout(() => {
          //axios
		 // alert('hi');  
		 axios.get('http://localhost:2000/').then(res=>{
			console.log(res.data);
			setData(res.data.d);
			setBanner(res.data.b);
		 })      
      }, 1000);
    }, []);
    const options = {
		items: 4,
	};

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
						<li><a href="/offers">Offers</a></li>
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
			<h1><span>Profile</span></h1>
		</section>
		<section className="content register">
			<div className="container">
				<div className="profileblk">
					<h6>Profile</h6>
					<div className="wrap-input">
					<input className="inputlog" type="text" value="Imran Rovan"/>
					<span className="label-input active">Full Name</span>
				</div>
				<div className="wrap-input">
					<input className="inputlog" type="text" value="8113081130"/>
					<span className="label-input active">Contact Number</span>
				</div> 
				<div className="wrap-input">
					<textarea className="inputlog" value="">42 KhajaLine Street, palakkarai, Thennur, Trichy</textarea>
					<span className="label-input active">Address</span>
				</div>     

					<button className="btns btnslogin">Update</button>
					
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
  
  export default Dashboard;