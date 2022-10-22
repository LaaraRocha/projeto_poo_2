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
    async salvarNovoRota(rota) {
        const params = [rota.descricao]
        await con.query('INSERT INTO rota(descricao) VALUES (?);', params)
            .catch(err => {
                console.log(err);
                return false;
            });
        return true;
    },

    async editarRota(rota) {
        const params = [rota.descricao, rota.id];
        await con.query('UPDATE rota SET descricao = ? WHERE id = ?;', params)
            .catch(err => {
                console.log(err);
                return false;
            });
        return true;
    },

    async obterListaRota() {
        return await con.query('SELECT * FROM rota ORDER BY id ASC')
            .catch(err => console.log(err));
    },

    async excluirRota(rota) {
        await con.query('DELETE FROM rota WHERE rota.id = ? ;', [rota.id])
            .catch(err => {
                console.log(err);
                return false;
            });
        return true;
    },

/*    async obterRotaPorId(idRota) {
        let result = await con.query('SELECT * FROM rota WHERE id = ?;', [idRota])
            .catch(err => {
                console.log(err);
            });
        if (result.length > 0) {
            let rota = JSON.stringify(result[0]);
            return JSON.parse(rota);
        } else {
            return 0;
        }
    }*/

}