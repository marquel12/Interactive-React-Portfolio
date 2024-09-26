import { useState } from "react";
import './Contact.css' 

export default function Contact() {

const [name,setName] = useState('')
const [email,setEmail] = useState('')
const [message,setMessage] = useState('')
const [error, setError] = useState('')


  const handleSubmit = (e)=>{
    e.preventDefault()
    if (email === ''){
     setError('Email is required')
     return
      
    }
    if(!name){
      setError ('Name is required')
      return
    }
    if(!message){
      setError ('Message is required')
      return
    }
    setError('')
    console.log("Form submitted",{name,email,message})
  
  }



  return (
    <div className='form'>
      <h2>Contact Page</h2>

      <form  onSubmit={handleSubmit} className='form-container'>
        <div>
          <label className='labels'>
            Name
          </label>
          <input type='text' value={name} onChange={(e)=>setName(e.target.value)} placeholder="'John" />
          
        </div>
        <br></br>
        <div>
          <label className='labels'>
            Email Address
          </label>
          <input type='email' value={email} onChange={(e)=>setEmail(e.target.value)} placeholder="johndoe@gmail.com"/>
        </div>
        <br></br>
        <div>
          <label className='labels'>
            Message
          </label>
          <textarea value={message}onChange={(e)=>setMessage(e.target.value)} placeholder="Hello"/>
        </div>
        {error && <p style={{color:'red'}}> {error} </p> }
      <button type='submit' className='btn'>Submit</button>
        

      </form>
    </div>
  );
}
