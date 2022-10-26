const express = require('express');
const app = express(), bodyParser = require("body-parser");
const port = 8081;

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.json());

app.get('obterListaMotorista', async (req, res) => {
    if (!(Object.is(req.query.rota, null)) && !(Object.is(req.query.motorista, ''))) {
        let result;
        switch (req.query.motorista) {
            case 'motorista' :
                result = await serviceMotorista.obterListaMotorista();
                break;
            case 'veiculo' :
                result = await veiculoService.obterListaVeiculos();
                break;
            case 'pedido' :
                result = await pedidoService.obterListaPedidos();
        }

        res.json(result);
    }
});


app.listen(port, () => {
    console.log(`Server on na porta:${port}`);
});