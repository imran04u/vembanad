function Header(props) {
    return (
        <header className="header-main clearfix">
            
        <div className="logo">
        </div>
        
        <div className="profile clearfix">
          <div className="profimg">
            <div className="dropdown">
              <img src="assets/images/profimg.jpg" />
              <a className="dropdown-toggle" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                <span>Admin</span>
              </a>
              <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                <a href="javascript:void(0)" className="dropdown-item"><i className="fas fa-cog"></i> &nbsp; Settings</a>
                <a href="javascript:void(0)" onClick={()=>{
                  localStorage.clear();
                  props.history.push('/')
                }} className="dropdown-item"><i className="fas fa-sign-out-alt"></i> &nbsp; Log out</a>
              </div>
           
          </div>
        </div>
        </div>
      </header>
    );
  }
  
  export default Header;