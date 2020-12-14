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
import about2 from './images/about-3.jpg';
import about3 from './images/about-5.jpg';
import about4 from './images/about-1.jpg';
import vision from './images/vision.png';
import chef from './images/chef.png';
import CONFIG from '../config';



function About() {
	const [data,setData]=useState([]);
	const [banner,setBanner]=useState([]);

	useEffect(()=>{
		
		
		
		setTimeout(() => {
          //axios
		 // alert('hi');  
		 axios.get(`${CONFIG.baseUrl}`).then(res=>{
		 	var x=btoa(JSON.stringify(res.data));
		 	console.log("encode"+x);
		 	console.log("decode"+atob(x));
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
		<Header nav="about"/>
		<section className="innerban subv-1">
		<h1><span>About Us</span></h1>
		</section>
		<section className="content">
		<div className="container">
		<div className="row">
		<div className="col-md-6">
		<div className="abtdtls">
		<h4>About Us</h4>
		<h3>Vembanad Restaurant</h3>
		<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet.</p>  
		</div>
		</div>
		<div className="col-md-6">
		<div className="embed-responsive embed-responsive-16by9">
		<iframe width="100%"  src="https://www.youtube.com/embed/fCuWB9E_6L0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
		</div>
		</div>
		</div>

		<div className="fast-text-container row">
		<div className="col-md-2">
		<h2>Our Story</h2>
		</div>
		<div className="fast-text col-md-10">
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
		<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.Lorem ipsum dolor sit amet.</p>            
		</div>
		</div>
		<div className="vision">
		<div className="row">
		<div className="col-md-4">
		<img src={about2} alt="" className="img-fluid"/>
		<img src={about3} alt="" className="over"/>
		</div>
		<div className="col-md-8">
		<img src={vision} alt="Our Vision"/>
		<h2>Our Vision</h2>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
		<img src={chef} alt="Our Service"/>
		<h2>Our Mission</h2>
		<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
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
		<p>Mail us</p>
		<p>vembanadqatar@gmail.com</p>
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
			<a href="https://www.facebook.com/thevembanadrestaurant" targer="_blank"><img src={fb} /></a>
			<a href="https://www.instagram.com/vembanadrestaurant" targer="_blank"><img src={insta} /></a>
		</div>
		</div>
		</div>
		</footer>

		</div>	

		
		);
}

export default About;