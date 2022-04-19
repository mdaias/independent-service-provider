import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { name, picture, description } = service;

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
                <div className="d-grid w-100 gap-2 col-6 mx-auto">
                    <Button as={Link} to='/checkout' className="btn fw-bold btn-primary" type="button">Hire me</Button>
                </div>
            </Card>
        </div>
    );
};

export default Service;