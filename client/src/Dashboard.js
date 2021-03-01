import Header from "./Header";
import Navbar from "./Navbar";

function Dashboard() {
    return (
      <div className="page-container">  
      <div className="left-content">
        <div className="mother-grid-inner">
         <Header />
          <div className="content-wrapper">
            <div className="titleblk clearfix">       
              <h1>Dashboard</h1>
            </div>
            <div>content</div>
        </div>
      </div>
     <Navbar/>
    <div className="clearfix"> </div>
  </div>
  </div>
    );
  }
  
  export default Dashboard;