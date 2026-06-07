// #1 TODO: Declare fastify object from fastify, and execute
const fastify = require("fastify")();

// #2 TODO: Declare fetch object from node-fetch
const fetch = require("node-fetch");

fastify.get("/photos", (request, reply) => {
    // Fetch photos from JSONPlaceholder
    fetch('https://jsonplaceholder.typicode.com/photos')
      .then(response => {
        // Check if response is OK (status in the range 200-299)
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        // Parse the response body as JSON
        return response.json();
      })
      .then(photos => {
        // Send the photos in the response
        reply
          .code(200)
          .header("Content-Type", "application/json; charset=utf-8")
          .send({ error: "", statusCode: 200, photos });
      })
      .catch(error => {
        // Handle errors and send a 404 response
        reply
          .code(404)
          .header("Content-Type", "application/json; charset=utf-8")
          .send({ error: error.message, statusCode: 404, photos: [] });
      });
  });
  
  fastify.get("/photos/:id", (request, reply) => {
    const { id } = request.params;
  
    // Fetch the single photo by ID from JSONPlaceholder
    fetch(`https://jsonplaceholder.typicode.com/photos/${id}`)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        // Parse the response body as JSON
        return response.json();
      })
      .then(photo => {
        // Check if the response is an empty object
        if (Object.keys(photo).length === 0) {
          throw new Error("Invalid ID");
        }
        // Send the photo in the response
        reply
          .code(200)
          .header("Content-Type", "application/json; charset=utf-8")
          .send({ error: "", statusCode: 200, photo });
      })
      .catch(error => {
        // Handle errors and send a 404 response
        reply
          .code(404)
          .header("Content-Type", "application/json; charset=utf-8")
          .send({ error: error.message, statusCode: 404, photo: {} });
      });
  });
  
  // Start server and listen to requests using Fastify
  const listenIP = "localhost";
  const listenPort = 8080;
  fastify.listen(listenPort, listenIP, (err, address) => {
    if (err) {
      console.log(err);
      process.exit(1);
    }
    console.log(`Server listening on ${address}`);
  });