import React from 'react';
import { useParams, Link } from 'react-router-dom';

const EventDetails = ({ events }) => {
  const { id } = useParams();
  const event = events.find(event => event.id === parseInt(id));

  return (
    <div className="container">
      <div className="event-details">
        {event ? (
          <>
            <h2>{event.title}</h2>
            <p>Date: {event.date}</p>
            <p>Time: {event.time}</p>
            <p>Location: {event.location}</p>
            <p>Description: {event.description}</p>
          </>
        ) : (
          <p>Event not found.</p>
        )}
        <Link to="/" className="back-link">
          Back
        </Link>
      </div>
    </div>
  );
};

export default EventDetails;
