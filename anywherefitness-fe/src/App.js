import React from 'react';
import {Route, Link, Switch} from 'react-router-dom';
import Classes from './components/Classes';
import './App.css';
import SearchBar from './components/SearchBar';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/'>
          <Link to='/classes'>Classes</Link>
        </Route>
        <Route path='/classes'>
          <Link to='/search'>Search Classes</Link>
          <Classes />
        </Route>
        <Route path='/search'>
          <SearchBar />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
