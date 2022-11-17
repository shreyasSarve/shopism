import React from 'react'
import '../Header.css'
import {Link} from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons";
import { useStateValue } from '../StateProvider';
import myImage from "../1.png"
import { auth } from "../firebase"

function Header() {
const [ {basket, user} ,dispatch] = useStateValue();
   
   const handleAuthentication = () => {
      if(user)
      {
         auth.signOut();
      }
   }

  return (
    <div className='header'>
          {/* using Link through this on click on logo we reach to home page */}
         <Link to="/">
         <img className='header__logo' src={myImage} alt="Amazon-logo" />
         </Link>
         
         <div className="header__search">
            <input type="text" className="header__searchinput" />
            {/*logo of search*/}
            <FontAwesomeIcon  className='header__searchicon' icon = {faMagnifyingGlass}></FontAwesomeIcon>
         </div>

         <div className="header__nav">
         <Link to ={!user && './login'}>
           {/* if no user than push to login page */}
            <div onClick={handleAuthentication} className="header__option">
            <span className="header__optionlineone">Hello {!user ? 'Guest' : user.email}</span>
            <span className="header__optionlinetwo">{user ? 'Sign Out' : 'Sign In'}</span>
            </div>
         </Link>

            <div className="header__option">
            <span className="header__optionlineone">Returns</span>
            <span className="header__optionlinetwo">& Orders</span>
            </div>

            <div className="header__option">
            <span className="header__optionlineone">Visit your</span>
            <span className="header__optionlinetwo">Shop</span>
            </div>

            <Link to="/checkout">
               <div className="header__optionbasket">
               <FontAwesomeIcon icon = {faShoppingCart}></FontAwesomeIcon>
                <span className="header__optionlinetwo header__basketcount">{basket.length}</span>
                {/* optional chaining */}
                </div>
            </Link>

         </div>
    </div>
  )
}

export default Header
