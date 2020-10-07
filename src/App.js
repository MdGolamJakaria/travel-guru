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
import PrivatRoute from './Compunent/PrivatRoute/PrivatRoute';
import Account from './Compunent/Login/AccountDetails';
import ForgotPassword from './Compunent/ForgotPassword/ForgotPassword';
import motel1 from './travel-guru-master/Image/Rectangle 1.png'
import motel2 from './travel-guru-master/Image/Rectangle 26.png'
import motel3 from './travel-guru-master/Image/Rectangle 27.png'
import coxBazar from './travel-guru-master/Image/Sajek.png'

export const UserContext = createContext();
export const newUserContext = createContext();
export const homeDataContext = createContext();


function App() {
  const [loggedInUser, setLoggedInUser] = useState({})
  const [newUser, setNewUser] = useState(false);
  const [homeData, setHomeData] = useState({

    id: 1,
    image: coxBazar,
    location: "cox's bazar",
    description: "Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south.",
    longDescription: 'Cox’s Bazar is a town on the southeast coast of Bangladesh. It’s known for its very long, sandy beachfront, stretching from Sea Beach in the north to Kolatoli Beach in the south. Aggameda Khyang monastery is home to bronze statues and centuries-old Buddhist manuscripts. South of town, the tropical rainforest of Himchari National Park has waterfalls and many birds. North, sea turtles breed on nearby Sonadia Island.',

    motel: [
      {
        id: 1,
        image: motel1,
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        des: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt ipsam autem, eveniet fugiat modi adipisci maxime veniam odio et sit totam sapiente cupiditate necessitatibus quo! ',
        star: 4.9,
        review: 20,
        guests: 4,
        bedrooms: 2,
        beds: 2,
        baths: 2,
        facilities: 'Wifi, Air Conditioning Kitchen',
        cancllation: 'Cancellation fexibility availiable',
        shift: 'night',
        perDayPrice: 34,
        total: 167,

      },
      {
        id: 2,
        image: motel2,
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        des: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt ipsam autem, eveniet fugiat modi adipisci maxime veniam odio et sit totam sapiente cupiditate necessitatibus quo! ',
        star: 4.8,
        review: 10,
        guests: 4,
        bedrooms: 2,
        beds: 2,
        baths: 2,
        facilities: 'Wifi, Air Conditioning Kitchen',
        cancllation: 'Cancellation fexibility availiable',
        shift: 'night',
        perDayPrice: 52,
        total: 167,

      },
      {
        id: 3,
        image: motel3,
        title: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
        des: 'Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sunt ipsam autem, eveniet fugiat modi adipisci maxime veniam odio et sit totam sapiente cupiditate necessitatibus quo! ',
        star: 4.9,
        review: 25,
        guests: 4,
        bedrooms: 2,
        beds: 2,
        baths: 2,
        facilities: 'Wifi, Air Conditioning Kitchen',
        cancllation: 'Cancellation fexibility availiable',
        shift: 'night',
        perDayPrice: 44,
        total: 167,

      },
    ]

  });
  return (

    <UserContext.Provider value={[loggedInUser, setLoggedInUser]} >
      <newUserContext.Provider value={[newUser, setNewUser]}>
        <homeDataContext.Provider value={[homeData, setHomeData]}>
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
              <Route path='/forgotPassword'>
                <ForgotPassword></ForgotPassword>
              </Route>
              <PrivatRoute path='/account'>
                <Account></Account>
              </PrivatRoute>
              <PrivatRoute path='/room'>
                <Room></Room>
              </PrivatRoute>
              <Route path='/'>
                <Home></Home>
              </Route>
            </Switch>
          </Router>
        </homeDataContext.Provider>
      </newUserContext.Provider>
    </UserContext.Provider >
  );
}

export default App;
