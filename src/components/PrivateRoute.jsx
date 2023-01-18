import React from 'react'
import { Outlet, Navigate } from 'react-router-dom';
import {useAuthStatus} from '../hooks/useAuthStatus';
import Spinner from './Spinner';
export default function PrivateRoute() {

const {loggedIn,checkingStatus} = useAuthStatus();
//   const loggedIn = false;
console.log('checkingStatus')
console.log(checkingStatus)
if(checkingStatus){
    return <Spinner/>
}else
  return loggedIn? <Outlet/> : <Navigate to="/sign-in"/>
}
