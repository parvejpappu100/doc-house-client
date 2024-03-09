import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';

const SocialLogin = () => {

    const { googleSingIn } = useAuth();
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    const handleGoogleLogin = () => {
        googleSingIn()
            .then(result => {
                const user = result.user;
                // name, email, phone, city, country, message, postCode, address: userAddress
                const savedUser = { name: user.displayName, email: user.email, image: user.photoURL, role: "user" };
                navigate(from, { replace: true })
            })
            .catch(error => {
                console.log(error.message)
            })
    }

    return (
        <div className='max-w-xs mx-auto'>
            <div className="divider text-xl font-semibold">Or continue with</div>
            <div className='flex gap-5 justify-center  text-4xl my-5'>
                <button onClick={handleGoogleLogin}><FaGoogle></FaGoogle></button>
                <button><FaGithub></FaGithub></button>
                <button><FaFacebook></FaFacebook></button>
            </div>
        </div>
    );
};

export default SocialLogin;