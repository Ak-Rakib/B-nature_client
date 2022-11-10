import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ServiceCard from './ServiceCard';

const Service = () => {
    const [service, setService] = useState([])

    useEffect(() => {
        fetch('https://b-nature-server-ak-rakib.vercel.app/review')
            .then(res => res.json())
            .then(data => setService(data))
    }, []);

    return (
        <div>
            <div className='text-center mt-16'>
                <h1 className='text-5xl font-bold'>Service</h1>
                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin <br />
                    literature from 45 BC</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 gap-5 mb-12'>
                {
                    service.slice(0, 3).map(services => <ServiceCard
                        key={services._id}
                        services={services}
                    ></ServiceCard>)
                }
            </div>
            <div className='text-center'>
                <Link to='/serviceDetails'> <button className="btn btn-outline">See All</button></Link>
            </div>
        </div>
    );
};

export default Service;