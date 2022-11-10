import React, { useEffect, useState } from 'react';
import ClientProjectCard from './ClientProjectCard';

const RecentClientProject = () => {
    const [project, setProject] = useState([]);

    useEffect(() => {
        fetch('https://b-nature-server-ak-rakib.vercel.app/projects')
            .then(res => res.json())
            .then(data => setProject(data))
    }, []);

    return (
        <div className='mt-16 mb-14'>
            <div className='text-center'>
                <h1 className='text-5xl font-bold'>Our Recent Client <br /> Project</h1>
            </div>
            <div className='grid gap-6'>
                {
                    project.map(p => <ClientProjectCard
                        p = {p}
                    ></ClientProjectCard>)
                }
            </div>
        </div>
    );
};

export default RecentClientProject;