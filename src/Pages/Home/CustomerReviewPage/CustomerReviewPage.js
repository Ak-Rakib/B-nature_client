import React from 'react';
import { useLoaderData } from 'react-router-dom';


const CustomerReviewPage = () => {
    const { name, img, price, description } = useLoaderData();
    // console.log(reviewPage)
    return (
        <div className="card lg:card-side bg-base-100 shadow-xl">
            <figure><img src={img} alt="Album" /></figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>${price}</p>
                <p>{description}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-primary">Listen</button>
                </div>
            </div>
        </div>
    );
};

export default CustomerReviewPage;