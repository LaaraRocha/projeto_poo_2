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
    async incluirMotorista(motorista) {
        console.log(motorista)
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
        console.log(params)
        await con.query('UPDATE motorista SET nome = ? WHERE ID_motorista = ?;', params)
            .catch(err => {
                console.log(err);
                return false;
            });
        return true;
    },

    async obterListaMotorista() {
        return await con.query('SELECT * FROM motorista ORDER BY ID_motorista ASC')
            .catch(err => console.log(err));
    },

    async excluirMotorista(motorista) {
        console.log(motorista)
        await con.query('DELETE FROM motorista WHERE ID_motorista = ? ;', [motorista.ID_motorista])
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