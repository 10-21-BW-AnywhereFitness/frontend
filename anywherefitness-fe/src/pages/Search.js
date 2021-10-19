import JSONDATA from '../data/MOCK_DATA.json';
import { useState } from 'react';
import '../css/search.css'
import Class from '../components/Class';

const initialDifficulty = [];
function Search(){
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
    return(
        <div className='main-cont'>
            <div className='input-cont'>
                <div>
                    <input className='search' type='text' placeholder='Search Classes...' onChange={e => {setSearchTerm(e.target.value)}}/>
                </div>
                <div className='intense'>
                    <input type='checkbox' id='low' name='intensityBox' value='low' onChange={difficultyHandle}/>
                        <label for='low'>Low</label>
                    <input type='checkbox' id='medium' name='intensityBox' value='medium' onChange={difficultyHandle}/>
                        <label for='medium'>Medium</label>
                    <input type='checkbox' id='high' name='intensityBox' value='high' onChange={difficultyHandle}/>
                        <label for='high'>High</label>
                </div>
            </div>
            <div className='classes-cont'>
            {JSONDATA.filter((val) => {
                if(searchTerm === '' && difficulty === initialDifficulty){
                    return val
                }else if(difficulty.includes(val.class_intensity) || val.class_name.toLowerCase().includes(searchTerm.toLowerCase())){
                    return val
                }
            })
            .map((val, key) => {
                return (
                    <div className='class-cont' key={key}>
                        <Class info={val} key={key}/>
                    </div>
                )
            })}
            </div>
        </div>
    );
}

export default Search;