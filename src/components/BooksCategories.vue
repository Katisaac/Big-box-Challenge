<template>
  <div>
    <px-header />

    <div class="content">
      <h2 class="content__title">Categories</h2>
      <ul class="content__list" >
          <li v-for="book in booksCategories" :key="book.list_name_encoded"> 
            <router-link 
              :to="{name: 'category', 
              params: { id_category: book.list_name_encoded} }"
              class="content__list-item"
              >
              {{ book.display_name }} 
            </router-link>
          </li>
      </ul>
    </div>
  </div>
</template>

<script> 
import PxHeader from "@/components/PxHeader.vue";

export default {
  name: "BooksCategories",
  
  components: {
    PxHeader,
  },

  props: {
    booksCategories: {
      type: Array,
      default: () => []
    }
  }
};


</script>

<style scoped lang="scss">
.content__title{
  margin: 1.5rem auto;
  text-align: center;
  font-size: 2rem;
  font-weight: 800;
}
.content__list{
  background-color: #ff9000;
  // faab31 amarillo hover
  padding: 1.5rem;
  border-radius: 1rem;
  display: flex;
  flex-wrap: wrap;
}
.content__list-item{
  font-weight: 500;
  text-decoration: none;
  font-size: 1.8rem;
  line-height: 2;
  color: black;
  padding: 0.5rem;
  border-radius: 0.5rem;
}
li{
  flex-grow: 2;
  background-color: #dc5c05;
  border-radius: 0.5rem;
  text-align: center;
  margin: 0.2rem;
  border: 0.2rem solid black;
}
li:nth-child(odd){
  background-color: white;
  border-radius: 0.5rem;
}
// li:nth-child(3n){
//   background-color: #6ec5b8;
//   border-radius: 5px;

// }

</style>
