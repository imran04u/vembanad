import React,{ Component } from 'react';
import {Route, Redirect} from 'react-router-dom'

function ProtectedRouters({component,...rest}) {
    var RenderComponent=component;
    let hasToken=JSON.parse(localStorage.getItem('auths'))
    console.log(hasToken);
    return(<Route
        {...rest}
        render={
            props=>{
               return hasToken !== null ? (
                <RenderComponent {...props}/>
                ) : (
                    <Redirect 
                    to ={{
                        pathname:'/'
                    }}
                    />
                )
            }
        }
    />)
}

export default ProtectedRouters;