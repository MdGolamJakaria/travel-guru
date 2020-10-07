import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../../travel-guru-master/Logo.png'
import "./Header.css"
const Header = () => {
    return (
        <div className='container'>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
                <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo03" aria-controls="navbarTogglerDemo03" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <Link className="navbar-brand" to="/home">
                    <img className="logo" src={logo} alt="" />
                </Link>

                {/* <form className="form-inline my-2 my-lg-0">
                    <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
                </form> */}

                <div className="collapse navbar-collapse" id="navbarTogglerDemo03">
                    <ul className="navbar-nav ml-auto mt-2 mt-lg-0">
                        <li className="nav-item active">
                            <Link id='home' className="nav-link" to="/home">Home <span className="sr-only">(current)</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link id='news' className="nav-link" to="/news">News</Link>
                        </li>
                        <li className="nav-item">
                            <Link id='destination' className="nav-link" to="/destination">Destination</Link>
                        </li>
                        <li className="nav-item">
                            <Link id='blog' className="nav-link" to="/blog">Blog</Link>
                        </li>
                        <li className="nav-item">
                            <Link id='contact' className="nav-link" to="/contact">Contact</Link>
                        </li>
                        <li className="nav-item">
                            <Link id='login' className="nav-link" to="/login">Login</Link>
                        </li>

                    </ul>

                </div>
            </nav>
        </div>
    );
};

export default Header;