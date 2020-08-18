import React, { Component } from 'react'
import {withRouter} from 'react-router-dom'

import {fetchTotal} from '../fetchAPI/fetchAP'
import Charts from './Charts'
import Statedop from './Statedop'
import Cards from './Cards'
import Navbar from './Navbar'
let token=""

 class Home extends Component {

     constructor(props){
   super(props)
   this.state={
     dist:[],
     isGlobal:true,
     isState:false,
     confirmed:0,
     recovered:0,
     deaths:0,
     name:'',
     isdist:false,
     distdata:0,
     distname:'',
   
   
   }

   this.dispState=this.dispState.bind(this)
   this.setdist=this.setdist.bind(this)
   this.setLogout=this.setLogout.bind(this)
  
 }
 

  async dispState(disp,disp2,disp3,disp4,name,isdist){
    
  //  console.log(disp)
    if(disp!=='Global'){
         this.setState({dist:disp,isGlobal:false,isState:true,confirmed:disp2,recovered:disp3,deaths:disp4,name,isdist})
         console.log(this.state.dist)
 }

    else{
      
      try{
           const data=  await fetchTotal()
          //  console.log(data.deaths)
          this.setState({
           confirmed:data.confirmed,
           recovered:data.recovered,
           deaths:data.deaths,
           isState:false
          })
          console.log(this.state.totdata)

      }
      catch(err){
        console.log(err)
      }

      
      console.log(this.state)
    }
 
   

  }

    async componentDidMount(){

    if(sessionStorage.getItem('token')){
      token= "Bearer "+sessionStorage.getItem('token')
 
      fetch('http://localhost:5000/home',{
        method:'GET',
        headers:{
          'Authorization':token,
          'Content-Type':'application/json',
          'Accept':'application/json',
        }
      }).then(res=> res.json()).then(data=> {
      console.log(data.message)

      }
    
        
        ).catch(err=>{
        console.log(err)
      })

         try{
           const data=  await fetchTotal()
          //  console.log(data.deaths)
          this.setState({
           confirmed:data.confirmed,
           recovered:data.recovered,
           deaths:data.deaths
          })
          // console.log(this.state.totdata)

      }
      catch(err){
        console.log(err)
      
      }

    }

    else{

       alert('Please login')
        this.props.history.push('/signin')
    

    }
    
    
   

    

  }

   setdist(name,isdist){
    if(name!=='select-district'){
  const data=this.state.dist.find((item)=> item.name===name)
  this.setState({distdata:data.confirmed,isdist,distname:name})
  console.log(this.state.distdata)

    }

    else{
      this.setState({isdist:false})
    }

  
  

  }


  setLogout(logout){
  
    this.setState({logout})
   

  }
  



    render() {
        return (
            <div>
      <React.Fragment>
      <Navbar setLogout={this.setLogout}/>
      <Cards cnf={this.state.confirmed} rec={this.state.recovered} det={this.state.deaths} name={this.state.name} totdata={this.getTot} isstate={this.state.isState}/>
      <Statedop stateVal={this.dispState} isState={this.state.isState} dist={this.state.dist} setdist={this.setdist} isdist={this.state.isdist} distdata={this.state.distdata} name={this.state.distname}/>
      <Charts cnf={this.state.confirmed} rec={this.state.recovered} det={this.state.deaths}/>
      </React.Fragment>
            </div>
        )
    }
}

export default withRouter(Home)



