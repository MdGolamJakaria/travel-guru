import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { homeDataContext } from '../../App';
import FromCelender from '../Celender/FromCelender';
import ToCelender from '../Celender/ToCelender';
import './Booking.css'
const Booking = () => {
    const [homeData, setHomeData] = useContext(homeDataContext)
    return (
        <div className='container'>
            <div className="row home-content">
                <div className="col-md-6">
                    <h1 className='text-uppercase'>{homeData.location}</h1>
                    <p>{homeData.description}</p>
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
                            <h5 className='text-capitalize'>{homeData.location}</h5>
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