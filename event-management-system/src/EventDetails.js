import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

const EventDetails = ({ event, onDelete }) => {
  return (
    <div>
      <Card>
        <Card.Body>
          <Card.Title>{event.title}</Card.Title>
          <Card.Text>Date: {event.date}</Card.Text>
          <Card.Text>Time: {event.time}</Card.Text>
          <Card.Text>Location: {event.location}</Card.Text>
          <Card.Text>Description: {event.description}</Card.Text>
        </Card.Body>
      </Card>
      <Button variant="primary" className="mt-3" as={Link} to="/">
        Back
      </Button>
      <Button variant="danger" className="ml-3 mt-3" onClick={onDelete}>
        Delete
      </Button>
    </div>
  );
};

export default EventDetails;
