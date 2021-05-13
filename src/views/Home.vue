<template>
  <div>
      <ring-loader class="loader" :loading="isLoading" :color="'#ff9000'" :size="200"/>
      <books-categories v-if="!isLoading" :booksCategories="booksCategories" />
  </div>
</template>

<script>
import BooksCategories from "@/components/BooksCategories.vue";
import api from "@/api.js"

export default {


  name: "Home",
  components: {
    BooksCategories
   },

   data() {
    return {
        isLoading: false, 
        booksCategories: []
    }
  },

  created() {
    this.isLoading = true

    api.getBookCategories()
      .then( booksCategories => (this.booksCategories = booksCategories))
      .finally(() => this.isLoading = false)
  }
};
</script>

<style scoped>
.loader{
  margin: 7.5rem auto;
}
</style>