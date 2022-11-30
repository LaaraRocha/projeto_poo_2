<template>
  <div>
    <p >Listar Motorista</p>
    <table class="table">
      <tr v-for="motorista in listaMotoristas" :key="motorista.ID_motorista">
        <td headers="id">{{motorista.ID_motorista}}</td>
        <td headers="nome">{{motorista.nome}}</td>
        <td headers="editar">
          <button @click="carregarEdicao(motorista)">Editar</button>
        </td>
        <td headers="excluir">
          <button @click="excluir(motorista)">Excluir</button>
        </td>
      </tr>
    </table>

    <div>
      <p>Cadastrar Motorista</p>
      <input type="text" name="Nome do Motorista" placeholder="Digite o nome do Motorista" v-model="motorista.nome">
      <br><br>
      <input type="submit" name="Incluir" value="Incluir" @click="cadastrar()">
    </div>

    <div>
      <p>Alterar Motorista</p>
      <input v-if="edicaoMotorista.ID_motorista" type="text" :value="`motorista a ser atualizado: ${edicaoMotorista.ID_motorista}`" readonly> <br> <br>
      <input type="text" name="Nome do Motorista" placeholder="Digite o nome do Motorista" v-model="edicaoMotorista.nome">
      <br><br>
      <input type="submit" name="Alterar" value="Alterar" @click="editar()">
    </div>
  </div>
</template>

<script>
import axios from "axios";
const urlBackend = 'http://localhost:8081';
const tipo = '?tipo=motorista';

export default {
  name: "tela-motoristas",
  data() {
    return {
      listaMotoristas: '',
      motorista: {ID_MOTORISTA: 0, nome: ''},
      edicaoMotorista: {ID_motorista: 0, nome: ''}
    }
  },
  mounted() {
    this.atualizarListas();

  },
  methods: {
    cadastrar() {
      console.log(this.motorista);
      axios.post(urlBackend + '/incluir' + tipo, this.motorista).then((response) => {
        console.log(response.status)
      })
    },
    carregarEdicao(motorista) {
      this.edicaoMotorista = motorista;
    },
    editar() {
      axios.post(urlBackend + '/editar' + tipo, this.edicaoMotorista).then((response) => {
        console.log(response.status)
        this.atualizarListas();
      })
    },
    excluir(motorista) {
      axios.post(urlBackend + '/excluir' + tipo, motorista).then((response) => {
        console.log(response.status);
        this.atualizarListas();
      })
    },
    atualizarListas() {
      axios.get(urlBackend + '/obter-lista' + tipo).then((response) => {
        this.listaMotoristas = response.data;
        console.log(this.listaMotoristas)
      });
    }
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