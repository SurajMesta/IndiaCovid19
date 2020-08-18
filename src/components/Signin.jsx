import React,{useEffect,useState} from 'react'
import {Link,useHistory} from 'react-router-dom'
import Nav2 from './Nav2'

 const Signin = () => {
  
     const [email,setEmail]=useState("")
     const [password,setPassword]=useState("")
     const [msg,setMsg]=useState("")

       const handleClick=()=>{
         history.push('/signup')
         window.location.reload()
     }
   
    
     const history= useHistory()
  


    const valChange1=(e)=>{
      
        setEmail(e.target.value)

    }

    const valChange2=(e)=>{
        setPassword(e.target.value)
       
    }

  

    const handleOnSubmit=(e)=>{
      
        e.preventDefault()
        fetch("http://localhost:5000/login",{
            method:"POST",
            headers:{
                "Accept":"application/json",
                "Content-Type":"application/json",
                
            },
            body:JSON.stringify({
              
                email,
                password,

            })

        }
      
        
        ).then(res=> res.json()).then(data=> {
          

           if(data.message!==undefined){
                    setMsg(data.message)
            setTimeout(()=>{
                setMsg("")
            },2000)
           }
           else{
               setMsg("Login Success...Please wait untill we redirect you to Home Page.....")
                sessionStorage.setItem('token',data.token)
                   setTimeout(()=>{
                setMsg("")
                history.push('/home')
            },5000)

           }
     
            // if(data.message==='Signup Success You may login now'){
            //     setTimeout(()=>{
            //          history.push('/signin')
            //     },5000)
           
            // }

        }).catch(err=> console.log(err))
        
      

  


    }
    return (
        <div>
            <Nav2/>
              <div style={{marginTop:'50px'}}>
         
            <div className="row">
                <div className="col-sm-12 col-12">
                    {msg!==""?(

                        <div className="text-center al2" >
                                <div className="alert alert-info alert-dismissible">
     <button type="button" className="close" data-dismiss="alert">&times;</button>
                            <em>{msg}</em>
   </div>
                                </div>

         
                    
                     
      
                    ):(
              
                   
                           null   
             
                    
                    )}
                    <form className="text-center form2" 
                    onSubmit={(e)=>{
                        handleOnSubmit(e)
                    }}
                    
                    >
                        <h5>Please Login</h5>
                  

                             <div className="form-group">
                            <label htmlFor="">Email:</label>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                 <span className="input-group-text" id="basic-addon1"><i className="fas fa-envelope"></i></span>
                                </div>
                                   <input type="text" name="email" id="email" placeholder="someone@example.com" value={email} className="form-control"  onChange={(e)=>{
                             valChange1(e)
                            }}/> 
                            </div>
                         
                        </div>

                             <div className="form-group">
                            <label htmlFor="">Password:</label>
                            <div className="input-group">
                                <div className="input-group-prepend">
                                       <span className="input-group-text" id="basic-addon1"><i className="fas fa-key"></i></span>
                                </div>
                                 <input type="password" name="password" id="password" placeholder="Password" value={password} className="form-control"  onChange={(e)=>{
                             valChange2(e)
                            }}/>

                            <div className="input-group-append">
                                  <span className="input-group-text" id="basic-addon1"><i id="pass2" class="fas fa-eye-slash fa-eye"></i></span>
                            </div>
                            </div>
                           
                        </div>

                        <div className="form-group">
                            <button className="btn btn-success btn-md">Submit</button>
                           
                        </div>
                        <div className="form-group">
                            <Link to="/signin" onClick={()=>{
                                handleClick()
                            }}>Don't Have an Account?</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        </div>
      
    )
}
export default Signin


