import React,{useEffect, useState} from "react";
import Class from "../components/Class";
import axios from 'axios';
import JSONDATA from '../data/MOCK_DATA.json'
import '../css/classes.css';

function Classes(){
    const [classes, setClasses] = useState([]);

    const getClasses = () => {
        axios.get('/api/client/classes').then(res =>{
            console.log(res.data);
            setClasses(res.data);
        }).catch(err => {
            console.error(err)
        })
    }

    useEffect(() => {
        getClasses()
    }, []);

    return(
        <div className='classes-cont'>
            {JSONDATA.map((item, idx) => { //classes goes here
                return (
                    <Class key={idx} info={item}/>
                )
            })
        }
        </div>
    )
}

export default Classes;