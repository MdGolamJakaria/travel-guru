import React from 'react';
import { Link } from 'react-router-dom';
import FromCelender from '../Celender/FromCelender';
import ToCelender from '../Celender/ToCelender';
import './Booking.css'
const Booking = () => {

    return (
        <div className='container'>
            <div className="row home-content">
                <div className="col-md-6">
                    <h1>COX'S BAZAR</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ducimus omnis nobis voluptates beatae optio voluptate. Laudantium ut eos consequuntur magni.</p>
                </div>
                <div className="col-md-6">
                    <div className='row'>
                        <div className="col-md-12">
                            <p>Origin</p>
                            <h5>Dhaka</h5>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12">
                            <p>Destination</p>
                            <h5>Cox's Bazar</h5>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-6">
                            <FromCelender></FromCelender>
                        </div>
                        <div className="col-md-6">
                            <ToCelender></ToCelender>
                        </div>
                    </div>
                    <br />
                    <div className="row">
                        <div className="col-md-12">
                            <Link to="/room"><button className="form-control booking-btn">Start Booking</button></Link>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default Booking;