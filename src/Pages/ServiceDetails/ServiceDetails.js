import React from 'react';
import { useLoaderData } from 'react-router-dom';
import ServiceDetailsCard from './ServiceDetailsCard';

const ServiceDetails = () => {
    const detailsData = useLoaderData();
    return (
        <div className='grid gap-5'>
            {
                detailsData.map(data => <ServiceDetailsCard
                    key={data._id}
                    data = {data}
                ></ServiceDetailsCard>)
            }
        </div>
    );
};

export default ServiceDetails;