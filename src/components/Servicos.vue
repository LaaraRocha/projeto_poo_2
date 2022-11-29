<template>
  <div>
    <p>Listar Veiculo</p>
    <table>
      <tr v-for="veiculo in listaVeiculos" :key="veiculo.ID_veiculo">
        <td headers="id">{{veiculo.ID_veiculo}}</td>
        <td headers="descricaoe">{{veiculo.descricao}}</td>
        <td headers="editar">
          <button @click="carregarEdicao(veiculo)">Editar</button>
        </td>
        <td headers="excluir">
          <button @click="excluir(veiculo)">Excluir</button>
        </td>
      </tr>
    </table>

    <div>
      <p>Cadastrar Veiculo</p>
      <input type="text" name="Descricao do Veiculo" placeholder="Digite a descrição do veículo" v-model="veiculo.descricao">
      <br><br>
      <input type="submit" name="Incluir" value="Incluir" @click="cadastrar()">
    </div>

    <div>
      <p>Alterar Veiculo</p>
      <input v-if="edicaoVeiculo.ID_veiculo" type="text" :value="`veiculo a ser atualizado: ${edicaoVeiculo.ID_veiculo}`" readonly> <br> <br>
      <input type="text" name="Descricao do Veiculo" placeholder="Digite a descrição do veículo" v-model="edicaoVeiculo.descricao">
      <br><br>
      <input type="submit" name="Alterar" value="Alterar" @click="editar()">
    </div>
  </div>
</template>

<script>
import axios from "axios";
const urlBackend = 'http://localhost:8081';
const tipo = '?tipo=veiculo';

export default {
  name: "tela-veiculos",
  data() {
    return {
      listaVeiculos: '',
      veiculo: {ID_VEICULO: 0, descricao: ''},
      edicaoVeiculo: {ID_veiculo: 0, descricao: ''}
    }
  },
  mounted() {
    this.atualizarListas();

  },
  methods: {
    cadastrar() {
      console.log(this.veiculo);
      axios.post(urlBackend + '/incluir' + tipo, this.veiculo).then((response) => {
        console.log(response.status)
      })
    },
    carregarEdicao(veiculo) {
      this.edicaoVeiculo = veiculo;
    },
    editar() {
      axios.post(urlBackend + '/editar' + tipo, this.edicaoVeiculo).then((response) => {
        console.log(response.status)
        this.atualizarListas();
      })
    },
    excluir(veiculo) {
      axios.post(urlBackend + '/excluir' + tipo, veiculo).then((response) => {
        console.log(response.status);
        this.atualizarListas();
      })
    },
    atualizarListas() {
      axios.get(urlBackend + '/obter-lista' + tipo).then((response) => {
        this.listaVeiculos = response.data;
        console.log(this.listaVeiculos)
      });
    }
  }

}

</script>

<style scoped>

</style>