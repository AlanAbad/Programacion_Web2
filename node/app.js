const express = require('express');
const app = express();
const port = 5896;

const path = require('path');

const pageRoutes = require('./rutas/pages');
app.use('/', pageRoutes);

app.get('/', (req, res) => {
    res.redirect('/pag1');
});

app.listen(port, () => {
    console.log(`Servidor: https://127.0.0.1:${port}`);
});