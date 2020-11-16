import jquery from "jquery";
import React, {useState,useEffect} from "react";
import {Link} from 'react-router-dom';
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



function Menu(props) {
	const [data,setData]=useState([]);
	const [banner,setBanner]=useState([]);
	const [cat,setCat]=useState([]);
	const [offer,setOffer]=useState([]);
	const [product,setP]=useState([]);
	const [tot,setTot]=useState(0);
	const [order,setD]=useState([]);
	let url="/menu?"
	function change_qty(a,b){
		console.log(a,b);
		let qty_change=JSON.parse(localStorage.getItem("data"))
	for(let j=0;j<qty_change.length;j++){
		if(qty_change[j].id==a)
		{
			qty_change[j].qty=parseInt(b);
		localStorage.removeItem("data")
		localStorage.setItem("data",JSON.stringify(qty_change));
		}
		console.log(qty_change[j]);
	}
}
	function f(){
		let d=JSON.parse(localStorage.getItem("data"));
		console.log(d) 
		let l=0;
		d.map(o=>{
			 l=l+o.qty*o.rs;
			//console.log("tot"+l+" "+tot);
			
		})
		setTot(l)
	}
	function proceed(){
		if(localStorage.getItem("user"))
		{
			if(localStorage.getItem("data"))
			{
				let p={
					order:JSON.parse(localStorage.getItem("data")),
					tot:tot,
					user:localStorage.getItem("user").toString()
				}
				console.log(p.user)
				axios.post('http://localhost:2000/cart/insert/',p).then((res)=>{
					console.log(res.data);
					localStorage.removeItem('data')
					props.history.push('/');
				})
				
			}
			
		}
		else{
			alert("please login first");
		}
	}

    useEffect(()=>{
		$('.count').each(function () {
			$(this).prop('Counter',0).animate({
				Counter: $(this).text()
			}, {
				duration: 3000,
				easing: 'swing',
				step: function (now) {
					$(this).text(Math.ceil(now));
				}
			});
		});
	
	
		
	
	
		$("#cart-panel").click(function(){
			$("body").addClass("cart-show");
		});
		$(".close-cart").click(function(){
			$("body").removeClass("cart-show");
		});
	
		$('.plus').on('click', function() {
			if ($(this).prev().val()) {
				$(this).prev().val(+$(this).prev().val() + 1);
				change_qty($(this).prev().attr('id'),$(this).prev().val());
				f();
			}
		});
		$('.minus').on('click', function() {
			if ($(this).next().val() > 1) {
				if ($(this).next().val() > 1) $(this).next().val(+$(this).next().val() - 1);
				change_qty($(this).next().attr('id'),$(this).next().val());
				f();
			}
		});
	
    
  
      setTimeout(() => {
          //axios
		 // alert('hi');  
		 console.log(window.location.search.substring(1))
		 axios.get('http://localhost:2000/home/menu').then(res=>{
			console.log(res.data);
			setData(res.data.d);
			setBanner(res.data.b);
			setCat(res.data.c);
			
			if(window.location.search.substring(1))
			{
				res.data.offer.map(o=>{
				if(o.cname==window.location.search.substring(1)){
					setOffer(offer=>[...offer,o]);
				}
			})
				res.data.p.map(p=>{
				if(p.cname==window.location.search.substring(1)){
					setP(product=>[...product,p]);
				}
			})
			}
			else{
				setOffer(res.data.offer);
				setP(res.data.p);

			}
			if(localStorage.getItem("data"))
			{
				setD(JSON.parse(localStorage.getItem("data")))
				f();
			}
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
						<li className="active"><a href="/menu">Menu</a></li>
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
		<div id="cart" class="cartpanel">
			<a href="javascript:void(0)" title="Close" class="close-cart">
				<i class="fas fa-times"></i><span>Close</span>
			</a>
	<h2>SHOPPING CART :<p>{order.length}</p></h2>
			<ul>
				
				{order.map(o=>(
					   			<li>
									<div class="cartimg">
										<img src="images/cat-dish-2.jpg" />
									</div>
									<div class="cartdtl">
				<h6>{o.name}</h6>
										<div class="cartaction">
				<div class="rate">{o.rs}</div>
											<div class="quantity">
												<input type="button" value="-" class="minus"/>
												<input type="text" name="quantity" id={o.id}  value={o.qty}  title="Qty" class="qty" size="4"/>
												<input type="button" value="+" class="plus"/> 
											</div>
										</div>
				
									</div>
								</li>

				))}
				
				
			</ul>
			<div class="carttotal">
            <span class="label"> Total: </span>
				<span class="price">Rs. {tot}</span> 
          </div>
          <button class="checkbtn" onClick={proceed}> Proceed to Checkout</button>
		</div>
		
		<section className="innerban subv-1">
			<h1><span>Our Menu</span></h1>
		</section>
		<section className="content">
			<div className="container">
				<div className="row">
					<div className="col-sm-3">
						<ul className="nav-tabs tabs-left">
							<li>Category</li>
							{cat.map(d=>
							
								<li><a href={url+d.title}>{d.title}</a></li>
								)}
							
							
						</ul>
					</div>
					<div className="col-sm-9">
						<div className="mainmenu">
						{offer.map(o=>
								
								<div className="menulist">
								<div className="dish-img">
									<img src={o.path}/>
								</div>
								<div className="dish-desc">
									<p className="offer-txt">Today Offer</p>
						<h5>{o.title}</h5>
						<p>{o.description}</p>
								</div>
								<div className="dish-price">
						<span className="offpriz">QR.<i>{o.offer_price}</i></span>
						<span className="netpriz">QR.<i>{o.price}</i></span>
									<a href="" onClick={(event)=>{
										//localStorage.setItem("data",JSON.stringify([{id:o._id,name:o.title,rs:o.offer_price}]))
										add_cart(event,o._id,o.title,o.offer_price)
										}}>Add to cart <i className="fas fa-cart-plus"></i></a>
								</div>
							</div>

								)}
						{product.map(p=>
							<div className="menulist">
							<div className="dish-img">
								<img src={p.path}/>
							</div>
							<div className="dish-desc">
						<h5>{p.title}</h5>
						<p>{p.description}</p>
							</div>
							<div className="dish-price">
						<span className="netpriz">QR.<i>{p.price}</i></span>
								<a href="" onClick={(event)=>{add_cart(event,p._id,p.title,p.price)}}>Add to cart <i className="fas fa-cart-plus"></i></a>
							</div>
						</div>
							)}
							
	
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
  
  export default Menu;