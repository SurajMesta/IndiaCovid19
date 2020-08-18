import React,{useState,useEffect} from 'react'
import CountUp from 'react-countup'



 const Cards = ({cnf,rec,det,name,totdata,isstate}) => {

    return (       
               <div>
         {cnf?(
           <div>
             
        <div className="text-center card1" >
          <div className="card" style={{borderTop:'5px solid #f66d03',borderBottom:'5px solid green'}} >
                 <div className="card-title">
                     {isstate?(null):( <h5>Total Statistics For India... </h5>)}
        
         {isstate?(
                 <h5><span style={{color:'#596e79'}}>State: {name}</span></h5>
         ):(null)}
     
             </div>
         
                   <h5><span style={{color:'blue'}}>Confirmed:</span> <CountUp start={0} end={cnf} separator={","} duration={5}/></h5>
                     <h5> <span style={{color:'green'}}>Recovered:</span> <CountUp start={0} end={rec} separator={","} duration={5}/></h5>
                     <h5> <span style={{color:'red'}}>Deaths:</span> <CountUp start={0} end={det} separator={","} duration={5}/></h5>
                 </div>
             </div>
         </div>
    

         ):(
             
             <div className="text-center">
                 {cnf==0 ?(
                             <div>
             
        <div className="text-center" style={{width:"30%",margin:"auto",marginTop:'10px'}}>
          <div className="card" style={{borderTop:'5px solid blue',borderBottom:'5px solid green'}} >
                 <div className="card-title">
                 <h5>State: {name}</h5>
             </div>
         
                   <h5><span style={{color:'blue'}}>Confirmed:</span> <CountUp start={0} end={cnf} separator={","} duration={5}/></h5>
                     <h5> <span style={{color:'green'}}>Recovered:</span> <CountUp start={0} end={rec} separator={","} duration={5}/></h5>
                     <h5> <span style={{color:'red'}}>Deaths:</span> <CountUp start={0} end={det} separator={","} duration={5}/></h5>
                 </div>
             </div>
         </div> 
                 ):(<h2>Hello</h2>)}
                
              
             
                
                 </div>
            
         )}
       
        

   </div>
     
    )
}

export default Cards
