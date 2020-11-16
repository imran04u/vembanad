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



function Contact() {
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
						<li className="active"><a href="/contact">Contact Us</a></li>
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
				<h1><span>Contact Us</span></h1>
			</section>
			<section className="content">
				<div className="container">
					<div className="row">
						<div className="col-lg-6">
							<div className="contact-box-content">
								<div className="img-holder">
									<img src="images/contact.jpg" alt="Saudi House"/>
								</div>
								<div className="text-holder">
									<div className="row">
										<div className="col-md-5 col-sm-12">
											<div className="opening-hours">
												<div className="title-box center">
													<h3>Location</h3>
												</div>
												<div className="inner-content">
													<p>Vembanad Restaurant <br/>
														Barwa Village, <br/>
													Doha, Qatar</p>
												</div>
											</div>
										</div>
										<div className="col-md-7 col-sm-12">
											<div className="quick-contact-box">
												<div className="title-box">
													<h3>Contact</h3>
												</div>
												<ul>
													<li> <p>+974 4412 5928</p> </li>
													<li>
														<p><a href="mailto:vembanadqatar@gmail.com">vembanadqatar@gmail.com</a></p>
													</li>
												</ul>
											</div>
										</div>
									</div>
								</div>
							</div>
						</div>
						<div className="col-lg-6">
							<div className="mapblk">
							<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d593.6603738001678!2d51.58250896833644!3d25.21356119383839!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e45cf859adc444b%3A0x2f4d0d5b831f9141!2sVembanad%20Restaurant!5e0!3m2!1sen!2sin!4v1604424339478!5m2!1sen!2sin" width="100%" height="400" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0"></iframe>
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
  
  export default Contact;