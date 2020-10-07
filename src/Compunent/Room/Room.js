import React, { useContext } from 'react';
import { homeDataContext } from '../../App';
import GoogleMaps from '../GoogleMaps/GoogleMaps';
import RoomDetails from './RoomDetails';

const Room = () => {

    const [homeData, setHomeData] = useContext(homeDataContext)
    const motel = homeData.motel
    console.log(motel)
    return (
        <div className='container'>
            <div className="row">
                <div className="col-md-6">
                    <p>252 stays Apr 13-17 3 guests</p>
                    <h1>Stay in {homeData.location}</h1>

                    <br />
                    {
                        motel.map(motel => <RoomDetails motel={motel} key={motel.id} ></RoomDetails>)
                    }
                </div>
                <div className="col-md-6">
                    <GoogleMaps></GoogleMaps>
                </div>
            </div>
        </div>
    );
};

export default Room;