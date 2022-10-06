const express = require('express');
const app = express(), bodyParser = require("body-parser");
const port = 8081;

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.json());

app.get('/obter-lista', async (req, res) => {
console.log(req,res);
});


app.listen(port, () => {
    console.log(`Server on na porta:${port}`);
});