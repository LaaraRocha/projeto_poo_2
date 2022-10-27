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
    async incluirVeiculo(veiculo) {
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
        await con.query('UPDATE veiculo SET descricao = ? WHERE ID_veiculo = ?;', params)
            .catch(err => {
                console.log(err);
                return false;
            });
        return true;
    },

    async obterListaVeiculo() {
        return await con.query('SELECT * FROM veiculo ORDER BY ID_veiculo ASC')
            .catch(err => console.log(err));
    },

    async excluirVeiculo(veiculo) {
        await con.query('DELETE FROM veiculo WHERE ID_veiculo = ? ;', [veiculo.id])
            .catch(err => {
                console.log(err);
                return false;
            });
        return true;
    },

/*    async obterVeiculoPorId(idVeiculo) {
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
    }*/

}