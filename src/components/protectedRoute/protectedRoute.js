import React from 'react';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({isLoggedIn,children}) => {
    console.log(isLoggedIn);
    console.log(children);
     if(isLoggedIn){
        return children
     }else{
       return <Navigate to='/'/>
     }
}

export default ProtectedRoute;
