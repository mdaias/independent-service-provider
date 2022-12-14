import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import Loading from '../Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const navigate = useNavigate();
    const emailRef = useRef('');
    const passwordRef = useRef('');

    const location = useLocation();
    let from = location.state?.from?.pathname || "/";

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    let errorElement;

    if (error) {
        errorElement = <p className='text-danger'>Error: {error?.message} {error?.message}</p>
    }
  if (loading) {
    return <Loading></Loading>
  }

    if (user) {
        navigate(from, { replace: true });
    }
    const navigateRegistration = () => {
        navigate('/registration')
    }

    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;
        console.log(email, password)
        signInWithEmailAndPassword(email, password)
    }


    return (
        <div>
            <div className="container mt-5 shadow mx-auto border border-3 p-3 w-50">
                <Form onSubmit={handleSubmit}>
                    <h1 className='text-center text-primary'>Log In</h1>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className='text-primary fs-4 fw-bold'>Email address</Form.Label>
                        <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                        <Form.Text className="text-muted">
                            We'll never share your email with anyone else.
                        </Form.Text>
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className='text-primary fs-4 fw-bold'>Password</Form.Label>
                        <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                    </Form.Group>
                    <Button variant="primary" className='w-100' type="submit">
                        Submit
                    </Button>
                    {errorElement}
                    <p className='text-center mt-3 fw-bold'>Are you new user?<Link className='text-decoration-none text-danger fs-6 fw-bold ms-3' to='/registration' onClick={navigateRegistration}>Register</Link></p>
                </Form>
                <SocialLogin></SocialLogin>
            </div>
        </div>
    );
};

export default Login;