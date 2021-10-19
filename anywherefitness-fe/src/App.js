import React from 'react'
import { Route, Link } from 'react-router-dom';


import NavBar from './Components/NavBar'
import Home from './Components/Home'
import About from './Components/About'
import Contact from './Components/Contact'

function App() {
  return (
    <div className="App">
      <header className='header'>
        <div className='logo-bar'>
          <Link to='/home'>
            <h1>Anywhere Fitness</h1>
          </Link>
        </div>     
      </header>   
      <NavBar />

      <div className='main-content'>
        <Route> 
          <Home exact path='/' />
        </Route>

        <Route> 
          <About exact path='/about' />
        </Route>

        <Route> 
          <Contact exact path='/contact' />
        </Route>
      </div>
    </div>
  );
}

export default App;
