import React from 'react';
import { Button, Card } from 'react-bootstrap';

const Service = ({ service }) => {
    const { name,picture,description } = service;
    return (
        <div className='col-md-4 col-sm-6 col-12'>
            <Card className='h-100'>
                <Card.Img variant="top" src={picture} />
                <Card.Body>
                    <Card.Title>{name}</Card.Title>
                    <Card.Text>
                        {description}
                    </Card.Text> 
                </Card.Body>
                <div className="card-footer">
                <Button className='w-100' variant="primary">Go somewhere</Button>
                </div>
            </Card>
        </div>
    );
};

export default Service;