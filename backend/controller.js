const express = require('express');
const app = express(), bodyParser = require("body-parser");
const serviceMotorista = require("./serviceMotorista");
const serviceVeiculo = require("./serviceVeiculo");
const serviceRota = require("./serviceRota");
const serviceDespesa = require("./serviceDespesa");
const port = 8081;

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(bodyParser.json());

app.get('/obter-lista', async (req, res) => {
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
        return res.json(result)
    }
});


app.post('/incluir', async (req, res) => {
    console.log('teste inclusão');
    if (!(Object.is(req.query.tipo, null)) && !(Object.is(req.query.tipo, ''))) {
        if (!(Object.is(req.body, null)) && !(Object.is(req.body, ''))) {
            let result;
            switch (req.query.tipo) {
                case 'motorista' :
                    console.log(req.body)
                    result = await serviceMotorista.incluirMotorista(req.body);
                    break;
                case 'veiculo' :
                    result = await serviceVeiculo.incluirVeiculo(req.body);
                    break;
                case 'rota' :
                    result = await serviceRota.incluirRota(req.body);
                    break;
                case 'despesa' :
                    result = await serviceDespesa.incluirDespesa(req.body);
            }

            return res.json(result);
        }
    }

});

app.post('/editar', async (req, res) => {
    console.log('teste Editar');
    if (!(Object.is(req.query.tipo, null)) && !(Object.is(req.query.tipo, ''))) {
        if (!(Object.is(req.body, null)) && !(Object.is(req.body, ''))) {
            let result;
            switch (req.query.tipo) {
                case 'motorista' :
                    result = await serviceMotorista.editarMotorista(req.body);
                    break;
                case 'veiculo' :
                    result = await serviceVeiculo.editarVeiculo(req.body);
                    break;
                case 'rota' :
                    result = await serviceRota.editarRota(req.body);
                    break;
                case 'despesa' :
                    result = await serviceDespesa.editarDespesa(req.body);
            }

            return res.json(result);
        }
    }

});

app.post('/excluir', async (req, res) => {
    console.log('teste Excluir');
    if (!(Object.is(req.query.tipo, null)) && !(Object.is(req.query.tipo, ''))) {
        if (!(Object.is(req.body, null)) && !(Object.is(req.body, ''))) {
            let result;
            switch (req.query.tipo) {
                case 'motorista' :
                    result = await serviceMotorista.excluirMotorista(req.body);
                    break;
                case 'veiculo' :
                    result = await serviceVeiculo.excluirVeiculo(req.body);
                    break;
                case 'rota' :
                    result = await serviceRota.excluirRota(req.body);
                    break;
                case 'despesa' :
                    result = await serviceDespesa.excluirDespesa(req.body);
            }

            return res.json(result);
        }
    }

});

app.listen(port, () => {
    console.log(`Server on na porta:${port}`);
});