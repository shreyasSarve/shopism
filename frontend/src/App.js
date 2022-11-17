import './App.css';
import React, { useEffect } from 'react'
import Header from './Components/Header';
import Home from './Components/Home';
import {BrowserRouter as Router, Switch ,Route} from "react-router-dom"
import Checkout from './Components/Checkout';
import Login from './Components/Login';
import Payment from './Components/Payment';
import { auth } from "./firebase"
import { useStateValue } from "./StateProvider";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./Components/Orders";

const promise = loadStripe(
    "pk_test_51M4oVpSJUmV5H7pwSNnx5gb9MPq50AJjpTGRGa1MSJZzJpv8kKWtl4OrILYUaGb8MH7QKOj2NBNRn3JDTPe6XAVP009Ck5JZXw"
);

// here whenver any-package-not-installing- use = --legacy-peer-deps
// listener will keep track of who has signed in

function App() {
  const [{} ,dispatch] = useStateValue();
  useEffect(()=>{
        // will only run once the app component loads...

        auth.onAuthStateChanged(authUser => {
           console.log('The User is >>>> ', authUser);
           if(authUser)
           {
            dispatch({
              type: 'SET_USER',
              user: authUser
            })
            // the user just logged in /the user was logged in
           }else{
            // the user is logeed out
             dispatch({
                type:'SET_USER',
                user:null
             })
           }
        })
  },[])

  return (
    <Router>
        <div className="App">
        
        {/* here Header is coming in both pages(repeating) so we write outside the routes */}
        <Switch>
        <Route path = "/orders" >
           <Header/>
            <Orders/>
          </Route>
        <Route path = "/login" >
            <Login/>
          </Route>
          <Route path = "/checkout" >
          <Header/>
            <Checkout/>
          </Route>
          <Route path = "/payment" >
          <Header/>
          <Elements stripe={promise}>
          <Payment />
          </Elements>

          </Route>
          <Route path = "/" >
            <Header />
            <Home />
          </Route>
        </Switch>
        </div> 
    </Router>
  );
}

export default App;
// https://dbmsclone.web.app
