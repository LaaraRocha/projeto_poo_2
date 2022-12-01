<template>
  <div>
    MENU INICIAL
    <form action="http://localhost:8081/backend/controller.js"></form>
  </div>
  <div>
    <table>
      <tr><img src="https://th.bing.com/th/id/OIP.L7ejXaQ6mAR4kUk4eN8EEAHaFi?pid=ImgDet&rs=1"></tr>
      <tr><img src="https://th.bing.com/th/id/R.3d1a237b88fa5f5dd7edf5c39639b5ba?rik=yQSXcMBF3yip7A&riu=http%3a%2f%2f1.bp.blogspot.com%2f-dAEZFlNg_qk%2fUYVtTEFk9BI%2fAAAAAAACTzk%2fm7Rtgng3of0%2fs1600%2fcarros-imagens%2b(7).jpg&ehk=%2bAaOvO1GgfuJeBhbBDfW5SghTWSulZJT%2f4BaPboPY8c%3d&risl=&pid=ImgRaw&r=0"></tr>
      <tr><img src="https://quatrorodas.abril.com.br/wp-content/uploads/2020/09/chevrolet_onix_364.jpeg?quality=70&strip=info"></tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "MainMenu"
}
</script>

<style scoped>

*{
  background-color: lightblue;
}

div {
  padding: 5px;
}

img {
  width:400px;
  height: 300px;
}

img:hover {

}

tr {
  display: inline;
  padding: 5px;
  margin-left: 2px;
}
</style>