import React, { useState } from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import auth from '../../firebase.init';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import SocialLogin from '../SocialLogin/SocialLogin';

const Registration = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);


    const navigate = useNavigate();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    // const [error,setError] =useState('');

    const navigateLogin = () => {
        navigate('/login')
    }

    const handleNameBlur = event => {
        setName(event.target.value)
    }
    const handleEmailBlur = event => {
        setEmail(event.target.value)
    }
    const handlePasswordBlur = event => {
        setPassword(event.target.value)
    }
    const handleConfirmPassword = event => {
        setConfirmPassword(event.target.value)
    }

    const handleCreateUser = event => {
        event.preventDefault();
        console.log(name, email, password, confirmPassword)
        createUserWithEmailAndPassword(email, password)
    }

    if (user) {
        navigate('/checkout')
    }

    return (
        <div className="container mt-5 shadow mx-auto border border-3 p-3 w-50">

            <Form onSubmit={handleCreateUser}>
                <h1 className='text-center text-primary'>Registration</h1>
                <Form.Group className="mb-3" controlId="formBasicName">
                    <Form.Label className='text-primary fs-4 fw-bold'>Your Name</Form.Label>
                    <Form.Control onBlur={handleNameBlur} type="text" placeholder="Enter your name" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label className='text-primary fs-4 fw-bold'>Email address</Form.Label>
                    <Form.Control onBlur={handleEmailBlur} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label className='text-primary fs-4 fw-bold'>Password</Form.Label>
                    <Form.Control onBlur={handlePasswordBlur} type="password" placeholder="Enter Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
                    <Form.Label className='text-primary fs-4 fw-bold'>Confirm Password</Form.Label>
                    <Form.Control onBlur={handleConfirmPassword} type="password" placeholder="Enter Confirm-Password" required />
                </Form.Group>
                <Button variant="primary" className='w-100' type="submit">
                    Submit
                </Button>
                <p className='text-center mt-3 fw-bold'>Already have a account?<Link className='text-decoration-none text-danger fs-6 fw-bold ms-3' to='/login' onClick={navigateLogin}>Log In</Link></p>
            </Form>
            <SocialLogin></SocialLogin>
        </div>
    );
};

export default Registration;