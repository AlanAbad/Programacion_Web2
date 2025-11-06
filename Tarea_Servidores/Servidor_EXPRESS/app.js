const express = require('express');
const app = express();

const port = 3308;

app.get('/', (req, res) => {
  res.send('Este es el servidor haciendo uso de express');
});

app.listen(port, () => {
  console.log(`Server: http://localhost:${port}`);
})