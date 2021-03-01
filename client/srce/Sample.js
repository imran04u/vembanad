import React,{ Component } from 'react';

function Sample(props) {
    return(<div>
        <a href="javascript:void(0)" onClick={()=>{
                  localStorage.clear();
                  props.history.push('/')
                }} className="dropdown-item"><i className="fas fa-sign-out-alt"></i> &nbsp; Log out</a>
    </div>)
}

export default Sample;