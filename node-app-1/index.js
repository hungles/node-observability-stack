// Import required modules
const express = require('express');
const client = require('prom-client');

// Create an Express application
const app = express();
const port = 3000;

// Collect default metrics in second process
client.collectDefaultMetrics();

// Create a custom metric: visit counter
const visitCounter = new client.Counter({
  name: 'app_visits_total',
  help: 'Número total de visitas a la página principal',
});

// Root path
app.get('/', (req, res) => {
  visitCounter.inc(); // Incrementar el contador
  res.send('Hello, Prometheus! from Node-app-1');
});

// Endpoint to expose metrics
app.get('/metrics', async (req, res) => {
  res.set('Content-Type', client.register.contentType);
  res.end(await client.register.metrics());
});

// Start the server
app.listen(port, () => {
  console.log(`App running in http://localhost:${port}`);
});
