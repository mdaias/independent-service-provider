import React from 'react';
import myPic from '../../images/myPic.jpg'

const About = () => {
    return (
        <div className='container'>
            <div className="d-flex justify-content-center align-items-center">
                <div className='mx-5 mt-5'>
                    <img className='w-100' src={myPic} alt="" />
                </div>
                <div className='ms-5'>
                    <h1 className='fw-bold'>Hi, I'm Mohammad Aias</h1>
                    <h3 className='fw-bold'>Web Developer(Front-end)</h3>
                    <p>My goal is work in any fast growing local or large multinational organization with immense responsibility. So that, my situational and transformational leadership style, problem solving, communication, language, and volunteering skills can be utilize efficiently to bring a positive change in the organization. In the long run I want to become a full stack web developer.</p>
                </div>
            </div>
        </div>
    );
};

export default About;