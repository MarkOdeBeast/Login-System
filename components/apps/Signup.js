import React, { Component, useState }from 'react';
import countries from "./countries";

const Signup = () => {
   const [ firstName, setFirstname ] = useState('');
   const [ lastName, setLastname ] = useState('');
   const [ email, setEmail ] = useState('');
   const [ password, setPassword ] = useState('');
   const [ country, setCountry ] = useState('');
   const [ userinfo, setUserinfo ] = useState('');
   const [acceptedTerms, setAcceptedTerms] = 
   React.useState(false);

   const handleSubmit = (e) => {
      console.log(`
        Firstname: ${firstName}
        Lastname: ${lastName}
        Email: ${email}
        Password: ${password}
        Country: ${country}
        Accepted Terms: ${acceptedTerms}
      `);
      e.preventDefault();
   }

   return ( 
      <div className='register'>
         <form onSubmit={handleSubmit}>
               <h2>Welcome to Weasel</h2>
               <p>Please fill in your details below.</p>

               <label>Firstname:</label> 
               <input
                  placeholder='Enter your name'
                  name='Firstname'
                  type='Firstname'
                  value={firstName}
                  onChange={e => setFirstname(e.target.value)}
               required />
               <label>Lastname:</label>
               <input
                  placeholder='Enter your lastname'
                  name='Lastname'
                  type='Lastname'
                  value={lastName}
                  onChange={e => setLastname(e.target.value)}
               required />
               <label>Email:</label>
               <input
                  placeholder='Enter your email address'
                  name='email'
                  type='email'
                  value={email}
                  onChange={e => setEmail(e.target.value)}
               />
               <label>Password:</label>
               <input
                  placeholder='Enter your password'
                  name='password'
                  type='password'
                  value={password}
                  onChange={e => setPassword(e.target.value)}
               required />
               <label>
                  Country:
                  <select
                  name='country'
                  value={country}
                  onChange={e => setCountry(e.target.value)}
                  required>
                  <option key=''></option>
                  {countries.map(country => (
                  <option key={country}>{country}</option>
                  ))}
                  </select>
               </label>
               <label>
                  User info:
                 <select
                  name='userinfo'
                  value={userinfo}
                  onChange={e => setUserinfo(e.target.value)}
                  required>
                    <option key=""></option>
                    <option value='merchant'>Merchant</option>
                    <option value='customer'>Customer</option>
                 </select>    
               </label>
               <label>
               <input
                  name="acceptedTerms"
                  type="checkbox"
                  value={acceptedTerms}
                  onChange={e => setAcceptedTerms(e.target.value)}
                  required />
               I accept the terms of service        
               </label>
            <button>Submit</button> 
         </form>
      </div>
 );
}
 
export default Signup



