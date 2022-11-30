Despesa:

<template>
  <div>
    <form action="backend/controller.js">
      <p>Cadastro de Despesa</p>
      <Drop-down v-model="motoristaSelecionado" :options="listaMotorista" optionLabel="name" placeholder="Select a City" />
      <input type="integer" name="Código do Motorista" placeholder="Id do motorista">
      <br>
      <input type="integer" name="Código do Veículo" placeholder="Id do veículo">
      <br>
      <input type="integer" name="Código da Rota" placeholder="Id da rota">
      <br>
      <input type="text" name="Descrição da Despesa" placeholder="Descrição da despesa">
      <br>
      <input type="decimal" name="valor da despesa" placeholder="Valor da despesa">
      <br><br>
      <input type="submit" name="enviar" value="Enviar">
    </form>
  </div>
</template>

<script>
import axios from "axios";

const urlBackend = 'http://localhost:8081';
const tipoMotorista = '?tipo=motorista';
const tipoVeiculo = '?tipo=veiculo';
const tipoRota = '?tipo=rota';

export default {
  name: "tela-despesas",
  data() {
    return {
      listaMotorista: [],
      motoristaSelecionado: '',
      listaVeiculos: [],
      veiculoSelecionado: '',
      listaRota: [],
      rotaSelecionada: ''
    }
  },
  mounted() {
    this.atualizarListaMotorista();
    this.atualizarListaVeiculo();
    this.atualizarListaRota();

  },
  methods: {
    atualizarListaMotorista() {
      axios.get(urlBackend + '/obter-lista' + tipoMotorista).then((response) => {
        this.listaMotoristas = response.data;
        console.log(this.listaMotoristas)
      });
    },
    atualizarListaVeiculo() {
      axios.get(urlBackend + '/obter-lista' + tipoVeiculo).then((response) => {
        this.listaVeiculos = response.data;
        console.log(this.listaMotoristas)
      });
    },
    atualizarListaRota() {
      axios.get(urlBackend + '/obter-lista' + tipoRota).then((response) => {
        this.listaRota = response.data;
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
