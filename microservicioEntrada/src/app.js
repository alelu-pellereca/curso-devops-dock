const express = require('express');
const cors = require('cors')

const app = express();
app.use(express.json());
app.use(cors())

// Ruta básica
app.get('/microservicio_1', async (req, res) => {
    const response = await fetch('http://microservicio_1:3001')
    const responseAux = await response.json()
    res.status(200).json({ message: responseAux.message });
});
app.get('/microservicio_2', async (req, res) => {
    const response = await fetch('http://microservicio_2:3002')
    const responseAux = await response.json()
    res.status(200).json({ message: responseAux.message });
});
app.get('/microservicio_3', async (req, res) => {
    const response = await fetch('http://microservicio_3:3003')
    const responseAux = await response.json()
    res.status(200).json({ message: responseAux.message });
});
app.get('/', (req, res) => {
    res.status(200).json({ message: 'Hello World from microservicioEntrada 1!' });
});

// Ruta de ejemplo para pruebas
app.post('/echo', (req, res) => {
    const { body } = req;
    res.status(200).json(body);
});

module.exports = app;