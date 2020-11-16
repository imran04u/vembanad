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

//import 'owl.carousel2/dist/assets/owl.carousel.js';
//import 'imports?jQuery=jquery!owl.carousel';



function User_Log(props) {
	const [pass,setPass]=useState("");
	const [email,setEmail]=useState("");
	function btn_click(e){
		e.preventDefault();
		let data={
		  email:email,
		  pass:pass
		}
		console.log(data);
		axios.post('http://localhost:2000/user/login/', data).then(res=>{
		// console.log(res.data.result);
		 
		 if(res.data.result)
		 {
		   // window.location="/cat"
		  console.log(res);
		 localStorage.setItem('user',JSON.stringify(res.data.email));
		 //props.history.push('/')
		 }
		 else{
			console.log(res);
		}
		})
	  }

    

    return (
<div id="page">
		<header>
			<div class="logo">
				<a href="index.html"><img src="images/logo.png" class="img-fluid"/></a>
				<a href="#menu" id="burgernav"><span></span><span></span><span></span></a>
			</div>

			<div class="headerright">
				<nav id="menu">
					<ul>
					<li><a href="/">Home</a></li>
						<li><a href="/menu">Menu</a></li>
						<li><a href="/offers">Offers</a></li>
						<li><a href="/about">About Us</a></li>
						<li><a href="/contact">Contact Us</a></li>
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
					<a href="#cart"><i class="fas fa-cart-plus"></i>Cart</a>
				</div>
			</div>
		</header>
		<section class="innerban subv-1">
			<h1><span>Login</span></h1>
		</section>
		<section class="content register">
			<div class="container">
				<div class="loginBlk">
					<h6>Login</h6>
					<p>Please login to continue ordering</p>

					<div class="wrap-input">
						<input class="inputlog" type="text" onChange={(event)=>{setEmail(event.target.value);}} name="Email Id"/>
						<span class="label-input">Email Id</span>
					</div>
					<div class="wrap-input">
						<input class="inputlog" type="password" onChange={(event)=>{setPass(event.target.value);}} name="Password"/>
						<span class="label-input">Password</span>
					</div>            
					<a href="">Forgot Password?</a>
					<button class="btns btnslogin" onClick={btn_click}>Login</button>
					<div class="registerlink">
						Don't have an account?<a href="/register">Register</a>
					</div>
				</div>
			</div>
		</section>
		<footer class="footer">
			<div class="footer-1 clearfix">
				<div class="container flx">
					<div class="footer-contact clearfix">
						<img src="images/callus.png"/>
						<div class="contact-txt">
							<p>Call us</p>
							<p>+974 4412 5928</p>
						</div>
					</div>
					<div class="footer-contact clearfix">
						<img src="images/callus.png"/>
						<div class="contact-txt">
							<p>Call us</p>
							<p>+974 4412 5928</p>
						</div>
					</div>
					<div class="footer-contact clearfix">
						<ul>
							<li><a href="#">Privacy Policy</a></li>
							<li><a href="#">Terms of sale</a></li>
							<li><a href="#">Terms of use</a></li>
							<li><a href="#">Payments</a></li>
						</ul>
					</div>
					<div class="footer-contact clearfix">
						<ul>
							<li><a href="#">Register</a></li>
							<li><a href="#">Login</a></li>
							<li><a href="#">My Account</a></li>
							<li><a href="#">Order History</a></li>
						</ul>
					</div>
				</div>
			</div>
		<div class="footer-2">
			<div class="container clearfix">
				<div class="footer-2-txt">
					<p>© Copyright 2020 Vembanad Restaurant. All rights reserved</p>
				</div>
				<div class="footer-social-links">
					<a href=""><img src="images/fb.png"/></a>
					<a href=""><img src="images/insta.png"/></a>
					<a href=""><img src="images/twitter.png"/></a>
				</div>
			</div>
		</div>
	</footer>
	</div>	
	
    );
  }
  
  export default User_Log;