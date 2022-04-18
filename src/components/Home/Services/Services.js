import React, { useEffect, useState } from 'react';
import Service from '../../Service/Service';

const Services = () => {
    const [services, setServices] = useState({});

    useEffect(() => {
        fetch('data.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <div>
            <h1>{services.length}</h1>
            <div className="container">
                <div className="row g-5">
                    {/* {
                        services.map(service => <Service
                            key={service.id} service={service}
                        ></Service>)
                    } */}
                </div>
            </div>
        </div>
    );
};

export default Services;