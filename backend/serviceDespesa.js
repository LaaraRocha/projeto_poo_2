const mysql = require('mysql');
const util = require('util');

const con = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'projeto_poo_2'
});

con.query = util.promisify(con.query).bind(con);

module.exports = {
    async incluirDespesa(despesa) {
        console.log(despesa);
        const params = [despesa.ID_motorista, despesa.ID_veiculo, despesa.ID_rota, despesa.descricao, despesa.valor]
        console.log( params)
        await con.query('INSERT INTO despesa(ID_motorista, ID_veiculo, ID_rota, descricao, valor) VALUES (?, ?, ?, ?, ?);', params)
            .catch(err => {
                console.log(err);
                return false;
            });
        return true;
    },

    async editarDespesa(despesa) {
        const params = [despesa.descricao,despesa.valor, despesa.id];
        await con.query('UPDATE despesa SET descricao = ? AND valor = ? WHERE ID_despesa = ?;', params)
            .catch(err => {
                console.log(err);
                return false;
            });
        return true;
    },

    async obterListaDespesa() {
        return await con.query('SELECT * FROM despesa ORDER BY ID_despesa ASC')
            .catch(err => console.log(err));
    },

    async excluirDespesa(despesa) {
        await con.query('DELETE FROM despesa WHERE ID_despesa = ? ;', [despesa.id])
            .catch(err => {
                console.log(err);
                return false;
            });
        return true;
    },

/*    async obterDespesaPorId(idDespesa) {
        let result = await con.query('SELECT * FROM despesa WHERE id = ?;', [idDespesa])
            .catch(err => {
                console.log(err);
            });
        if (result.length > 0) {
            let despesa = JSON.stringify(result[0]);
            return JSON.parse(despesa);
        } else {
            return 0;
        }
    }*/

}