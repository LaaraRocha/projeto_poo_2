<template>
  <div>
    <table>
      <tr>
        <td>
          <router-link to="/">Pagina Inicial</router-link>
        </td>
      </tr>
      <tr>
        <td>
          <router-link to="/motoristas">Motoristas</router-link>
        </td>
      </tr>
      <tr>
        <td>
          <router-link to="/servicos">Veiculos</router-link>
        </td>
      </tr>
      <tr>
        <td>
          <router-link to="/rotas">Rotas</router-link>
        </td>
      </tr>
      <tr>
        <td>
          <router-link to="/despesas">Despesas</router-link>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "side-menu"
}
</script>

<style scoped>
td {
  text-align: left;
  border: 1px solid black;
}

div{
  background-color: white;
  border: solid;
  text-decoration: none;
  font-weight: bold;
}
td:hover {
  background-color: lightskyblue;
  text-decoration: white;
}
</style>