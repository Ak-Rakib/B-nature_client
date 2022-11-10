import { GoogleAuthProvider } from 'firebase/auth';
import { React, useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import image from '../../images/signup/sign-up-button-png-transparent-picture.png'
import useTitle from '../../UseTitle/UseTitle';

const Register = () => {
    useTitle('signup')
    const { manualSignUp, googleSignUp, updateUserProfile } = useContext(AuthContext);
    const provider = new GoogleAuthProvider();

    const signUpHandler = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const photoURL = form.photoURL.value;
        const email = form.email.value;
        const password = form.password.value;
        console.log(name, email, password);

        manualSignUp(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                userUpdate(name, photoURL)
                form.reset();
            })
            .catch(error => console.log(error))
    }


    const googleHandler = () => {
        googleSignUp(provider)
            .then(result => {
                const user = result.user;
                console.log(user)
            })
            .catch(error => console.log(error))
    }


    const userUpdate = (name, photoURL) => {
        const profile = {
            displayName: name,
            photoURL: photoURL
        }
        updateUserProfile(profile)
            .then(() => { })
            .catch(error => console.log(error));
    }

    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse">
                <div className="text-center lg:text-left">
                    <img className='' src={image} alt="" />
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <form onSubmit={signUpHandler} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="name" name='name' placeholder="name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">photoURL</span>
                            </label>
                            <input type="photoURL" name='photoURL' placeholder="photoURL" className="input input-bordered" />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
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
                            <input className="btn btn-primary" type="submit" value="Sign up" />
                        </div>
                        <div className="form-control mt-2">
                            <input onClick={googleHandler} className="btn btn-primary" type="submit" value="SignUp with Google" />
                        </div>
                        <div>
                            <p>ALready have an account? please <Link to='/login'>LogIn</Link> </p>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;