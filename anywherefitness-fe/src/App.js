import React from 'react';
import {Route} from 'react-router-dom';
import Classes from './components/Classes';
import './App.css';

function App() {
  return (
    <div className="App">
      <Route path='/classes'>
        <Classes />
      </Route>
    </div>
  );
}

export default App;
