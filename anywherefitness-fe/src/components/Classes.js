import React,{useEffect, useState} from "react";
import Class from "./Class";
import axios from 'axios';

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
        <div>
            {classes.map((item, idx) => {
                return (
                    <Class key={idx} info={item}/>
                )
            })
        }
        </div>
    )
}

export default Classes;