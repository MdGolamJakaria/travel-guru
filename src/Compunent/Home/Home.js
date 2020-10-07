import React, { useContext, useState } from 'react';
import "./Home.css";
import fakeData from '../../fakeData/fackData';
import HomeDetails from '../HomeDetails/HomeDetails';
import { Link } from 'react-router-dom';
import { homeDataContext } from '../../App';

const Home = () => {
    const [location, setLocation] = useState(fakeData)

    const [homeData, setHomeData] = useContext(homeDataContext)
    console.log(homeData)

    const handleDetails = (data) => {
        setHomeData(data)
    }
    return (
        <div>
            <div className='container'>
                <div className="row home-content">
                    <div className="col-md-6">
                        <h1 className='text-uppercase'>{homeData.location}</h1>
                        <p>{homeData.description}</p>
                        <Link to='/booking'><button className="btn btn-booking">Booking <i className="fas fa-arrow-right"></i></button></Link>
                    </div>
                    <div className="col-md-6">
                        <div className="row">

                            {
                                location.map(location => <HomeDetails location={location} handleDetails={handleDetails} key={location.id} ></HomeDetails>)
                            }

                        </div>


                    </div>
                </div>
            </div>

        </div>

    );
};

export default Home;