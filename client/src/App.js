
import React from 'react';

import {BrowserRouter,Route,Switch,Link} from 'react-router-dom'

import Home from "./client_home/Home";

function App() {
  return (
   
    <div>
    

       <Switch>
     
    <Route exact path="/" component={Home}/>
      </Switch>
    </div>
   
   
  );
}

export default App;
