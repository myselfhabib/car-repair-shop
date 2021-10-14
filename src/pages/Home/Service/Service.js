import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css'

const Service = ({ service }) => {
    const { id, name, price, description, img } = service;
    return (
        <div className='service'>
            <img src={img} className="rounded" alt="" />
            <h4>Name: {name}</h4>
            <p className="px-3">{description}</p>
            <h5>Price: {price}</h5>
            <Link to={`/booking/${id}`}><button className="bg-info px-3 py-1 rounded ">Book {name.toLowerCase()}</button></Link>
        </div>
    );
};

export default Service;