import React from 'react'

import { Navigate  } from 'react-router-dom'
const ProtetcRoute = ({children}) => {
    const user = localStorage.getItem("user");

    if(!user){
        return <Navigate to="/register"/>
    };


  return children;
}

export default ProtetcRoute
