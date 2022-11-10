import React, { useContext } from 'react';
import { AuthContext } from '../../AuthProvider/AuthProvider';

const ShowsReview = ({ reviews }) => {
    const { user } = useContext(AuthContext)
    const { CustomerReview, userName } = reviews;
    return (
        <tr>
            <th>
                <label>

                </label>
            </th>
            <td>
                <div className="flex items-center space-x-3">
                    <div className="avatar">
                        <div className="mask mask-squircle w-12 h-12">
                            <img src={user.photoURL} alt="Avatar Tailwind CSS Component" />
                        </div>
                    </div>
                    <div>
                        <div className="font-bold">
                            {
                                user?.email ? 
                                <>
                                    {userName}
                                </>
                                :
                                {}
                            }
                        </div>
                        <div className="text-sm opacity-50">United States</div>
                    </div>
                </div>
            </td>
            <td>
                {CustomerReview}
            </td>
            <th>
                <button className="btn btn-ghost btn-xs">Edit</button>
                <button className="btn btn-ghost btn-xs">Delete</button>
            </th>
        </tr>
    );
};

export default ShowsReview;
