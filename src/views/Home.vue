<template>
  <div class="sp-container">
    <div class="sp-card default-padding">
      <div class="content-width">
        <h1 class="display-1">Welcome to <br /><span class="display-4">Spotlight Docs</span></h1>
        <h3 class="display-1" style="margin-top: 10px;margin-bottom:10px;">Please select a service from the navigation bar.</h3>
        <div class="home-content-container">
          <div class="home-content-column">
          </div>
          <div class="home-content-column">
          </div>
          <div class="home-content-column">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
</script>

<style>
.home-content-container {
  position: relative;
  min-height: 40px;
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, minmax(250px, 1fr) );
  grid-template-rows: auto;
  grid-gap: 5px;
}
.home-content-column {
  position: relative;
  box-sizing: border-box;
  padding: 5px;
  height: 100%;
  width: 100%;
  background: rgba(60,60,60,0.25);
}
</style>