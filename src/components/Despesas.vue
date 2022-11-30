Despesa:

<template>
  <div>
    <form action="backend/controller.js">
      <p>Cadastro de Despesa</p>
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
export default {
  name: "tela-despesas"
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
