import React from 'react'
import { Link } from 'react-router-dom';
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
      </header>   
      <NavBar />
    </div>
  );
}

export default App;
