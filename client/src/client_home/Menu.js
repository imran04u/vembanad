
import React, {useState,useEffect} from "react";
import {Link} from 'react-router-dom';
import ReactDOM from 'react-dom';
import axios from "axios";
import Header from "./Header";

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



function Menu(props) {

    return (
<div id="page">
<Header nav="menus"/>
		
		<section className="innerban subv-1">
			<h1><span>Our Menu</span></h1>
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
  
  export default Menu;