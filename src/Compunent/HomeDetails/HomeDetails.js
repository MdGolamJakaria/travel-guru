import React from 'react';

const HomeDetails = (props) => {

    const { id, location, image } = props.location

    return (

        <div onClick={() => props.handleDetails(props.location)} className="col-md-4">
            <div className="card bg-dark text-white">
                <img src={image} className="card-img" alt="..." />
                <div className="card-img-overlay">
                    <h6 className="card-title text-uppercase">{location}</h6>
                </div>
            </div>
        </div>



    );
};

export default HomeDetails;