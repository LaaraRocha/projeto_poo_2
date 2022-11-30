<template>
  <div>

    <p>Listar Rota</p>
    <table class="table">
      <tr v-for="rota in listaRotas" :key="rota.ID_rota">
        <td headers="id">{{rota.ID_rota}}</td>
        <td headers="descricao">{{rota.descricao}}</td>
        <td headers="editar">
          <button @click="carregarEdicao(rota)">Editar</button>
        </td>
        <td headers="excluir">
          <button @click="excluir(rota)">Excluir</button>
        </td>
      </tr>
    </table>

    <div>
      <p>Cadastrar Rota</p>
      <input type="text" name="Descricao da Rota" placeholder="Digite a descrição da Rota" v-model="rota.descricao">
      <br><br>
      <input type="submit" name="Incluir" value="Incluir" @click="cadastrar()">
    </div>

    <div>
      <p>Alterar Rota</p>
      <input v-if="edicaoRota.ID_rota" type="text" :value="`rota a ser atualizada: ${edicaoRota.ID_rota}`" readonly> <br> <br>
      <input type="text" name="Descricao da Rota" placeholder="Digite a descrição da Rota" v-model="edicaoRota.descricao">
      <br><br>
      <input type="submit" name="Alterar" value="Alterar" @click="editar()">
    </div>

  </div>
</template>

<script>
import axios from "axios";
const urlBackend = 'http://localhost:8081';
const tipo = '?tipo=rota';

export default {
  name: "tela-rotas",
  data() {
    return {
      listaRotas: '',
      rota: {ID_ROTA: 0, descricao: ''},
      edicaoRota: {ID_rota: 0, descricao: ''}
    }
  },
  mounted() {
    this.atualizarListas();

  },
  methods: {
    cadastrar() {
      console.log(this.rota);
      axios.post(urlBackend + '/incluir' + tipo, this.rota).then((response) => {
        console.log(response.status)
      })
    },
    carregarEdicao(rota) {
      this.edicaoRota = rota;
    },
    editar() {
      axios.post(urlBackend + '/editar' + tipo, this.edicaoRota).then((response) => {
        console.log(response.status)
        this.atualizarListas();
      })
    },
    excluir(rota) {
      axios.post(urlBackend + '/excluir' + tipo, rota).then((response) => {
        console.log(response.status);
        this.atualizarListas();
      })
    },
    atualizarListas() {
      axios.get(urlBackend + '/obter-lista' + tipo).then((response) => {
        this.listaRotas = response.data;
        console.log(this.listaRotas)
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