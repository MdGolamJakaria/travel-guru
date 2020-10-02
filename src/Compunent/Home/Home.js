import React from 'react';
import "./Home.css";
import { Link } from 'react-router-dom';
const Home = () => {
    return (
        <div className='container'>
            <div className="row home-content">
                <div className="col-md-6">
                    <h1>COX'S BAZAR</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus omnis nobis voluptates beatae optio voluptate. Laudantium ut eos consequuntur magni.</p>
                    <Link to='/booking'><button className="btn btn-booking">Booking <i className="fas fa-arrow-right"></i></button></Link>
                </div>
                <div className="col-md-6">
                    <div className="card-deck">
                        <div className="card card-box" id="cox-bazar">
                            <div className="card-body">
                                <h6 className="card-title">COX'S BAZAR</h6>
                            </div>
                        </div>
                        <div className="card card-box" id="sreemangle">
                            <div className="card-body">
                                <h6 className="card-title">SREEMANGLE</h6>
                            </div>
                        </div>
                        <div className="card card-box" id="sundarbans">
                            <div className="card-body">
                                <h6 className="card-title">SUNDARBANS</h6>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;