<template>
  <div>
      <ring-loader :loading="isLoading" :color="'red'" :size="200"/>
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