import React from 'react';

const ClientProjectCard = ({ p }) => {
    const { img, title, description } = p;
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img src={img} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">View project</button>
                </div>
            </div>
        </div>
    );
};

export default ClientProjectCard;