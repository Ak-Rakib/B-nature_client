import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import MyReviewsCard from './MyReviewsCard';

const MyReviews = () => {
    const { user } = useContext(AuthContext)
    const [myReviews, setMyReviews] = useState([]);

    useEffect(() => {
        fetch(`https://b-nature-server-ak-rakib.vercel.app/comment?email=${user?.email}`)
            .then(res => res.json())
            .then(data => setMyReviews(data))
    }, [user?.email])


    const deleteReview = id => {
        const action = window.confirm('You want to delete this review?')
        if(action){
            fetch(`https://b-nature-server-ak-rakib.vercel.app/comment/${id}`, {
                method: "DELETE"
            })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                if(data.deletedCount){
                    alert('delete successfully');
                    const othersReview = myReviews.filter(reviews => reviews._id !== id)
                    setMyReviews(othersReview)
                }
            })
        }
    }


    return (
        <div>
            <h1 className='text-center text-4xl mb-6'>Total Your Review History {myReviews.length}</h1>
            <div className="overflow-x-auto w-full">
                <table className="table w-full">
                    <thead>
                        <tr>
                            <th>
                                <label>
                                   
                                </label>
                            </th>
                            <th>Name</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            myReviews?.map(reviews => <MyReviewsCard
                                key={reviews._id}
                                reviews={reviews}
                                deleteReview = {deleteReview}
                            ></MyReviewsCard>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyReviews;
