import jquery from "jquery";
import React, {useState,useEffect} from "react";
import ReactDOM from 'react-dom';
import axios from "axios";
import OwlCarousel from 'react-owl-carousel';
import {useFormik} from 'formik';
import * as yup from 'yup';
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
import {toast} from 'react-toastify';  
import 'react-toastify/dist/ReactToastify.css';  
//import 'owl.carousel2/dist/assets/owl.carousel.js';
//import 'imports?jQuery=jquery!owl.carousel';
import CONFIG from '../config';

toast.configure()
function Register(props) {
	const [name,setName]=useState("");
	const [pass,setPass]=useState("");
	const [phone,setPhone]=useState("");
	const [address,setAddress]=useState("");
	const [email,setEmail]=useState("");
	const notify = ()=>{  
        // // inbuilt-notification 
        // toast.warning('Danger') 
        // // inbuilt-notification 
        // toast.success('successful') 
        // // inbuilt-notification 
        // toast.info('GeeksForGeeks') 
        // // inbuilt-notification 
        // toast.error('Runtime error') 
        // // default notification 
        toast('Registered Successfully') 
           
    } 
	const formik=useFormik({
		initialValues:{
		Email:"",
		Address:"",
		Name:"",
		Pass:"",
		Phone:"",CPass:""
		}
		,
		validationSchema:yup.object({
		Email:yup.string()
		.required("Email must be required")
		.email(),
		Address:yup.string()
		.required("Address must be required")
		.min(10,"minimum 2 character")
		.max(60,"maximum 15 character"),
		Name:yup.string()
		.required("Name must be required")
		.min(5,"minimum 5 character")
		.max(20,"maximum 8 character"),
		Phone:yup.number()
		.required("Phone number must be required")
		.typeError("this is not like phone number")
		.positive("phone number doesn't start with minus")
		.integer("phone number only numbers")
		.min(10,"minimum 10 char"),
		Pass:yup.string()
		.required("Password must be required")
		.min(3,"minimum 3 character")
		.max(8,"maximum 8 character"),
		CPass:yup.string().oneOf([yup.ref('Pass')]),
		}),
//store the collection
		onSubmit:(userInputData)=>{
			userInputData.uname=userInputData.Email
			console.log(userInputData)
			axios.post(`${CONFIG.baseUrl}/user/insert`,userInputData).then(res=>{
			console.log(res);
			notify()
			//document.getElementById(event.target.id).disabled=true;
			props.history.push('/user_log');
			//window.location='/user_log?id='+res.data._id;
			})
			}
			})
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
			
				
			</div>
		</header>
		<section className="innerban subv-1">
			<h1><span>Register</span></h1>
		</section>
		<section className="content register">
			<div className="container">
				<div className="loginBlk">
					<h6>Register</h6>
					<p>Please register to continue ordering</p>

					<div className="wrap-input">
					<span className="label-input">Email Id</span>
						<input className="inputlog"  onChange={formik.handleChange} value={formik.values.Email} type="text" name="Email"/>
						
					{formik.errors.Email ?
					<div className="alert-danger">{formik.errors.Email}</div>
					: null}
					</div>
					<div className="wrap-input">
					<span className="label-input">Password</span>
						<input className="inputlog" onChange={formik.handleChange} value={formik.values.Pass} type="password" name="Pass"/>
						
						{formik.errors.Pass ?
					<div className="alert-danger">{formik.errors.Pass}</div>
					: null}
					</div> 
					<div className="wrap-input">
					<span className="label-input">Confirm Password</span>
						<input className="inputlog" onChange={formik.handleChange} value={formik.values.CPass} type="password" name="CPass"/>
						
						{formik.errors.CPass ?
					<div className="alert-danger">{formik.errors.CPass}</div>
					: null}
					</div>
					<h5>Personal Details</h5>
					<div className="wrap-input">
					<span className="label-input">Full Name</span>
						<input className="inputlog"  onChange={formik.handleChange} value={formik.values.Name} type="text" name="Name"/>
						
						{formik.errors.Name ?
					<div className="alert-danger">{formik.errors.Name}</div>
					: null}
					</div>
					<div className="wrap-input">
					<span className="label-input">Contact Number</span>
						<input className="inputlog" onChange={formik.handleChange} value={formik.values.Phone} type="text" name="Phone"/>
						
						{formik.errors.Phone ?
					<div className="alert-danger">{formik.errors.Phone}</div>
					: null}
					</div> 
					<div className="wrap-input">
					<span className="label-input">Address</span>
						<textarea onChange={formik.handleChange} value={formik.values.Address} name="Address" className="inputlog"></textarea>
						
						{formik.errors.Address ?
					<div className="alert-danger">{formik.errors.Address}</div>
					: null}
					</div>            
					<button className="btns btnslogin" id="save" onClick={formik.handleSubmit}>Register</button>
					<div className="registerlink">
						Do you have an account?<a href="/user_log">Login</a>
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
  
  export default Register;