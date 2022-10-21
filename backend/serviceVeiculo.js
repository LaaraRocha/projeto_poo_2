const mysql = require('mysql');
const util = require('util');

const con = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : 'root',
    database : 'projeto-oop'
});

con.query = util.promisify(con.query).bind(con);

module.exports = {
    async salvarNovoVeiculo(veiculo) {
        const params = [veiculo.descricao]
        await con.query('INSERT INTO veiculo(descricao) VALUES (?);', params)
            .catch(err => {
                console.log(err);
                return false;
            });
        return true;
    },

    async editarVeiculo(veiculo) {
        const params = [veiculo.descricao, veiculo.id];
        await con.query('UPDATE veiculo SET descricao = ? WHERE id = ?;', params)
            .catch(err => {
                console.log(err);
                return false;
            });
        return true;
    },

    async obterListaVeiculo() {
        return await con.query('SELECT * FROM veiculo ORDER BY id ASC')
            .catch(err => console.log(err));
    },

    async excluirVeiculo(veiculo) {
        await con.query('DELETE FROM veiculo WHERE veiculo.id = ? ;', [veiculo.id])
            .catch(err => {
                console.log(err);
                return false;
            });
        return true;
    },

    async obterVeiculoPorId(idVeiculo) {
        let result = await con.query('SELECT * FROM veiculo WHERE id = ?;', [idVeiculo])
            .catch(err => {
                console.log(err);
            });
        if (result.length > 0) {
            let veiculo = JSON.stringify(result[0]);
            return JSON.parse(veiculo);
        } else {
            return 0;
        }
    }

}