import React, { useState } from 'react';
import useAuth from '../../hooks/useAuth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import Swal from 'sweetalert2';
import { sendEmailVerification, updateProfile } from 'firebase/auth';
import log from "../../assets/images/log.png";
import useAxiosSecure from '../../hooks/useAxiosSecure';


const img_hosting_token = import.meta.env.VITE_Image_Upload_Token;
const SingUp = () => {

    const [axiosSecure] = useAxiosSecure();
    const [checked, setChecked] = useState(false);
    const [passError, setPassError] = useState("");
    const [singUpError, setSingUpError] = useState("");
    const [isDisable, setIsDisable] = useState(false);
    const { createUser } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleChecked = () => {
        setChecked(!checked)
    };

    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const image_hosting_url = `https://api.imgbb.com/1/upload?key=${img_hosting_token}`;

    const onSubmit = data => {
        setIsDisable(true);

        if (data.password === data.confirmPassword) {
            setPassError("");
            const formData = new FormData();
            formData.append("image", data.image[0]);

            fetch(image_hosting_url, {
                method: "POST",
                body: formData
            })
                .then(res => res.json())
                .then(imgResponse => {
                    if (imgResponse.success) {
                        const imgURL = imgResponse.data.display_url;

                        createUser(data.email, data.password)
                            .then(result => {
                                const user = result.user;
                                updateUserData(user, data.name, imgURL, data.phone)
                                setSingUpError("");
                                sendVerificationEmail(user)
                                navigate(from, { replace: true });
                                reset();
                                setIsDisable(false);
                            })
                            .catch(error => {
                                setSingUpError(error.message);
                                setIsDisable(false);
                            })
                    }
                })

        }
        else {
            setPassError("Password dose not match . Please provide same password");
            setIsDisable(false)
            return;
        }
    };

    const sendVerificationEmail = user => {
        sendEmailVerification(user)
            .then(() => {
                Swal.fire('Please verify your email ! Check Inbox.')
            })
            .catch(error => {
                setSingUpError(error.message)
            })
    }

    const updateUserData = (user, name, photoUrl, phone) => {
        updateProfile(user, {
            displayName: name,
            photoURL: photoUrl
        })
            // name, email, phone, city, country, message, postCode, address: userAddress
            .then(() => {
                const savedUser = { name: name, email: user.email, image: photoUrl, role: "user" };
                axiosSecure.post("/users", savedUser)
                    .then(data => {
                        if (data.data.insertedId) {
                            navigate(from, { replace: true });
                            Swal.fire({
                                position: 'top',
                                icon: 'success',
                                title: 'User Create Successfully',
                                showConfirmButton: false,
                                timer: 1500
                            })
                        }
                    })

            })
            .catch(error => {

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
                <div className='max-w-[650px] mx-auto border shadow py-5 bg-white'>
                    <h3 className='text-2xl font-semibold text-center'>Sign in to Doc House</h3>
                    <div className="hero w-full">
                        <div className="hero-content w-full">
                            <div className="card flex-shrink-0 w-full">
                                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                                    <div className='flex items-center gap-5 flex-col lg:flex-row'>
                                        <div className="form-control w-full">
                                            <label className="label">
                                                <span className="label-text font-bold">Name</span>
                                            </label>
                                            <input name='name' type="text" {...register("name", { required: true })} placeholder="Enter your full name" className="input input-bordered bg-[#F3F3F3] " />
                                            {errors.name && <span className='text-red-600'>Name is required</span>}
                                        </div>
                                        <div className="form-control w-full">
                                            <label className="label">
                                                <span className="label-text font-bold">Username or Email Address</span>
                                            </label>
                                            <input name='email' type="email" {...register("email", { required: true })} placeholder="Enter your username or address" className="input input-bordered bg-[#F3F3F3] " />
                                            {errors.email && <span className='text-red-600'>Email is required</span>}
                                        </div>
                                    </div>
                                    <div className='flex items-start gap-5 flex-col lg:flex-row'>
                                        <div className="form-control w-full">
                                            <label className="label">
                                                <span className="label-text font-bold">Password</span>
                                            </label>
                                            <input type={checked ? "text" : "password"} {...register("password", { required: true, minLength: 6, maxLength: 20, pattern: /(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/ })} placeholder="Password" className="input input-bordered bg-[#F3F3F3] " />
                                            <label className="label cursor-pointer">
                                                <input onClick={handleChecked} type="checkbox" checked={checked} className="checkbox" />
                                                <span className="label-text font-bold">Show Password</span>
                                            </label>
                                            {errors.password?.type == "required" && <span className='text-red-600'>Password is required.</span>}
                                            {errors.password?.type == "minLength" && <span className='text-red-600'>Password should be at least 6 characters.</span>}
                                            {errors.password?.type == "maxLength" && <span className='text-red-600'>Password should be maximum 20 characters</span>}
                                            {errors.password?.type == "pattern" && <span className='text-red-600'>Password should be at least one uppercase, one lowercase , one digit and one special character</span>}
                                        </div>
                                        <div className="form-control w-full">
                                            <label className="label">
                                                <span className="label-text font-bold">Confirm Password</span>
                                            </label>
                                            <input type={checked ? "text" : "password"} {...register("confirmPassword", { required: true })} placeholder="Confirm Password" className="input input-bordered bg-[#F3F3F3] " />
                                            {errors.confirmPassword && <span className='text-red-600'>Confirm password is required</span>}
                                            <span className='text-red-600'>{passError}</span>
                                        </div>
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text font-bold">Your Photo</span>
                                        </label>
                                        <input type="file" {...register("image", { required: true })} className="file-input file-input-bordered w-full f" />
                                        {errors.image && <span className='text-red-600'>Image is required</span>}
                                    </div>
                                    <div className="form-control mt-6">
                                        <input disabled={isDisable} className='bg-[#F7A582] text-white  font-semibold px-7 py-3 rounded-lg hover:bg-[#F7A582] hover:text-black duration-500 cursor-pointer disabled:cursor-not-allowed disabled:bg-gray-500 disabled:text-gray-400' type="submit" value="Create Account" />
                                    </div>
                                </form>
                                <p className="text-red-600 text-center mb-2 font-semibold">{singUpError}</p>
                                <p className='text-center font-semibold'>Already registered? Go to <Link to="/login" className='text-[#F7A582]'>SIGN IN!</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SingUp;