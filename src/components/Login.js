import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'

const Login = (props) => {
    const [credentials,setCredentials]=useState({email:"",password:""})
    let navigate=useNavigate();
    
    const host="http://localhost:8000"
    const handleSubmit=async (e)=>{
        e.preventDefault();
        const response = await fetch(`${host}/api/auth/login`, {
            method: "POST", 
            headers: {
              "Content-Type": "application/json", 
              
            },
            body: JSON.stringify({email:credentials.email,password:credentials.password})
          });
          const json=await response.json(); 
          console.log(json);
          if(json.success){
            localStorage.setItem("token",json.authtoken);
            navigate('/');
            props.showAlert("Logged in successfully","success")
          }
          else{
            props.showAlert("Invalid credentials","danger")

          }

    }
    const onChange=(e)=>{
        setCredentials({...credentials,[e.target.name]:e.target.value})
    
      }
    return (
        <div className='mt-3'>
          <h2>LOGIN TO CONTINUE </h2>
            <form onSubmit={handleSubmit}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name="email" value={credentials.email} onChange={onChange} aria-describedby="emailHelp"/>
                        
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" value={credentials.password} onChange={onChange} name="password"/>
                </div>

                <button type="submit" className="btn btn-primary" >Submit</button>
            </form>
        </div>
    )
}

export default Login