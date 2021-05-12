<template>
  <main id="app">
    <div class="navbar">
      <div class="container">
        <div  iv class="card">
          <router-view />
        </div>
      </div>
    </div>
  </main>
</template>

<script>

export default {
  name: "app",
  
};
</script>

<style lang="scss">
@import "./styles/main.scss";

.navbar {
  background-color:  #ff9000;
  width: 100%;
  height: 9.6rem;
  position: absolute;
  z-index: 0;
}
.container {
  z-index: 1;
  margin: 4rem auto;
  max-width: 82.6rem;
  background-color: white;
}

.card {
  border: 0.1rem solid #dc5c05;
  box-shadow: 0 0.2rem 0.3rem rgba(151, 139, 125, 0.1), 0 0 0 1px rgba(151, 139, 125, 0.1);
  padding: 2.4rem;
}
</style>
