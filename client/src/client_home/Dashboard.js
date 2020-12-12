import jquery from "jquery";
import React, {useState,useEffect} from "react";
import ReactDOM from 'react-dom';
import axios from "axios";
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Header from "./Header";
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
import CONFIG from '../config';


//import 'owl.carousel2/dist/assets/owl.carousel.js';
//import 'imports?jQuery=jquery!owl.carousel';



function Dashboard() {
	const [data,setData]=useState([]);


    useEffect(()=>{
    
    
  
      setTimeout(() => {
          //axios
		 // alert('hi');  
		 axios.get(`${CONFIG.baseUrl}/user/fetchorder/`+localStorage.getItem("user")).then(res=>{
			//console.log(res.data);
			setData(res.data);

		 })      
      }, 1000);
    }, []);
    const options = {
		items: 4,
	};

    return (
<div id="page">
		<Header nav="user" />
		<section className="innerban subv-1">
			<h1><span>Order History</span></h1>
		</section>
		<section className="content register">
			<div className="container">
				<div className="profileblk">
					<h6>Total oreders({data.length})</h6>
					<table className="datatable ordertable">
						<thead>
						<tr>
                  <th>Order Id</th>
                  <th>Order Date</th>
                  <th>Order Details</th>
                  <th>Status</th>
				  <th>Grand Total</th>
                 
                </tr>
						</thead>
						<tbody>
						{data.map(d=>
              <tr key={d._id}>
                <td><span class="id">{d._id}</span></td>
                <td><span>{d.created.split("T")[0]}</span></td>
				<td>
						<table>
                      <tr>
                        <th>Item Name</th>
                        <th>No. Of Item</th>
                        <th>Total</th>
                      </tr>
					  {d.product.map(p=>(
                     <tr>
                     <td>{p[0].name}</td>
                  <td>{p[0].qty}</td>
                  <td>{p[0].rs}</td>
                   </tr>
                  ))}
					  </table>
						</td>
              			
						
              <td><label title={d.status} class="stat">{d.status}</label></td>
			  <td>{d.total}</td>
						</tr>)}</tbody>

					</table>
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