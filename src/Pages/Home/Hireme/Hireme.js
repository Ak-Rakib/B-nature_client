import React from 'react';
import image from '../../../images/banner/images.png'

const HireMe = () => {
    return (
        <div className="flex flex-col w-full border-opacity-50 mt-24 mb-20">
            <div className="divider w-1/3 mx-auto mb-10"> <img className=' mx-auto w-1/3' src={image} alt="" /></div>
            <div className="grid h-20 card rounded-box place-items-center">
                <h1 className='text-3xl font-bold'>B-nature Studio</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, sequi?</p>
                <button className='btn btn-outline'>Hire Me</button>
            </div>
        </div>
    );
};

export default HireMe;