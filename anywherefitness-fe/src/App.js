import React from 'react'
import { Route, Link } from 'react-router-dom';
import NavBar from './Components/NavBar'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'
import './App.css';
import NavBar from './Components/NavBar'


function App() {
  return (
    <div className="App">
      <header className='header'>
        <div className='logo-bar'>
          <Link to='/home'>
            <h1>Anywhere Fitness</h1>
          </Link>
        </div>     
        <NavBar />
      </header>   

      <div className='main-content'>
        <Route exact path='/home'> 
          <Home />
        </Route>

        <Route path='/about'> 
          <About />
        </Route>

        <Route path='/contact'> 
          <Contact />
        </Route>

        {/*  route to login page for users & instructors */}
      </div>
    </div>
  );
}

export default App;
