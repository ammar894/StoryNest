import React , {useState,useEffect} from 'react'

import authService from './appwrite/auth'
import {useDispatch} from 'react-redux' 
import { Login , Logout } from './store/authSlice.js'
import { Header, Footer } from './components'
import { Outlet } from 'react-router-dom'
import { useSelector } from 'react-redux';

function App() {

  const [loading,setLoading] = useState(true)
  const dispatch = useDispatch()
  
  useEffect(()=>{
    authService.getCurrentUser().
    then((userData)=>{
      if (userData) {
        dispatch(Login(userData))
      } else {
        dispatch(Logout())
      }
    }).
    finally(()=> setLoading(false))
  },[])

  const authStatus = useSelector(state => state.auth.status)

  

  return loading ? (<div>Please Wait...</div>) : 
  <>
  
     <Header></Header>
      <Outlet/>
     <Footer></Footer>

  </>
}

export default App
