<template>
  <SideMenu class="side-menu"></SideMenu>

  <router-view></router-view>
</template>

<script>
import SideMenu from "@/components/SideMenu";

export default {
  name: "main-page",
  components: {
    SideMenu
  }
}
</script>

<style scoped>
  .side-menu {
    float: left;
  }


</style>