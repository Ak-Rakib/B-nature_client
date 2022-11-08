import React from 'react';

const ServiceCard = ({ services }) => {
    const { name, img, price, description } = services;
    return (
        <div>
            <div className="card w-96 glass">
                <figure><img src={img} alt="car!" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Learn now!</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceCard;