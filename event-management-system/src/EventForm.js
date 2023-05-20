import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';

const EventForm = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [location, setLocation] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = e => {
    e.preventDefault();
    const newEvent = {
      title,
      date,
      time,
      location,
      description
    };
    onAdd(newEvent);
    setTitle('');
    setDate('');
    setTime('');
    setLocation('');
    setDescription('');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Group controlId="formTitle">
        <Form.Label>Title</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter title"
          value={title}
          onChange={e => setTitle(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="formDate">
        <Form.Label>Date</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter date"
          value={date}
          onChange={e => setDate(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="formTime">
        <Form.Label>Time</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter time"
          value={time}
          onChange={e => setTime(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="formLocation">
        <Form.Label>Location</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter location"
          value={location}
          onChange={e => setLocation(e.target.value)}
        />
      </Form.Group>
      <Form.Group controlId="formDescription">
        <Form.Label>Description</Form.Label>
        <Form.Control
          as="textarea"
          rows={3}
          placeholder="Enter description"
          value={description}
          onChange={e => setDescription(e.target.value)}
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Create Event
      </Button>
    </Form>
  );
};

export default EventForm;
