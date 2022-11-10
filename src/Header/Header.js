import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Header = () => {
    const { user, logOut } = useContext(AuthContext)

    const logOutHandler = () => {
        logOut()
            .then(() => {})
            .catch(error => console.log(error))

    }

    return (
        <div className="navbar bg-base-100">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl"> <Link to='/'>B-nature</Link> </a>
            </div>
            <div className="flex-none">
                <div className="dropdown dropdown-end">
                    {
                        user?.email ?
                            <button onClick={logOutHandler} className='btn btn-ghost'>Log-out</button>
                            :
                            <Link to='/login'><button className='btn btn-ghost'>Log-In</button></Link>
                    }
                </div>
                <div className="dropdown dropdown-end">
                    <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            {
                                user?.uid ?
                                    <>
                                        <img src={user?.photoURL} alt='' />
                                    </>
                                    :
                                    <img src="https://placeimg.com/80/80/people" alt='' />
                            }
                        </div>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li>
                            <a className="justify-between">
                                Profile
                                <span className="badge">New</span>
                            </a>
                        </li>
                        <li> <Link to='/addPost'>Add Post</Link> </li>
                        <li> <Link to='/blog'>Blog</Link> </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;