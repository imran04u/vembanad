
import React from 'react';

import {BrowserRouter,Route,Switch,Link} from 'react-router-dom'

import Home from "./client_home/Home";
import Menu from "./client_home/Menu";
function App() {
  return (
   
    <div>
    

       <Switch>
     
    <Route exact path="/" component={Home}/>
     <Route exact path="/menu" component={Menu}/>
      </Switch>
    </div>
   
   
  );
}

export default App;
