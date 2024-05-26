import { useEffect, useState } from 'react'
import authActions from "./store/actions/auth-actions"
import {useDispatch, useSelector} from "react-redux"
import './index.css'
// import authReducer from './store/reducer/auth-reducer'

function App() {
 
const dispatch = useDispatch()
  useEffect(()=>{

    dispatch(authActions.getLoginData())
  },[])

  let data  = useSelector((state)=> state?.authReducer?.user)
  
  // data  = JSON.stringify(data)
  
  console.log(data,"tfcgjkl")


  return (
    <>
    <div>
      <p className='text-black'>{data}</p>
    </div>
    </>
  )
}

export default App
