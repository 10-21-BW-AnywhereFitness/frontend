import React from 'react'
import { Link, Route, Switch } from 'react-router-dom';




export default function NavBar(){
    return (
        <div className='nav-bar'>
            <Link to='/home'>Home</Link>
            <Link to='/about'>About</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/login'>Log In</Link>
        </div>
    )
}