'use strict';

// Dependencies
const express = require('express');
const cors = require('cors');
const cors = require('cors');
// Initialize the App
const express = require('express');
const app = express();

// Global Variables
const PORT = process.env.PORT || 3000;

// Route Definitions
app.get('/todo', handleToDo());

// Route Handlers
function handleToDo(request, response) {

  let thingsToDo = [
    { task: 'watch tv' },
    { task: 'walk rosie' },
    { task: 'practice for lecture' },
    { task: 'cooking' },
    { task: 'eat cookies' },
    { task: 'take a nap' },
  ];

  response.status(200).json(thingsToDo);
}


// Start server
client.connect()
  .then( () => {
    app.listen(PORT, () => {
      console.log(`Server is up on port ${PORT}.`);
    });
  })
  .catch(err => {
    throw `PG startup error: ${err.message}`;
  })


  function notFoundHandler(request, response) {
    response.status(404).send('nope?');
}

function errorHandler(error, request, response) {
    response.status(500).send(error);
}
 