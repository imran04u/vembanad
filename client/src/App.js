
import React from 'react';

import {BrowserRouter,Route,Switch,Link} from 'react-router-dom'

import Home from "./client_home/Home";
import About from './client_home/About'
import Contact from './client_home/Contact'
import user_Dashboard from './client_home/Dashboard'
import Menu from './client_home/Menu'
import Offers from './client_home/Offers'
import Register from './client_home/Register'
import User_Log from './client_home/User_Log'
import ProtectedRouter from './protected'
import AdminDashboard from './AdminDashboard'
import Login from './Login'


function App() {
  return (
   
    <div>
    

       <Switch>
     
     <Route exact path="/" component={Home}/>
     <Route exact path="/about" component={About}/>
     <Route exact path="/contact" component={Contact}/>
     <Route exact path="/user_dash" component={user_Dashboard}/>
     <Route exact path="/menu" component={Menu}/>
     <Route exact path="/offers" component={Offers}/>
     <Route exact path="/register" component={Register}/>
     <Route exact path="/user_log" component={User_Log}/>
      <Route exact path="/admin" component={Login}/> 
      <ProtectedRouter exact path='/dash' component={AdminDashboard}/>

      </Switch>
    </div>
   
   
  );
}

export default App;
