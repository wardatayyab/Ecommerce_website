import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Register() {
    const[email,setEmail] = useState('')
    const[password,setPassword] = useState('')
    const navigate = useNavigate()

    useEffect(()=>{
        const auth = localStorage.getItem("user")
        if(auth){
            navigate('/')
        }
    })
    const handle = async() =>{
        console.log(email,password)
        let response = await axios.post("http://localhost:3200/login",{
            email,password
        })
        console.log(response)
       if(response.data !== "No user Found"){
        localStorage.setItem("user" ,JSON.stringify(response))
        navigate("/")
       }
    }  
  return (
    <>
    <input type='text' placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}></input><br></br>
    <input type='text' placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}></input><br></br>
    <button onClick={handle}>Submit</button>
    </>
  )
}
