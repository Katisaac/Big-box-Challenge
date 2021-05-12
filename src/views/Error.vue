<template>
    <div className='not_found-container'>
        <div className='not_found-image-container'>
            <img src="" alt="404"/>
        </div>
        <h2>Sorry... Page Not Found</h2>
        <div className="not__found_button">
            <router-link
              to="/"
            >Volver a la página de Inicio</router-link>
        </div>
    </div>
</template>

<style>
  @import "./style/NotFound.css";

</style>
