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
    async salvarNovoMotorista(motorista) {
        const params = [motorista.nome]
        await con.query('INSERT INTO motorista(nome) VALUES (?);', params)
            .catch(err => {
                console.log(err);
                return false;
            });
        return true;
    },

    async editarMotorista(motorista) {
        const params = [motorista.nome, motorista.id];
        await con.query('UPDATE motorista SET nome = ? WHERE id = ?;', params)
            .catch(err => {
                console.log(err);
                return false;
            });
        return true;
    },

    async obterListaMotorista() {
        return await con.query('SELECT * FROM motorista ORDER BY id ASC')
            .catch(err => console.log(err));
    },

    async excluirMotorista(motorista) {
        await con.query('DELETE FROM motorista WHERE motorista.id = ? ;', [motorista.id])
            .catch(err => {
                console.log(err);
                return false;
            });
        return true;
    },

/*    async obterMotoristaPorId(idMotorista) {
        let result = await con.query('SELECT * FROM motorista WHERE id = ?;', [idMotorista])
            .catch(err => {
                console.log(err);
            });
        if (result.length > 0) {
            let motorista = JSON.stringify(result[0]);
            return JSON.parse(motorista);
        } else {
            return 0;
        }
    }*/

}