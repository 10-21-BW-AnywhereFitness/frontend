import React from 'react'
import workout1 from './workout1.jpg'


export default function Home(){
    return (
        <div className='home-container'>
            <div className='content-container'>
                <h3>Group fitness elevated</h3>
                <h2>Workout With Us!</h2>
                <p>Workout at your own time, WHENEVER you want and ANYWHERE you want. Either from Spain, Thailand, or Hawaii, take your workout with you anywhere in the globe.</p>
                <div>
                    <img src={workout1} alt='lady sit-up' className='workout1' />
                </div>
            </div>
        </div>
    )
}