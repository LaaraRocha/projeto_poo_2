<template>
  <div>
    <form action="backend/controller.js">
      <p>Cadastro de Rota</p>
      <input type="text" name="Nome da Rota" placeholder="Digite o nome da rota">
      <br><br>
      <input type="submit" name="enviar" value="Enviar">
    </form>
  </div>
</template>

<script>
export default {
  name: "tela-rotas"
}
</script>

<style scoped>

</style>