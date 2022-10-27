<template>
  <div>
    <form action="backend/controller.js">
      <p>Cadastro de Veículo</p>
      <input type="text" name="Nome do Veículo" placeholder="Digite o nome do Veículo">
      <br><br>
      <input type="submit" name="enviar" value="Enviar">
    </form>
  </div>
</template>

<script>
export default {
  name: "tela-servicos"
}
</script>

<style scoped>

</style>