import React from 'react'
import { Link } from 'react-router-dom';

export default function NavBar(){
    return (

        <div className='nav-bar'>
            <Link to='/'>Home</Link>
            <Link to='/client'>Client</Link>
            <Link to='/instructor'>Instructor</Link>
            <Link to="/login">Login</Link>
            <Link to=""
        </div>
    )
}