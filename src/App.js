import React from 'react';
import logo from './logo.svg';
import './App.css';

import Home from './components/Home'
import Signup from './components/Signup'
import Signin from './components/Signin'
import {BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom'





class App extends React.Component{
constructor(props){
  super(props)
  this.state={
    logout:false
  }
  this.logOut=this.logOut.bind(this)
}

logOut(logout){
  this.setState(logout)
}
  


  render(){
    return(
  
   <Router>
<Switch>
  <Route exact path="/signup" component={Signup}/>
  <Route exact path="/signin" component={Signin}  />
  <Route exact path="/home" component={Home}  />
  <Route exact path="/" component={Signup}/>
</Switch>
   </Router>

    

    
     

   
 
    )
  }
}
export default App;
