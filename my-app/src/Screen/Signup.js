import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'

export default function Register() {
    const[name,setName] = useState('')
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
      if(!name || !email || !password){
        alert("please fill all fields")
      }else{
        console.log(name,email,password)
        let response = await axios.post("http://localhost:3200/register",{
            name,email,password
        })
        console.log(response)
        localStorage.setItem("user" ,JSON.stringify(response))
        navigate("/")
      }
    }  
  return (
    <>
    <input type='text' placeholder='Name' value={name} onChange={(e)=>setName(e.target.value)}></input><br></br>
    <input type='text' placeholder='Email' value={email} onChange={(e)=>setEmail(e.target.value)}></input><br></br>
    <input type='text' placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)}></input><br></br>
    <button onClick={handle}>Submit</button>
    </>
  )
}