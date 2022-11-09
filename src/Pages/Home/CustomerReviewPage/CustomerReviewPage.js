import React from 'react';
import { useLoaderData } from 'react-router-dom';

const CustomerReviewPage = () => {
    const reviewPage = useLoaderData();
    return (
        <div>
            <h1>{reviewPage.name}</h1>
        </div>
    );
};

export default CustomerReviewPage;