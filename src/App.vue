<template>
  <v-app>
    <div class="background" />
    <v-content>
      <div class="app-layout">
        <div />
        <router-view/>
      </div>
      <NavBar />
    </v-content>
  </v-app>
</template>

<script>
import NavBar from '@/components/navbar/NavBar'
export default {
  name: 'App',

  components: {
    NavBar
  },

  data: () => ({
  }),
};
</script>

<style>
.app-layout {
  height: 100%;
  width: 100%;
  display: grid;
  grid-template-columns: 200px auto;
  grid-template-rows: auto;
}
</style>
