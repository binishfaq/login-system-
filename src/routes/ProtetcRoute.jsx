
import React from 'react'

import { Navigate  } from 'react-router-dom'
import { useAuth } from '../context/AuthContext';
const ProtetcRoute = ({children}) => {


    const {loading, token} =  useAuth();
if(loading){
  return <h1>Loading.....</h1>
}

    if(!token){
        return <Navigate to="/register"/>
    };


  return children;
}

export default ProtetcRoute
