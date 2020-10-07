import React from 'react';

const RoomDetails = (props) => {
    console.log(props)
    const { id, image, title, guests,  star, review, bedrooms, beds, baths, facilities, cancllation, perDayPrice, shift, total } = props.motel
    return (
        <div className="row mb-3">
            <div className="col-md-4">
                <img className="w-100" src={image} alt="" />
            </div>
            <div className="col-md-8">
                <h6>{title}</h6>
                <div className="row">
                    <div className="col-md-3">
                        <p>{guests} guests</p>
                    </div>
                    <div className="col-md-3">
                        <p>{bedrooms} bedro</p>
                    </div>
                    <div className="col-md-3">
                        <p>{beds} beds</p>
                    </div>
                    <div className="col-md-3">
                        <p>{baths} baths</p>
                    </div>
                </div>
                <p>{facilities} <br /> {cancllation}</p>

                <div className="row">
                    <div className="col-md-3">
                        <p>{star}({review})</p>
                    </div>
                    <div className="col-md-5">
                        <h6>${perDayPrice}/{shift}</h6>
                    </div>
                    <div className="col-md-4">
                        <p>$ {total} total</p>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default RoomDetails;