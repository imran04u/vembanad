//import logo from './logo.svg';
//import '../../assets/images/logo.png';
//import 'https://cdn.materialdesignicons.com/3.0.39/css/materialdesignicons.min.css';
//import  logo from './assets/images/logo.png';
//import   './assets/css/bootstrap.min.css';
//simport  './assets/css/theme.css';
//import  'https://cdn.materialdesignicons.com/3.0.39/css/materialdesignicons.min.css';
//import  'https://use.fontawesome.com/releases/v5.8.2/css/all.css';
//import './App.css';
import React from 'react';
import {BrowserRouter,Route,Switch,Link} from 'react-router-dom'
import Home from "./client_home/Home";
import Login from './Login'
import Dashboard from './Dashboard'
import Category from './Category'
//import adp from './Add_product'
import Add_product from './Add_product';
import Editcat from './Editcat';
import Edit_product from './Edit_product';
import Banner from './Banner';
import EditBanner from './EditBanner';
import Userlist from './Userlist';
import Navbar from './Navbar';
import Sample from './Sample';
import About from './client_home/About'
import Contact from './client_home/Contact'
import user_Dashboard from './client_home/Dashboard'
import Menu from './client_home/Menu'
import Offers from './client_home/Offers'
import Register from './client_home/Register'
import User_Log from './client_home/User_Log'
import Order from './Orderslist'
import Report from './Report'
import AdminDashboard from './AdminDashboard'
import SalesDashboard from './SalesDashboard'
import ProtectedRouter from './protected'
import ProtectedRouters from './protecteds'
function App() {
  return (
   
    <div>
    

       <Switch>
      <Route exact path="/admin" component={Login}/> 
     
     <Route exact path="/" component={Home}/>
     <Route exact path="/about" component={About}/>
     <Route exact path="/contact" component={Contact}/>
     <Route exact path="/user_dash" component={user_Dashboard}/>
     <Route exact path="/menu" component={Menu}/>
     <Route exact path="/offers" component={Offers}/>
     <Route exact path="/register" component={Register}/>
     <Route exact path="/user_log" component={User_Log}/>


     <Route exact path="/user/" component={Userlist}/>

      <Route exact path="/editcat/" component={Editcat}/> 
      <Route exact path="/editpro/" component={Edit_product}/>
      <Route exact path="/editban/" component={EditBanner}/>  
      <ProtectedRouter exact path="/category" component={Category}/> 
      <ProtectedRouter exact path="/pro" component={Add_product}/> 
      <ProtectedRouter exact path="/ban" component={Banner}/> 
      <ProtectedRouter exact path='/sample' component={Sample}/>
      <ProtectedRouter exact path='/order' component={Order}/>
      <ProtectedRouter exact path='/dash' component={AdminDashboard}/>
      <ProtectedRouter exact path='/report' component={Report}/>
      <ProtectedRouters exact path='/sales' component={SalesDashboard}/>
     
      </Switch>
    </div>
   
   
  );
}

export default App;
