import React, { useState } from 'react';
import { FaWindowClose } from 'react-icons/fa';
import './ServiceDetailsCard.css';

const ServiceDetailsCard = ({ data }) => {
    const { img, name, description, price, _id } = data

    const [model, setModel] = useState(false);
    const [fullScreen, setFullScreen] = useState('');

    const showFullScreen = img => {
        setFullScreen(img);
        setModel(true);
    }

    return (
        <div>
            <div className={model? "model open" : "model"}>
                <img src={fullScreen} alt="" />
               <FaWindowClose onClick={() => setModel(false)}></FaWindowClose>
            </div>
            <div className="card lg:card-side bg-base-100 shadow-xl">
                <img onClick={() => showFullScreen(img)} src={img} alt="Album" />
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <p>${price}</p>
                    <p>{description}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-primary">Review</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServiceDetailsCard;