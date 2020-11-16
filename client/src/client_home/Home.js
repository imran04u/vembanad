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



function Home(props) {
	const [data,setData]=useState([]);
	const [tspl,setTspl]=useState([]);
	const [offer,setOffer]=useState([]);
	const [tot,setTot]=useState(0);
	const [banner,setBanner]=useState([]);

	const [order,setD]=useState([]);
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
    
       //jquery
       function openNav() {
		document.getElementById("mySidenav").style.width = "25%";
	}

	function closeNav() {
		document.getElementById("mySidenav").style.width = "0";
	}

	var incrementButton = document.getElementById("increment-num");
	var decrementButton = document.getElementById("Decrement-num");
	var span = document.getElementById("cart-dish-num");
	var countDish = 0;
	


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
		 axios.get('http://localhost:2000/home/').then(res=>{
			console.log(res.data);
			//setData(res.data.d);
			setBanner(res.data.b);
			setOffer(res.data.offer);
			setTspl(res.data.t);
			if(localStorage.getItem("data"))
			{
				setD(JSON.parse(localStorage.getItem("data")))
				f();
			}
			
			
		 })   
		  
	  }, 1000);
	  //console.log("or"+order)
	  

    }, []);
    const options = {
		items: 4,
	};

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
					<li className="active"><a href="/">Home</a></li>
						<li><a href="/menu">Menu</a></li>
						<li><a href="/offers">Offers</a></li>
						<li ><a href="/about">About Us</a></li>
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
					<a href="#cart" id="cart-panel" ><i class="fas fa-cart-plus"></i>Cart</a>
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
		
		<div class="wrap-overlay"></div>
		
		<section id="banner">
		<div class="homebanner">
		   <OwlCarousel  className="homebanner" items={1} loop margin={0} dots autoplay autoplayTimeout={7000}>
			{banner.map(b=>(

							<div class="item">
							<div class="hmban-img">
								<img src={b.path} />
							</div>
							<div class="sub-ban">
								<h2>{b.title}</h2>
								<p>{b.description}</p>
								<a href={b.link}>Order Now</a>
							</div>    			
							</div>

					) )}

			
								
			
		</OwlCarousel>
			</div>
		</section>

		
		<section class="abt-us">
		
			<div class="container clearfix">
				<div class="abt-img"><img src={hmeabout} /></div>
				<div class="abt-txt txt">
					<h4>About Us</h4>
					<h2>Vembanad Restaurant</h2>
					<p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
					<p> Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
					<div class="counters clearfix">
						<div id="counts"><span class="count">10</span>
							<p>Years of experience</p>
						</div>
						<div id="counts"><span class="count">100 </span><span class="addsign">+</span>
							<p>Delicious Food Dishes</p>
						</div>
						<div id="counts"><span class="count">40 </span><span class="addsign">+</span>
							<p>Traditional Dishes</p>
						</div>
					</div>
				</div>
			</div>
		</section>
		<section class="todaysOffer clearfix">
			<div class="container clearfix">
				<div class="homeoffer owl-theme">
				<OwlCarousel className="homeoffer" animateOut="fadeOut" loop items={1} autoplay={2000} margin={10} nav dots={false}>

					{offer.map(o=>(
				<div class="item">
						<div class="tdy-offer-txt txt">
							<h4>Special</h4>
							<h2>Today's Offer</h2>
<h3>{o.pname}</h3>
							<p>{o.description}</p>
						</div>
						<div class="tdy-offer-img">
							<img src={o.c_photo}/>
							<img src={o.p_photo}/>
						</div>    			
					</div>	))}	
					</OwlCarousel>
				</div>
			</div>
		</section>

	



					
		<section class="todayspl">
			<div class="container clearfix">
			<div class="spl-head clearfix">
					<div class="spl-title txt">
						<h4>Favourites</h4>
						<h2>Today's Special</h2>
					</div>
					<div class="order-now-btn">
						<a href="menu.html">Order Now</a>
					</div>
					</div>
				
				<div class="spl-dishes clearfix">
			{tspl.map(t=>(
					<div class=" dish">
					<img src={t.path}/>
				<span>{t.price}</span>
				<p>{t.title}</p>
					<a href="/menu">Order now <i class="fa fa-long-arrow-right"></i></a>
					</div>
					))}
					
				
				</div>
			</div>
		</section>
		<section class="grandfeast">
			<div class="container ">
				<div class="grandfeast-txt txt">
					<h4>Favourites</h4>
					<h2>Grand feast is back</h2>
					<h3>Delivered to your doorstep</h3>
					<a href="menu.html">Order Now</a>
				</div>
			</div>	
		</section>
		
		<footer class="footer">
			<div class="footer-1 clearfix">
				<div class="container flx">
					<div class="footer-contact clearfix">
						<img src={callus} />
						<div class="contact-txt">
							<p>Email us</p>
							<p>+974 4412 5928</p>
						</div>
					</div>
					<div class="footer-contact clearfix">
						<img src={callus} />
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
  
  export default Home;