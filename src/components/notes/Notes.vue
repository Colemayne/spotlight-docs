<template>
  <div class="note-container">
    <div class="note-side" />
    <h5 class="title">Note</h5>
    <pre v-for="note in notes" class="body-1">{{ note.content }}</pre>
  </div>
</template>

<script>
export default {
  props: {
    notes: Array,
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
.note-container {
  position: relative;
  color: rgb(25,25,25);
  background: rgba(93,235,245,0.2);
  min-height: 45px;
  width: 100%;
  box-sizing: border-box;
  padding: 5px 20px;
  margin-top: 8px;
  margin-bottom: 8px;
}
.note-side {
  position: absolute;
  height: 100%;
  width: 5px;
  background: #2a6469;
  top: 0;
  left: 0;
}
</style>