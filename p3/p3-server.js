const fs = require("fs");
const fastify = require("fastify")();
const { coinCount } = require("./p3-module");

fastify.get("/", (request, reply) => {
    const filePath = `${__dirname}/index.html`;
    fs.readFile(filePath, "utf8", (err, data) => {
    if (err) {
      // If an error occurs, return a 500 status code
      reply
        .code(500)
        .header("Content-Type", "text/plain; charset=utf-8")
        .send("Error reading file");
    } else {
      // If no error occurs, return the file content with a 200 status code
      reply
        .code(200)
        .header("Content-Type", "text/html; charset=utf-8")
        .send(data);
    }
  });
});  

fastify.get("/coin", (request, reply) => {
    const { denom = '0', count = '0' } = request.query;
    const denomInt = parseInt(denom, 10);
    const countInt = parseInt(count, 10);
    const coinValue = coinCount({ denom: denomInt, count: countInt });
    reply
      .code(200)
      .header("Content-Type", "text/html; charset=utf-8")
      .send(`<h2>Value of ${count} of ${denom} is ${coinValue}</h2><br /><a href="/">Home</a>`);
}); 

fastify.get("/coins", (request, reply) => {
    const { option } = request.query;
  
    let coinValue;
    switch (option) {
      case "1":
        coinValue = coinCount({ denom: 5, count: 3 }, { denom: 10, count: 2 });
        break;
      case "2":
        const coins = [
          { denom: 25, count: 2 },
          { denom: 1, count: 7 }
        ];
        coinValue = coinCount(...coins);
        break;
      case "3":
        coinValue = coinCount([
          { denom: 25, count: 2 },
          { denom: 1, count: 7 }
        ]);
        break;
      default:
        coinValue = 0;
    }

    reply
    .code(200)
    .header("Content-Type", "text/html; charset=utf-8")
    .send(
      `<h2>Option ${option} value is ${coinValue}</h2><br /><a href="/">Home</a>`
    );
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
