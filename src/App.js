import React,{useContext} from 'react';
import './App.css';
import Register from './components/Register'
import Login from './components/Login';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './components/Home';

function App() {  
  return (
    <div className="App">

      <Router>
      <nav>
          <ul>
            <li>
              <Link to="/">Home</Link> //link to the homepage
            </li>
            <li>
              <Link to="/register">Register</Link> //link to Register page
            </li>
            <li>
              <Link to="/login">Login</Link> //Link to Login page
            </li>
            <li>
              
            </li>
          </ul>
        </nav>
        
     
      <Switch>
      <Route exact path="/">
          <Home/> //Home component
        </Route>
        <Route path="/register">
          <Register/> //Register component
        </Route>
        <Route path="/login">
          <Login/> //Login component
        </Route>
      </Switch>
      </Router>

      
    </div>
  );
}

export default App;
