const express = require('express');

const app = express();

app.get("/", (req, res) => {
    res.send("Hola Mundo");
});

const port = 3025;

app.listen(port, () => {
    console.log(`Server: http://localhost:${port}`);
})