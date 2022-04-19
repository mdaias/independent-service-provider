import React from 'react';
import NotFoundPage from '../../NotFound.jpg';

const NotFound = () => {
    return (
        <div className='mx-auto'>
            <img className='w-100' src={NotFoundPage} alt="" />
        </div>
    );
};

export default NotFound;