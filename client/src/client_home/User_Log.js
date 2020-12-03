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
import {toast} from 'react-toastify';  
import 'react-toastify/dist/ReactToastify.css';  
import CONFIG from '../config';
toast.configure()

function User_Log(props) {
	const [pass,setPass]=useState("");
	const [email,setEmail]=useState("");
	const [msg,setMsg]=useState("");
	const success = ()=>{  
		toast("Login Successfull") 
			 
	  } 
	  const invalid = ()=>{  
		toast("Invalid") 
			 
	  } 
	function btn_click(e){
		e.preventDefault();
		let data={
		  email:email,
		  pass:pass
		}
		console.log(data);
		axios.post(`${CONFIG.baseUrl}/user/login/`, data).then(res=>{
		// console.log(res.data.result);
		 
		 if(res.data.result)
		 {
		   // window.location="/cat"
		  console.log(res);
		 localStorage.setItem('user',res.data.email);
		 localStorage.setItem('address',res.data.address);
		 localStorage.setItem('phone',res.data.phone);
		 localStorage.setItem('id',res.data.id);
		
		 success()
		 props.history.push('/')
		 }
		 else{
		
			invalid()
		}
		})
	  }

    

    return (
<div id="page">
		<header>
			<div class="logo">
			<a href="/"><img src={logo} class="img-fluid"/></a>
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
						<li className="active"><a href="/user_log">Login</a></li>
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
					<span class="label-input">Email Id</span>
						<input class="inputlog" type="text" onChange={(event)=>{setEmail(event.target.value);}} name="Email Id"/>
						
					</div>
					<div class="wrap-input">
					<span class="label-input">Password</span>
						<input class="inputlog" type="password" onChange={(event)=>{setPass(event.target.value);}} name="Password"/>
						
					</div>            
					
					<button class="btns btnslogin" onClick={btn_click}>Login</button>
					<div class="registerlink">
						Don't have an account?<a href="/register">Register</a>
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
  
  export default User_Log;