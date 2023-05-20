import { createServer, Model } from 'miragejs';

export function makeServer({ environment = 'development' } = {}) {
  let server = createServer({
    environment,

    models: {
      event: Model,
    },

    seeds(server) {
      server.create('event', {
        id: 1,
        title: 'Event 1',
        date: '2023-05-21',
        time: '10:00 AM',
        location: 'Location 1',
        description: 'Description 1',
      });
      server.create('event', {
        id: 2,
        title: 'Event 2',
        date: '2023-05-22',
        time: '2:00 PM',
        location: 'Location 2',
        description: 'Description 2',
      });
    },

    routes() {
      this.namespace = 'api';

      this.get('/events', schema => {
        return schema.events.all();
      });

      this.post('/events', (schema, request) => {
        let attrs = JSON.parse(request.requestBody);
        return schema.events.create(attrs);
      });

      this.delete('/events/:id', (schema, request) => {
        let id = request.params.id;
        return schema.events.find(id).destroy();
      });
    },
  });

  return server;
}
