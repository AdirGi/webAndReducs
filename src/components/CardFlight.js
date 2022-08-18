
import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { selectFlightArr1, getFlightAsync, deleteFlightAsync } from '../features/flight/flightSlice';


import Card from 'react-bootstrap/Card';


const CardFlight = (props) => {
    const flightArr1 = useSelector(selectFlightArr1);
    const dispatch = useDispatch();
    // -------------------------------------- - useEffect-for-flightArr1 - ------------------------------
    useEffect(() => {
        dispatch(getFlightAsync())
    }, [])
    // ----------------------------------------------------------------------------------------------------------
    return (

        <Card>
            <Card.Img variant="top" src="https://picsum.photos/200/300" />
            <Card.Body>
                <Card.Title>flight to: {props.FlightCardProps.destination_country_id.country_name}</Card.Title>
                <Card.Text>
                    companyName: {props.FlightCardProps.airline_company_id.company_name}<br></br>
                    origin_country_id: {props.FlightCardProps.origin_country_id.country_name}<br></br>
                    destination_country_id: {props.FlightCardProps.destination_country_id.country_name}<br></br>
                    landing_time: {props.FlightCardProps.landing_time}<br></br>
                    remaining_tickets: {props.FlightCardProps.remaining_tickets}<br></br>
                    createdTime: {props.FlightCardProps.createdTime}<br></br>
                </Card.Text>
            </Card.Body>
            <Card.Footer>
                <small className="text-muted">id: {props.FlightCardProps.id}</small>
            </Card.Footer>
        </Card>

    )
}

export default CardFlight