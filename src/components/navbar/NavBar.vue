<template>
  <div class="nav-positioning sp-card" style="width:200px;">
    <h4 class="light">Spotlight Services</h4>
    <hr style="margin-bottom: 3px;" />
    <router-link v-for="button in buttons" class="nav-button" tag="button" :to="button.to">
     {{ button.name }}
    </router-link>
    <hr style="margin-top: 3px;"/>
  </div>
</template>

<script>
export default {
  data:() => ({
    buttons: [
      {
        name: "sample-svc",
        to: "/docs/api/spotlight/sample",
        value: "sample",
      },
      {
        name: "sample-svc2",
        to: "/docs/api/spotlight/sample2",
        value: "sample2",
      },
      {
        name: "sample-svc3",
        to: "/docs/api/spotlight/sample3",
        value: "sample3",
      },
    ],

  }),
  created() {

  },
  methods:{

  },
}
</script>

<style>
.nav-positioning {
  position:fixed;
  height:100%;
  width:200px;
  top:0;
  left:0;
  padding: 50px 8px;
}
.nav-button {
  height: 45px;
  width: 100%;
  background: rgba(0,0,0,0.0);
  box-sizing: border-box;
  padding: 5px;
  border-radius: 5px;
  outline: none;
  transition: 0.4s;
  text-align: left;
}
.nav-button:hover {
  background: rgba(0,0,0,0.1);
}
.nav-button:active {
  background: rgba(0,0,0,0.25);
}
</style>