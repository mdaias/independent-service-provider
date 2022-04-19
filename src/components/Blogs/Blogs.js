import React from 'react';

const Blogs = () => {
    return (
        <div className='container mt-5'>
            <div className='fw-bold fs-5'>
                <h1 className='text-center my-5 fs-2 fw-bold'>Q1: Difference between authorization and authentication</h1>
                <table striped bordered hover>
                    <thead className='fs-3'>
                        <tr className='border border-4 text-center'>
                            <th className='col-6 border-end '>Authentication</th>
                            <th className='col-6'>Authorization</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr className="border border-4">
                            <td className="border-end">
                                Authentication verifies who the user is.
                            </td>
                            <td className="border-end">
                                Authorization determines what resources a user can access.
                            </td>
                        </tr>
                        <tr className="border border-4">
                            <td className="border-end">
                                Authentication works through passwords, one-time pins, biometric information, and other information provided or entered by the user.
                            </td>
                            <td className="border-end">
                                Authorization works through settings that are implemented and maintained by the organization.
                            </td>
                        </tr>
                        <tr className="border border-4">
                            <td className="border-end">
                                Authentication is the first step of a good identity and access management process.
                            </td>
                            <td className="border-end">
                                Authorization always takes place after authentication.
                            </td>
                        </tr>
                        <tr className="border border-4">
                            <td className="border-end">
                                Authentication is visible to and partially changeable by the user.
                            </td>
                            <td className="border-end">
                                Authorization isn't visible to or changeable by the user.
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>

            <div>
                <h1 className='text-center my-5 fs-2 fw-bold'>Q2: Why are you using firebase?What other options do you have to implement authentication?
                </h1>

                <p className='fs-6 fw-bold'>Ans:Firebase is a toolkit and infrastructure that aims at supporting the process of building better applications and growing a successful business. This technique continues to innovate and dominate the BaaS (Backend as a Service) market. Along with the time, it has grown so much that it has become a key component of Google's mobile strategy. It was bought by Google and now it is being constantly improved in order to make the user experience much more convenient and productive. According to Firebase console, the application SDKs provided by this toolkit, directly interact with backend services.Therefore, there is no need to establish any connection between the app and the service.So, if you operate one of the Firebase database options, you typically write code to query the database in the app.This is distinct from traditional app development.The traditional app development process requires writing both frontend and backend software.The frontend code just implements the API endpoints exposed by the backend, and the backend code actually does the work.However, with Firebase products, traditional backend development is bypassed, putting the work into the client.</p>

                <h3 className='my-3'>Firebase competitors</h3>

                <div>
                    <ol className='fw-bold fs-5'>
                        <li>Parse - Open Source Backend Platform;</li>
                        <li>Back4app - Parse Hosting Platform;
                        </li>
                        <li>Kinvey - Mobile Backend as a Service (mBaaS) for the Enterprise;
                        </li>
                        <li>Deployd - Simple core library, with a modular API for your application;</li>

                    </ol>
                </div>
            </div>
            <div>
                <h1 className='text-center my-5 fs-2 fw-bold'>Q3: What other services does firebase provide other than authentication?</h1>

                <ol className='fs-5 fw-bold'>
                    <li>Parse - Open Source Backend Platform;</li>
                    <li>Back4app - Parse Hosting Platform;
                    </li>
                    <li>Kinvey - Mobile Backend as a Service (mBaaS) for the Enterprise;
                    </li>
                    <li>Deployd - Simple core library, with a modular API for your application;</li>

                </ol>
            </div>
        </div>
    );
};

export default Blogs;