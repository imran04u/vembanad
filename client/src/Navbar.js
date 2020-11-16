function Navbar() {
    return (
      <div>
       
      <div className="sidebar-menu">
        <div className="logo">
          <div className="logoimg">
           <img src="assets/images/logo.png" />
         </div>
         <a href="#" className="sidebar-icon">
          <img src="assets/images/icons/burger.svg" />
        </a>  
      </div>     
      <div className="menu">
        <ul id="menu">
      
           <li><a href="/category"><i><img src="assets/images/icons/bell.svg" /></i><span>Catogory Management</span></a></li>
          <li><a href="/pro"><i><img src="assets/images/icons/tray.svg" /></i><span>Product Management</span></a></li>
          <li><a href="/ban"><i><img src="assets/images/icons/images.svg" /></i><span>Banner Management</span></a></li>
          <li><a href="/user"><i><img src="assets/images/icons/user.svg" /></i><span>User Management</span></a></li>
          <li><a href=""><i><img src="assets/images/icons/chart.svg" /></i><span>Reports</span></a></li>
        </ul>
      </div>
    </div>
      </div>
    );
  }
  
  export default Navbar;