import React, { useState } from "react"

function Login() {
 const[name,setName]= useState();
 const[email,setEmail]= useState();
 const[nameError,setNameError]=useState(false);
 const[emailError,setEmailError]=useState(false);
 const emailRegex =/[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,8}(.[a-z{2,8}])?/
 const handleName=(e)=>{
  let name=e.target.value;
  if(name.length<3){
    setNameError(true);
}
else{
  setNameError(false)
}

 }
 const handleEmail=(e)=>{
  let email=e.target.value;
  if(!email.match(emailRegex)){
    setEmailError(true)

  }
  else{
    setEmailError(false)

  }

 }

 
  return (
    <div>

<h1 className="login">Form Login</h1>
     <form className="form">
      <label className="label" htmlFor="">Enter Name:</label>
      <input className="input" type="text" name='name' onChange={handleName} value={name} required />
      <br />
      {nameError ? <span style={{color:'red'}}>Wrong Username</span>:""}
      
      <br /> <br />
      <label className="label" htmlFor=""> Enter Email:</label>
      <input className="input" type="email"name='email'onChange={handleEmail} value={email} required />
      <br />
      {emailError ? <span style={{color:'red'}}>Wrong Email</span>:""}
      <br /> <br />
      <input className="button" type="submit" value="submit" />
     </form>

    </div>
  )
}

export default Login