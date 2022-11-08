import React, { useEffect, useState } from 'react';
import ServiceCard from './ServiceCard';

const Service = () => {
    const [service, setService] = useState([])

    useEffect(() => {
        fetch('Fakedata.json')
            .then(res => res.json())
            .then(data => setService(data))
    }, []);

    return (
        <div>
            <div className='text-center mt-12'>
                <h1 className='text-5xl'>Service</h1>
                <p>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin <br />
                     literature from 45 BC</p>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 mt-8 gap-5 mb-12'>
                {
                    service.map(services => <ServiceCard
                        services={services}
                    ></ServiceCard>)
                }
            </div>
        </div>
    );
};

export default Service;