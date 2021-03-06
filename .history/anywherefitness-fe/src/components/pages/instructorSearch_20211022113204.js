import React, { useState } from "react";
import * as api from "../../api/api_calls";
import InstructorCard from "../landing/InstructorCard";
import '../landing/Search.css';


const initialDifficulty = [];
const SearchClass = (props) => {
  const [availableClasses, set_availableClasses] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const [difficulty, setDifficulty] = useState(initialDifficulty);
  const difficultyHandle = e => {
      const isChecked = e.target.checked;
      if(isChecked){
          setDifficulty([...difficulty, e.target.value]);
      }else{
          setDifficulty(difficulty.filter((val) => {
              return val !== e.target.value;
          }));
      }
  }
  api
    .instructor_get_all_classes()
    .then((res) => {
      console.log("instructor_get_all_classes res.data = ", res.data);
      set_availableClasses(res.data);
    })
    .catch((error) => {
      console.log("instructor_get_all_classes, error = ", error);
    });
  return (
<div className='main-cont'>
            <div className='input-cont'>
                <div>
                    <input className='search' type='text' placeholder='Search Classes...' onChange={e => {setSearchTerm(e.target.value)}}/>
                </div>
                <div className='intense'>
                    <label for='low' className='checkbox-cont'>
                        <p>Low</p>
                        <input type='checkbox' id='low' name='intensityBox' value='low' onChange={difficultyHandle}/>
                        <span className='checkmark'></span>
                    </label>
                    <label for='medium' className='checkbox-cont'>
                        <p>Medium</p>
                        <input type='checkbox' id='medium' name='intensityBox' value='medium' onChange={difficultyHandle}/>
                        <span className='checkmark'></span>
                    </label>
                    <label for='high' className='checkbox-cont'>
                        <p>High</p>
                        <input type='checkbox' id='high' name='intensityBox' value='high' onChange={difficultyHandle}/>
                        <span className='checkmark'></span>
                    </label>
                </div>
            </div>
            <div className='searched-cont'>
            {availableClasses.filter((val) => {
                if(searchTerm === '' && difficulty === initialDifficulty){
                    return val
                }else(difficulty.includes(val.class_intensity) || val.class_name.toLowerCase().includes(searchTerm.toLowerCase())){
                    return val
                }else{
                    return
                }
            })
            .map((val, key) => {
                return (
                    <div className='classes-cont' key={key}>
                        <InstructorCard info={val} key={key}/>
                    </div>
                )
            })}
            </div>
        </div>
  );
};

export default SearchClass;