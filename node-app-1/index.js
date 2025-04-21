const express = require('express');
const client = require('prom-client');

const app = express();
const port = 3000;

// Habilita las métricas estándar del proceso Node.js
client.collectDefaultMetrics();

// Crear una métrica personalizada: contador de visitas
const visitCounter = new client.Counter({
  name: 'app_visits_total',
  help: 'Número total de visitas a la página principal',
});

// Ruta principal
app.get('/', (req, res) => {
  visitCounter.inc(); // Incrementar el contador
  res.send('Hello, Prometheus! from Node-app-1');
});

// Endpoint para exponer métricas
app.get('/metrics', async (req, res) => {
  res.set('Content-Type', client.register.contentType);
  res.end(await client.register.metrics());
});

app.listen(port, () => {
  console.log(`App corriendo en http://localhost:${port}`);
});
