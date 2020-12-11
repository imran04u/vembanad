import jquery from "jquery";
import React, {useState,useEffect} from "react";
import ReactDOM from 'react-dom';
import Header from "./Header";
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
import cont from "./images/contact.jpg"
//import 'owl.carousel2/dist/assets/owl.carousel.js';
//import 'imports?jQuery=jquery!owl.carousel';
import CONFIG from '../config';


function Contact() {
	const [data,setData]=useState([]);
	const [banner,setBanner]=useState([]);

    useEffect(()=>{
    
    
  
      setTimeout(() => {
          //axios
		 // alert('hi');  
		 axios.get(`${CONFIG.baseUrl}`).then(res=>{
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
<Header nav="contact"/>
			<section className="innerban subv-1">
				<h1><span>Contact Us</span></h1>
			</section>
			<section className="content">
				<div className="container">
					<div className="row">
						<div className="col-lg-6">
							<div className="contact-box-content">
								<div className="img-holder">
									<img src={cont} alt="Saudi House"/>
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
						<img src={callus} />
						<div className="contact-txt">
							<p>Call us</p>
							<p>+974 4412 5928</p>
						</div>
					</div>
					<div className="footer-contact clearfix">
						<img src={callus} />
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
					<a href="https://www.facebook.com/thevembanadrestaurant" target="_blank"><img src={fb} /></a>
					<a href="https://www.instagram.com/vembanadrestaurant/?hl=en" target="_blank"><img src={insta} /></a>
				</div>
			</div>
		</div>
	</footer>
	</div>	
		
     
    );
  }
  
  export default Contact;