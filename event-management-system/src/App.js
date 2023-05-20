import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Container } from 'react-bootstrap';
import EventList from './EventList';
import EventDetails from './EventDetails';
import EventForm from './EventForm';
import { makeServer } from './api/server';

if (process.env.NODE_ENV === 'development') {
  makeServer();
}

const App = () => {
  const [events, setEvents] = useState([]);

  const handleAddEvent = newEvent => {
    setEvents(prevEvents => [...prevEvents, newEvent]);
  };

  const handleDeleteEvent = eventId => {
    setEvents(prevEvents => prevEvents.filter(event => event.id !== eventId));
  };

  return (
    <Router>
      <Container className="my-4">
        <Switch>
          <Route exact path="/">
            <EventList events={events} />
            <EventForm onAdd={handleAddEvent} />
          </Route>
          <Route
            path="/events/:id"
            render={props => {
              const eventId = parseInt(props.match.params.id);
              const event = events.find(event => event.id === eventId);
              return (
                <EventDetails
                  event={event}
                  onDelete={() => handleDeleteEvent(eventId)}
                />
              );
            }}
          />
        </Switch>
      </Container>
    </Router>
  );
};

export default App;
