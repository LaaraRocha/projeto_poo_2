Despesa:

<template>
  <div>
    <div>
      <p>Cadastro de Despesa</p>
      <input name="Código do Motorista" placeholder="Id do motorista" v-model="despesa.ID_motorista"/>
      <br>
      <input type="integer" name="Código do Veículo" placeholder="Id do veículo" v-model="despesa.ID_veiculo">
      <br>
      <input type="integer" name="Código da Rota" placeholder="Id da rota" v-model="despesa.ID_rota">
      <br>
      <input type="text" name="Descrição da Despesa" placeholder="Descrição da despesa" v-model="despesa.descricao">
      <br>
      <input type="decimal" name="valor da despesa" placeholder="Valor da despesa" v-model="despesa.valor">
      <br><br>
      <input type="submit" name="enviar" value="Enviar" @click="cadastrar">
    </div>
  </div>
</template>

<script>
import axios from "axios";

const urlBackend = 'http://localhost:8081';
const tipo = '?tipo=despesa';

export default {
  name: "tela-despesas",
  data() {
    return {
      despesa: {ID_motorista: '', ID_veiculo: '', ID_rota: '', descricao: '', valor: ''}
    }
  },
  methods: {
    cadastrar() {
      console.log(this.despesa)
      axios.post(urlBackend + '/incluir' + tipo, this.despesa).then((response) => {
        console.log(response.status)
      })
    },
  }
}
</script>

<style scoped>

.table{
  margin-left: auto;
  margin-right: auto;
  border: solid;
  background: white;
}
tr:hover {background-color: #f5f5f5}
div {
  background-color: lightblue;
  margin-left: auto;
  margin-right: auto;
}
button {
  background-color: lightskyblue;
}

</style>
