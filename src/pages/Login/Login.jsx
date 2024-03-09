import React, { useState } from 'react';
import log from "../../assets/images/log.png";
import { useForm } from 'react-hook-form';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import SocialLogin from '../../components/SocialLogin/SocialLogin';
import useAuth from '../../hooks/useAuth';
import Swal from 'sweetalert2';

const Login = () => {

    const { singIn, restPassword } = useAuth();
    const [logInError, setLogInError] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const { register, handleSubmit, formState: { errors } } = useForm();

    const onSubmit = (data, event) => {
        event.preventDefault();
        const email = data.email;
        setUserEmail(email)
        const password = data.password;
        singIn(email, password)
            .then(result => {
                const user = result.user;
                setLogInError("")
                navigate(from, { replace: true });
                Swal.fire({
                    position: 'top',
                    icon: 'success',
                    title: 'User Login Successfully',
                    showConfirmButton: false,
                    timer: 1500
                })
                setUserEmail("")
            })
            .catch(error => {
                setLogInError(error.message)
            })
    };

    const handleRestPassword = (event) => {
        const email = userEmail;
        console.log(email)
        if (!email) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please provide a email!'
            })
            return;
        }
        restPassword(email)
            .then(() => {
                Swal.fire('Check your email !')
            })
            .catch(() => {

            })
    }

    return (
        <div className='flex flex-col lg:flex-row items-center'>
            <div className='bg-[#07332F] w-full lg:h-screen '>
                <div className='flex justify-center items-center lg:h-screen'>
                    <img src={log} alt="" />
                </div>
            </div>
            <div className=' w-full'>
                <div className='max-w-[460px] mx-auto border shadow py-5 bg-white'>
                    <h3 className='text-2xl font-semibold text-center'>Sign in to Doc House</h3>
                    <div className="hero w-full">
                        <div className="hero-content w-full">
                            <div className="card flex-shrink-0 w-full">
                                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-bold">Username or Email Address</span>
                                        </label>
                                        <input name='email' type="email" {...register("email", { required: true })} placeholder="Enter your username or address" className="input input-bordered bg-[#F3F3F3] " />
                                        {errors.email && <span className='text-red-600'>Email is required</span>}
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-bold">Password</span>
                                        </label>
                                        <input type="password" {...register("password", { required: true })} placeholder="Enter your password" className="input input-bordered bg-[#F3F3F3] " />
                                        {
                                            userEmail && <label className="label">
                                                <a onClick={handleRestPassword} className="label-text-alt text-red-600 link link-hover">Forgot password?</a>
                                            </label>
                                        }
                                        {errors.password && <span className='text-red-600'>Password is required</span>}
                                    </div>
                                    <div className="form-control mt-6">
                                        <input className='bg-[#F7A582] text-white  font-semibold px-7 py-3 rounded-lg hover:bg-[#F7A582] hover:text-black duration-500 cursor-pointer' type="submit" value="Login" />
                                    </div>
                                </form>
                                <p className="text-red-600 text-center mb-2 font-semibold">{logInError}</p>
                                <p className='text-center font-semibold'>Please register at first. Go to <Link to="/singUp" className='text-[#F7A582]'> SIGN UP!</Link></p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <SocialLogin></SocialLogin>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Login;