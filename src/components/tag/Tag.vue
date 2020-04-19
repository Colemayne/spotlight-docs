<template>
  <div class="tag-container">
    <p class="caption" style="margin-bottom:0px;">{{ word }}</p>
  </div>
</template>

<script>
export default {
  props: {
    word: String,
  },
  data:() => ({

  }),
  created() {

  },
  methods:{

  },
}
</script>

<style>
.tag-container {
  position: relative;
  min-height: 10px;
  min-width: 40px;
  background: #242e42;
  box-sizing: border-box;
  padding: 5px 10px;
  border-radius: 5px;
  color: white;
  display: inline-block;
  margin-right: 5px;
  margin-bottom: 5px;
}
</style>