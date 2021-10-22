import React from "react"
import workout1 from '../workout1.jpg'



const Home = (props) =>{
    return (
        <div className='home'>
            <h2>Welcome to Anywhere Fitness!</h2>
            <p className='p1'>Take your workout with you anywhere in the globe whenever you want.</p>
                <div className='content-container'>
                    <div className='text'>
                        <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </div>
                    <div className='workout'>
                        <img src={workout1} alt='workout'/>
                    </div>
                </div>
        </div>
    )
}

export default Home;
