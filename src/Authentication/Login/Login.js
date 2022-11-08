import React from 'react';
import { Link } from 'react-router-dom';
import image from '../../images/login/238-2381760_security-internet-safety-transparent-icon-hd-png-download.png'

const Login = () => {
    const loginHandler = event => {
        event.preventDefault()
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <img className='' src={image} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={loginHandler} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required/>
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" />
                            <label className="label">
                                <a href="#" className="label-text-alt link link-hover">Forgot password?</a>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <input className="btn btn-primary" type="button" value="Login" />
                        </div>
                        <div>
                            <p>New of this site? please <Link to='/signup'>SignUp</Link> </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;