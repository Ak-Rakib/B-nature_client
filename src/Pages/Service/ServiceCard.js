import React from 'react';
import { Link } from 'react-router-dom';

const ServiceCard = ({ services }) => {
    const { name, img, price, description } = services;
    return (
        <div>
            <div className="card w-96 glass">
                <figure><img src={img} alt="car!" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p className='font-bold'>${price}</p>
                    <p>{description.slice(0, 70)}</p>
                    <div className="card-actions justify-end">
                        <Link to='/serviceDetails'><button className="btn btn-primary">Details</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;