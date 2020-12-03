import React from "react";
function Header(props) {
    return (
        <header className="header-main clearfix">
            
        <div className="logo">
        </div>
        
        <div className="profile clearfix">
          <div className="profimg">
          <a href="" onClick={()=>{
                  localStorage.clear();
                  props.history.push('/');
                }} className="dropdown-item"><i className="fas fa-sign-out-alt"></i> &nbsp; Logout</a>
              
        </div>
        </div>
      </header>
    );
  }
  
  export default Header;