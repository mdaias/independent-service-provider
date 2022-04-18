import React from 'react';
import { Button, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Registration = () => {
    return (
        <div>
            <h1 className='text-center mt-5 text-success'>Pleace Registration</h1>
            <div className="container mt-5">
                <Form className='shadow mx-auto border border-3 p-3 w-50'>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className='text-primary fs-4 fw-bold'>Your Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter your name" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label className='text-primary fs-4 fw-bold'>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email" required />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label className='text-primary fs-4 fw-bold'>Password</Form.Label>
                        <Form.Control type="password" placeholder="Enter Password" required />
                    </Form.Group>
                    <Button variant="primary" className='w-100' type="submit">
                        Submit
                    </Button>
                    <p className='text-center mt-3 fw-bold'>Already have a account?<Link className='text-decoration-none text-danger fs-6 fw-bold ms-3' to='/login'>Log In</Link></p>
                </Form>
            </div>
        </div>
    );
};

export default Registration;