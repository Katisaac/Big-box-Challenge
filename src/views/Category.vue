<template>
  <div>
    <ring-loader :loading="isLoading" :color="'red'" :size="200"/>

    <div v-if="!isLoading">
      <px-header />
      
      <div class="search">
        <input 
          type="text" 
          class="form-control" 
          placeholder="Search by title" 
          v-model="filter"
          />
      </div>

      <div class="content">
        <h2>{{ category.list_name }}</h2>
        <ul>
            <li v-for="book in filteredBooks" :key="book.rank"> 
              <img :src="book.book_image" alt=""> 
              {{ book.title }} <br>
              {{ book.description }} <br>
              {{ book.author }}
              </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script> 
import api from "@/api.js"
import PxHeader from "@/components/PxHeader.vue";


export default {
  name: "Category",
  
  components: {
    PxHeader,
  },

  data() {
      return {
          filter: '',
          isLoading: false, 
          category: []
      }
  },

  created(){
    this.getCategory()
  },

  computed: {
    filteredBooks(){
      if (!this.filter) {
        return this.category.books
      }

      return this.category.books.filter ( b => 
        b.title.toLowerCase().includes(this.filter.toLowerCase()))
    }
  },

  methods: {
    getCategory(){
      const id_category = this.$route.params.id_category
      this.isLoading = true,

      api.getBooks(id_category)
        .then(category => this.category = category)
        .finally(() => this.isLoading = false)
    }
  }
};


</script>

<style scoped lang="scss">
.search {
  margin-bottom: 2.4rem;
  .form-control {
    background-color: transparent;
    border: none;
    border-bottom: 0.1rem solid #ced4da;
    border-radius: 0;
    outline: 0;
    box-shadow: none;
    padding: 0.6rem 0;
    width: 100%;
  }
}

</style>