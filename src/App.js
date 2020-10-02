import React, { createContext } from 'react';
import './App.css';
import Header from './Compunent/Header/Header';
import Home from './Compunent/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './Compunent/Login/Login';
import News from './Compunent/News/News';
import Destination from './Compunent/Destination/Destination';
import Blog from './Compunent/Blog/Blog';
import Contact from './Compunent/Contact/Contact';
import Booking from './Compunent/Booking/Booking';
import CreateAcount from './Compunent/CreateAccount/CreateAcount';
import Room from './Compunent/Room/Room';
import { useState } from 'react';

export const UserContext = createContext();



function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  return (
    <UserContext.Provider value={[loggedInUser, setLoggedInUser]} >
      <Router>
        <Header></Header>
        <Switch>
          <Route path='/home'>
            <Home></Home>
          </Route>
          <Route path='/blog'>
            <Blog></Blog>
          </Route>
          <Route path='/destination'>
            <Destination></Destination>
          </Route>
          <Route path='/news'>
            <News></News>
          </Route>
          <Route path='/contact'>
            <Contact></Contact>
          </Route>
          <Route path='/booking'>
            <Booking></Booking>
          </Route>
          <Route path='/createacount'>
            <CreateAcount></CreateAcount>
          </Route>
          <Route path='/login'>
            <Login></Login>
          </Route>
          <Route path='/room'>
            <Room></Room>
          </Route>

        </Switch>
      </Router>
    </UserContext.Provider>
  );
}

export default App;
