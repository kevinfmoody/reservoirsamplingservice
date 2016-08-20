const bodyParser = require('body-parser');
const express = require('express');
const reservoirApi = require('./reservoirapi');
const validators = require('./validators');

// Configure the application.
const service = express();
service.use(bodyParser.json());

// Attach reservoir service endpoints.
service.post('/reservoirs', reservoirApi.create);
service.get('/reservoirs/:id', reservoirApi.get);
service.patch('/reservoirs/:id', reservoirApi.update);
service.delete('/reservoirs/:id', reservoirApi.remove);

service.listen(process.env.PORT || 3000);