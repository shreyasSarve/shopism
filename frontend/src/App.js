import './App.css';
import React from 'react'
import Header from './Components/Header';
import Home from './Components/Home';
import {BrowserRouter as Router,Routes ,Route} from "react-router-dom"
import Checkout from './Components/Checkout';
import Login from './Components/Login';

// here whenver any-package-not-installing- use = --legacy-peer-deps


function App() {
  return (
    <Router>
        <div className="App">
        
        {/* here Header is coming in both pages(repeating) so we write outside the routes */}
        <Routes>
           <Route path = "/" element={[<Header />, <Home />]} />
          <Route path="/checkout" element={[<Header />, <Checkout />]} />
          <Route path = "/login" element={<Login />} />
        </Routes>
        </div> 
    </Router>
  );
}

export default App;
