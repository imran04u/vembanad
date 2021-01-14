//import logo from './logo.svg';
//import '../../assets/images/logo.png';

import React from 'react';

import {BrowserRouter,Route,Switch,Link} from 'react-router-dom'

import Header from "./client_home/Header";
import Home from "./client_home/Home";

function App() {
  return (
   
    <div>
    

       <Switch>
     
     <Route exact path="/" component={Header}/>
     <Route exact path="/home" component={Home}/>
      </Switch>
    </div>
   
   
  );
}

export default App;
