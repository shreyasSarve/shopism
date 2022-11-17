import React from 'react'
import '../Login.css';
import { Link, useHistory } from "react-router-dom";
import { useState } from 'react';
import myImage from '../1.png';
import { auth, db } from "../firebase";

function Login() {
const history = useHistory();
const [email,setEmail] = useState('');
const [password ,setPassword] = useState('');

const signIn = e =>{
   e.preventDefault();
   // prevent the page from refreshing

   // firebase shit
   auth.signInWithEmailAndPassword(email,password)
   .then(auth => {
       history.push('/')
   })
   .catch(error => alert(error.message))
}

const register = e =>{
   e.preventDefault();

   // fancy firebase register
   auth.createUserWithEmailAndPassword(email,password)
   .then((auth) => {

      if(auth){
         history.push('/')
      }
   })
   .catch((error) => {
      alert(error.message)
   })

}

  return (
    <div className='login'>
    <Link to='/'>
       <img className="login__logo" src= {myImage} alt="shopify-logo" />
    </Link>
       <div className="login__container">
          <h1>Sign-In</h1>
          <form action="">
             <h5>E-mail</h5>
             <input type="text" value= {email} onChange={e => setEmail(e.target.value)} />

             <h5>Password</h5>
             <input type="password" value ={password} onChange={e => setPassword(e.target.value)} />

             <button type='submit' onClick={signIn}  
               className='login__signInButton'>Sign-In</button>
          </form>
           <p>
              Create your own account on shopify
           </p>
           <button onClick={register}
            className='login__registerButton' >Create your shopify Account</button>
       </div>
    </div>
  )
}

export default Login;
