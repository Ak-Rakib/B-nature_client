import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';


const CustomerReviewPage = () => {
    const { name, img, price, description, _id } = useLoaderData();
    // console.log(reviewPage)
    return (
        <div className='grid gap-6'>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <figure><img src={img} alt="Album" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>${price}</p>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                        <Link to={`/reviewPage/${_id}`}><button className="btn btn-primary">Review</button></Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CustomerReviewPage;