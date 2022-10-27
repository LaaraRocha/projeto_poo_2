<template>
  <div>

    <form action = "http://localhost:8081/backend/controller.js" method="get">
      <p>Listar Motorista</p>
      <br>
      <input type="submit" name="Listar" value="Listar">
      <br><br>
    </form>

    <form action = "http://localhost:8081/backend/controller.js" method="post">
      <p>Cadastrar Motorista</p>
      <input type="text" name="Nome do Motorista" placeholder="Digite o nome do Motorista">
      <br><br>
      <input type="submit" name="Incluir" value="Incluir">
    </form>

    <form action = "http://localhost:8081/backend/controller.js" method="post">
      <p>Alterar Motorista</p>
      <input type="text" name="Nome do Motorista" placeholder="Digite o nome do Motorista">
      <br><br>
      <input type="submit" name="Alterar" value="Alterar">
    </form>

    <form action = "http://localhost:8081/backend/controller.js" method="post">
      <p>Excluir Motorista</p>
      <input type="text" name="ID" placeholder="Digite o ID Motorista">
      <br><br>
      <input type="submit" name="Excluir" value="Excluir">
    </form>

  </div>
</template>

<script>
export default {
  name: "tela-motoristas"
}
</script>

<style scoped>

</style>