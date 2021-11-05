import React, { Component, useState } from "react";

const Login = () => {
   const [ email, setEmail ] = useState('');
   const [ password, setPassword ] = useState('');

   const handleSubmit = (e) => {
      console.log(`
        Email: ${email}
        Password: ${password}
      `);
      e.preventDefault();
   }

   return ( 
      <div className='login'>  
            <form onSubmit={handleSubmit}>
               <h2>Welcome Back!</h2>

                  <label>Email:</label>
                  <input
                     placeholder='Enter your email address'
                     name='email'
                     type='email'
                     value={email}
                     onChange={e => setEmail(e.target.value)}
                  required />
                  <label>Password:</label>
                  <input
                     placeholder='Enter your password'
                     name='password'
                     type='password'
                     value={password}
                     onChange={e => setPassword(e.target.value)}
                  required />
               <button>Submit</button>
               <p>Don't have an account?<a href='./components/apps/Signup'> Register </a>here.</p> 
            </form>
      </div>
    );
}
 
export default Login;