import React from 'react';
import { Button } from 'react-bootstrap';
import { useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import googleLogo from '../../google-logo.png'
import Loading from '../Loading/Loading';

const SocialLogin = () => {

    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);

        let errorElement
        const navigate = useNavigate();

        if (error) {
            errorElement = <p className='text-danger'>Error: {error?.message} {error?.message}</p>
        }
      if (loading) {
        return <Loading></Loading>
      }
      if (user) {
        navigate('/checkout')
      }

    return (
        <div>
            <div className='d-flex align-items-center'>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
                <p className='mt-2 px-2'>or</p>
                <div style={{ height: '1px' }} className='bg-primary w-50'></div>
            </div>
            {errorElement}
            <div className='d-flex justify-content-center align-items-center'>
                <Button onClick={()=>signInWithGoogle()} className='border border-info rounded p-1 text-decoration-none fw-bold ms-3 bg-white text-primary'><span><img src={googleLogo} width='30px' alt="" /></span> <span >Continue with Google</span></Button>

            </div>
        </div>
    );
};

export default SocialLogin;