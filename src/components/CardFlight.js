
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectFlightArr1, getFlightAsync } from '../features/flight/flightSlice';



const CardFlight = (props) => {
    const flightArr1 = useSelector(selectFlightArr1);
    const dispatch = useDispatch();
    // -------------------------------------- - useEffect-for-flightArr1 - ------------------------------
    useEffect(() => {
        dispatch(getFlightAsync())
    }, [])
    // ----------------------------------------------------------------------------------------------------------
    return (
        <div>CardFlight

            <h1>flightArr1-length: {flightArr1.length}</h1>

            <div className="card-group">
                
                        <div className="card">
                            <img className="card-img-top" src="https://picsum.photos/300/200" alt="https://picsum.photos/300/200" />
                            <div className="card-body">
                                <h5 className="card-title">Flight to: {props.destination}</h5>
                                <p className="card-text">companyName: {props.companyName}</p>
                                <p className="card-text"><small className="text-muted">id: {props.id}</small></p>
                            </div>
                        </div>
            </div>
        </div>
    )
}

export default CardFlight