import React from 'react'
import "./Login.css"

function Login() {
  return (
    <div className='login_container'>
        <div className="login_form">
                <h2>Login Here</h2>
            <form className='login_content'>
                <p>Name</p>
                <input type='string' placeholder='Name'/>
                <p>Email</p>
                <input type='email'  placeholder='Email'/>
                <p>Password</p>
                <input type='password' placeholder='Password'/>
                
                <h4>New User? <a href='Signup'>Signup</a></h4>
                
                <button>Login</button>

            
                
            </form>
               
        </div>
    </div>
  )
}

export default Login