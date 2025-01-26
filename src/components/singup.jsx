import React from 'react'
import "./Login.css"
import { Link } from 'react-router-dom'

function Singup() {
  return (
    <div className='login_container' id='signup'>
        <div className="login_form">
                <h2>Sign up Here</h2>
            <form className='login_content'>
                <p>Name</p>
                <input type='string' placeholder='Name'/>
                <p>Email</p>
                <input type='email'  placeholder='Email'/>
                <p>Age</p>
                <input type='Number' placeholder='Age'/>
                <p>Password</p>
                <input type='password' placeholder='Password'/>
                <p>Re-type Password</p>
                <input type='password' placeholder='Password'/>
                
                <h4>Already have an account? <a><Link to="/login">Login</Link></a></h4>
                
                <button>Signup</button>

            
                
            </form>
               
        </div>
    </div>
  )
}

export default Singup