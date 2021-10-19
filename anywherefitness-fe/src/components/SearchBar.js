import JSONDATA from '../data/MOCK_DATA.json';
import { useState } from 'react';
import '../css/searchBar.css'

const initialDifficulty = [];
function SearchBar(){
    const [searchTerm, setSearchTerm] = useState('');
    const [difficulty, setDifficulty] = useState(initialDifficulty);
    // const updateDifficulty = (inten) => {
    //     if (difficulty.includes(inten)){
    //         setDifficulty(difficulty.filter(item => item.value !== inten));
    //     }else{
    //         setDifficulty([...difficulty, inten])
    //     }
    // }
    const difficultyHandle = e => {
        // const value = e.target.value;
        // updateDifficulty(value)
        const isChecked = e.target.checked;
        if(isChecked){
            setDifficulty([...difficulty, e.target.value]);
        }else{
            const idx = difficulty.indexOf(e.target.value);
            setDifficulty(difficulty.splice(idx, 1));
            // setDifficulty(difficulty);
        }
    }
    return(
        <div className='searchBar'>
            <div>
                <div>
                    <input type='text' placeholder='Search Classes...' onChange={e => {setSearchTerm(e.target.value)}}/>
                </div>
                <div>
                    <input type='checkbox' id='low' name='intensityBox' value='low' onChange={difficultyHandle}/>
                        <label for='low'>Low</label>
                    <input type='checkbox' id='medium' name='intensityBox' value='medium' onChange={difficultyHandle}/>
                        <label for='medium'>Medium</label>
                    <input type='checkbox' id='high' name='intensityBox' value='high' onChange={difficultyHandle}/>
                        <label for='high'>High</label>
                        
                </div>
            </div>
            {JSONDATA.filter((val) => {
                if(searchTerm === '' && difficulty === initialDifficulty){
                    return val
                }else if(val.class_name.toLowerCase().includes(searchTerm.toLowerCase()) && difficulty.includes(val.class_intensity)){
                    return val
                }
            }).map((val, key) => {
                return (
                    <div className='class' key={key}>
                        <p>{val.class_name}</p>
                    </div>
                )
            })}
        </div>
    );
}

export default SearchBar;