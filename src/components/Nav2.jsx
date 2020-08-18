import React from 'react'
import {Link,useHistory} from 'react-router-dom'

 const Nav2 = () => {
     let history=useHistory()

    const handleClick=()=>{
        history.push('/signup')
        window.location.reload()


    }
    return (
        <div>
                    <div>
                     <nav className="navbar navbar-expand-md bg-dark navbar-dark">
  <Link className="navbar-brand" to="/signup"><i class="fas fa-lungs-virus fa-2x"></i> &nbsp;<span className="sp1"><span style={{color:'rgb(248,149,50)'}}>Covid19</span>-Tracker-<span style={{color:'rgb(17,132,7)'}}>India</span></span></Link>
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="collapsibleNavbar">
    <ul className="navbar-nav ml-auto">
      <li className="nav-item">
        <Link className="nav-link" to="/signin" onClick={()=>{
            handleClick()
        }} ><i className="fas fa-sign-in-alt fa-2x"></i>Sign-up</Link>
      </li>
      
    </ul>
  </div>  
</nav>
        </div>
        </div>
    )
}

export default Nav2
