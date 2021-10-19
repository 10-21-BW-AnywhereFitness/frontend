import React from 'react';
import {Route, Link, Switch} from 'react-router-dom';
import Classes from './pages/Classes';
import './App.css';
import Search from './pages/Search';

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
          <Search />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
