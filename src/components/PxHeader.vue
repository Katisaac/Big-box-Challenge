<template>
    <header>
        <router-link 
        class="header"
        :to="{name: 'home'}" >  
        <div class="header__img-container">
          <img class="header__img" src='@/assets/nytimes-icon.png' alt="">
        </div>
        <h4 class="header__title">NYTimes Books</h4>
      </router-link>
    </header>
</template>

<script>

export default {
    name:"PxHeader",
}
</script>


<style scoped>
.header{
    display: flex;
    text-decoration: none;
    align-items: center;
    margin-bottom: 1.2rem;
}
.header__title {
    font-size: 2.5rem;
    font-weight: 1000;
    color: black;
}
.header__img-container{
    width: 5rem;
    height: 5rem;
}
.header__img{
    width: 100%;
    height: 100%;
}
</style>