import React,{useState,useEffect} from 'react'
import {stateDrop} from '../fetchAPI/fetchAP'

 const Statedop = ({stateVal,isState,dist,setdist,isdist,distdata,name}) => {
     const[data,setData]=useState([])

    
     
  
  

    useEffect(()=>{
       const getState= async()=>{

           try{
           let data= await stateDrop()
        //    setData(data.data)
        dataSet(data.data)
         
          
        
           }
           catch(err){
               console.log(err)

            
           }
       }

       getState()
    },[])

    const dataSet=(data)=>{
        setData(data)

    }
    
    const onvalChange= async (e)=>{
   
       
        try{
            if(e.target.value==='Total'){
              stateVal('Global')
            }

            else{
                 const fData= await data.find((item)=> item.state===e.target.value)
               
                 stateVal(fData.districtData,
                    fData.confirmed,fData.recovered,fData.deaths,fData.state,false
                    )
              
            }
          
           
        
           
          
           
     
          
           

        }
        catch(err){
            console.log(err)
        }
     



    }

    const ondistChange=(e)=>{
       
        setdist(e.target.value,true)


    }
    

    return (
        
        <div style={{margin:'auto',width:'30%'}}>
           <br/>
          <select name="" id="" style={{width:'100%'}} onChange={(e)=>{
                  onvalChange(e)
                  }}  >
                      
              <option value="Total" >Select-State</option>
              {data.map((item)=>{
                  return <option key={item.id}
                    
                  
                  >{item.state}</option>
              })}
          </select>

          <div>
              {isState?(
                
                  <div>
                        <br/>
                      <select name="" id="" onChange={(e)=>{
                          ondistChange(e)
                      }} style={{width:'100%'}}>
                          <option value="select-district">select-district</option>
                          {dist.map((item)=>{
                              return <option key={item.id}>{item.name}</option>
                          })}
                      </select>
                      <br/>
                      <br/>
                      {isdist?(
                          
                          <marquee><em style={{color:'#222831',fontWeight:'bolder'}}>Confirmed in {name}: {distdata}</em></marquee>
                      ):(null)}
                  </div>
              ):(null)}
          </div>

    
        </div>
    )
}


export default Statedop