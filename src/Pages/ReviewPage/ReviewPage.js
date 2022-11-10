import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import ShowsReview from './ShowsReview';


const ReviewPage = () => {
    const { user } = useContext(AuthContext);
    const { _id } = useLoaderData();
    const [review, setReview] = useState([])
    useEffect(() => {
        fetch('https://b-nature-server-ak-rakib.vercel.app/comment')
            .then(res => res.json())
            .then(data => setReview(data))
    }, []);



    // ------------------ create  post -------------------
    const reviewHandler = event => {
        event.preventDefault();
        const form = event.target;
        const review = form.review.value;
        const name = form.name.value;
        const id = _id;
        console.log(review)

        const reviews = {
            photoId: id,
            CustomerReview: review,
            userName: name
        }

        if (user.email) {
            fetch('https://b-nature-server-ak-rakib.vercel.app/comment', {
                method: "POST",
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(reviews),
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data)
                    form.reset();
                })
        } else {
            alert('You have to login')
        }
    }


    return (

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>

                            </th>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            review.map(reviews => <ShowsReview
                                key={reviews._id}
                                reviews={reviews}
                            ></ShowsReview>)
                        }
                    </tbody>
                </table>
            </div>
            <form onSubmit={reviewHandler}>
                <div className='mt-20 ml-12'>
                    <textarea name='review' className="textarea textarea-secondary h-24" placeholder="text your review"></textarea>
                    <label className='label'>
                        <input name='name' type="name" placeholder="Type here" className="input input-bordered input-accent w-full max-w-xs" />
                    </label>
                    <label className='label'>
                        <input className='btn btn-outline' type="submit" value="Submit" />
                    </label>
                </div>
            </form>
        </div>
    );
};

export default ReviewPage;
