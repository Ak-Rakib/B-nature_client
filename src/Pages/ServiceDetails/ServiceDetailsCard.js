import React from 'react';

const ServiceDetailsCard = ({ data }) => {
    const { img, name, description, price } = data
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <img src={img} alt="Album" />
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>${price}</p>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Review</button>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetailsCard;