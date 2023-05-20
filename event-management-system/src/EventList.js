import React from 'react';
import { Link } from 'react-router-dom';

const EventList = ({ events }) => {
  return (
    <div className="container">
      <ul className="event-list">
        <h2> Events</h2>
        {events.map(event => (
          <li key={event.id}>
            <Link to={`/events/${event.id}`}>
              <div className="event-item">
                <h3>{event.title}</h3>
                <p>{event.date}</p>
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventList;
