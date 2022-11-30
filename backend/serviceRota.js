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
    async incluirRota(rota) {
        const params = [rota.descricao]
        await con.query('INSERT INTO rota(descricao) VALUES (?);', params)
            .catch(err => {
                console.log(err);
                return false;
            });
        return true;
    },

    async editarRota(rota) {
        const params = [rota.descricao, rota.ID_rota];
        await con.query('UPDATE rota SET descricao = ? WHERE ID_rota = ?;', params)
            .catch(err => {
                console.log(err);
                return false;
            });
        return true;
    },

    async obterListaRota() {
        return await con.query('SELECT * FROM rota ORDER BY ID_rota ASC')
            .catch(err => console.log(err));
    },

    async excluirRota(rota) {
        console.log(rota)
        await con.query('DELETE FROM rota WHERE ID_rota = ? ;', [rota.ID_rota])
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