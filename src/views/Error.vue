<template>
    <div class='not_found-container'>
        <div class='not_found--image--container'>
            <img src="../assets/error.png" alt="404"/>
        <div>
          <h2>Sorry... Page Not Found</h2>
              <router-link
                to="/"
                class="not__found_button"
              >Go Home</router-link>
        </div>
        </div>
    </div>
</template>

<style>
.not_found-container {
  text-align: center;
}

.not_found--image--container {
    max-width: 450px;
    margin: 0 auto;
}

.not_found--image--container img{
    width: 100%;
}

.not_found-container h2{
    color: #ff9000;
    font-weight: bold;
    font-size: 3rem;
    margin-bottom: 3rem;
}
.not__found_button{
  text-decoration: none;
  background-color: #faab31;
  padding: 1rem;
  border-radius: 2rem;
  color: black;
  font-size: 1.8rem;
}
.not__found_button:hover{
  background-color: #ff9000;
}

</style>
