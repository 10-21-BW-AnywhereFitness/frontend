import React from 'react'
import { Route, Link } from 'react-router-dom';
import './App.css';
import NavBar from './components/NavBar'
import Home from "./components/pages/home"
import Client from "./components/pages/client"
import Instructor from './components/pages/instructor';
import Footer from './components/Footer'


function App() {
  return (
    <div className="App">
      <header className='header'>
        <div className='logo-bar'>
          <Link to='/home'>
            <h1>Anywhere Fitness</h1>
            <p>App.js</p>
          </Link>
        </div>     
        <NavBar />
      </header>   

      <div className='main-content'>
        <Route exact path='/'> 
          <Home />
        </Route>

        <Route path='/client'> 
          <Client />
        </Route>

        <Route path='/instructor'> 
          <Instructor />
        </Route>

        <Route path="/login"></Route>

        </Route>

        <div className='footer-container'>
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;
