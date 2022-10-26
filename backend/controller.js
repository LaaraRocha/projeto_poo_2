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
    console.log('testeeeeeeeeeeeeeee');
    if (!(Object.is(req.query.tipo, null))) {
        let result;
        switch (req.query.tipo) {
            case 'motorista' :
                result = await serviceMotorista.obterListaMotorista();
                break;
            case 'veiculo' :
                result = await serviceVeiculo.obterListaVeiculo();
                break;
            case 'rota' :
                result = await serviceRota.obterListaRota();
                break;
            case 'despesa' :
                result = await serviceDespesa.obterListaDespesa();
        }

        return res.json(result);
    }
});


app.post('/incluir-motorista', async (req, res) => {
    console.log('teste incluir motorista');
    if (!(Object.is(req.query.tipo, null)) && !(Object.is(req.query.tipo, ''))) {
        if (!(Object.is(req.body, null)) && !(Object.is(req.body, ''))) {
            let result;
            switch (req.query.tipo) {
                case 'motorista' :
                    result = await serviceMotorista.obterListaMotorista(req.body);
                    break;
                case 'veiculo' :
                    result = await serviceVeiculo.obterListaVeiculo(req.body);
                    break;
                case 'rota' :
                    result = await serviceRota.obterListaRota(req.body);
                    break;
                case 'despesa' :
                    result = await serviceDespesa.obterListaDespesa(req.body);
            }

            res.json(result);
        }
    }

});

app.listen(port, () => {
    console.log(`Server on na porta:${port}`);
});