import React from 'react'
import '../style/Navigation.css'

class Navigation extends React.Component{
  
  render(){
    return(
      <div>
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href='#'><i className="fas fa-box"></i> Golden Box</a>
        
        <form className="form-inline mr-auto">
          <input className="form-control mr-2" type="search" placeholder="Search"/>
          <button className="btn btn-outline-primary" type="submit">Search</button>
        </form>
        <div className="navbar-nav">
          <a className="nav-item nav-link mr-2" href='#service'>Service</a>
          <a className="nav-item nav-link mr-2" href='#price'>Pricing</a>
        </div>
          
    
        <form className="form-inline">
          <button className="btn btn-primary mr-1">Login</button>
        </form>
      </nav>
      </div>
      );
  }
}

export default Navigation;