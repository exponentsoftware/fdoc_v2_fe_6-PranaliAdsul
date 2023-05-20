import React from 'react';
import { Link } from 'react-router-dom';
import { Card, Button } from 'react-bootstrap';

const EventList = ({ events }) => {
  return (
    <div>
      <h2>Event List</h2>
      {events.map(event => (
        <Card key={event.id} className="mb-3">
          <Card.Body>
            <Card.Title>{event.title}</Card.Title>
            <Card.Text>Date: {event.date}</Card.Text>
            <Link to={`/events/${event.id}`}>
              <Button variant="primary">Details</Button>
            </Link>
          </Card.Body>
        </Card>
      ))}
    </div>
  );
};

export default EventList;
