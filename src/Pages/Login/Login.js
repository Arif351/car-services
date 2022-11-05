import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import imgLog from '../../assets/images/login/login.svg'
import { AuthContext } from '../../Context/AuthProvider/AuthProvider';

const Login = () => {
    const { login } = useContext(AuthContext)
    const handleLogIn = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;

        login(email, password)
            .then(result => {
                const user = result.user;
                console.log(user);
            })
            .then(error => console.log(error));

    }
    return (
        <div>
            <div className="hero w-full">
                <div className="hero-content gap-20 flex-col lg:flex-row grid md:grid-cols-2">
                    <div className="text-center lg:text-left">
                        <img className='w-3/4' src={imgLog} alt="" />
                    </div>
                    <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100  py-20">
                        <h1 className="text-5xl font-bold text-center">Login</h1>
                        <form onSubmit={handleLogIn} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="text" placeholder="email" className="input input-bordered" name='email' />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="text" placeholder="password" className="input input-bordered" name='password' />
                                <label className="label">
                                    <a href="/" className="label-text-alt link link-hover">Forgot password?</a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <input className="btn btn-primary" type="submit" value="Login" />
                            </div>
                        </form>
                        <p className='text-center'>New to Genius Car? <Link className='text-orange-600 font-bold-bold' to='/signup'>Sign Up</Link> </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;