import React from 'react';
import image from '../../../images/banner/images.png'

const HireMe = () => {
    return (
        <div className='mt-16 mb-12'>
            <div className='mx-auto w-1/3'>
                <img className='mx-auto w-1/3' src={image} alt="" />
            </div>
            <div className='text-center'>
                <h1 className='text-3xl font-bold'>B-nature Studio</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nostrum, sequi?</p>
            </div>
            <div className='text-center mt-3'>
                <button className='btn btn-outline'>Hire Me</button>
            </div>
        </div>
    );
};

export default HireMe;