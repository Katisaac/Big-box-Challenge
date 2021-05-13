<template>
  <div>
    <ring-loader class="loader" :loading="isLoading" :color="'#ff9000'" :size="200"/>

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
        <h2 class="content__title">{{ category.list_name }}</h2>
        <section class="carousel">
          <ul class="carousel__container">
            <li 
              v-on:click="searchGoogle(book.title, book.author)"
              class="carousel-item" 
              v-for="book in filteredBooks" 
              :key="book.rank" 
              >
              <img 
                class="carousel-item__img" 
                :src="book.book_image" 
                alt=""> 
              <div class="carousel-item__details" >
                <img src="@/assets/plus-icon.png" alt="Plus"/>
                <h6 class="carousel-item__details--title">{{ book.title }}</h6>
                <span class="carousel-item__details--subtitle">{{ book.author }}</span>
                <p class="carousel-item__details--description">{{ book.description }}</p> 
              </div>
            </li>
          </ul>
        </section>
        
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
    },
    searchGoogle(book, author) {
      book = book.toLowerCase()
      author = author.toLowerCase()

      window.open(`https://www.google.com/search?q=${book}+${author}`)
    }
  }
    
};


</script>

<style scoped lang="scss">
.loader{
  margin: 7.5rem auto;
}

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
.content__title{
  margin: 1.5rem auto;
  text-align: center;
  font-size: 2rem;
  font-weight: 800;
}
.carousel{
  width: 100%;
  overflow-x: scroll;
  padding: 3rem;
  position: relative;
}
.carousel__container{
  white-space: nowrap;
  margin: 7rem 0;
  padding-bottom: 1rem;
}
.carousel__container:hover .carousel-item{
  opacity: 0.3;
}
.carousel__container:hover .carousel-item:hover {
  -webkit-transform: scale(1.5);
  transform: scale(1.5);
  opacity: 1;
}
.carousel-item{
  background-color: #ff9000;
  width: 20rem;
  height: 25rem;
  border-radius: 2rem;
  overflow: hidden;
  margin-right: 1rem;
  display: inline-block;
  cursor: pointer;
  transition: 450ms all;
  transform-origin: center left;
  -webkit-transform-origin: center left;
  position: relative;
  font-size: 2rem;
}
.carousel-item:hover ~ .carousel-item{
  -webkit-transform: translate3d(10rem, 0, 0);
  transform: translate3d(10rem, 0, 0);
}


.carousel-item__img{
  width: 100%;
  height: 100%;
  // object-fit: cover;
}

.carousel-item__details{
  align-items: flex-start;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  background: linear-gradient(to top, rgba(0, 0, 0, 0.9) 0%, rgba(0, 0, 0, 0) 100%);
  font-size: 1rem;
  opacity: 0;
  transition: 450ms opacity;
  padding: 1rem;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  color: white;
}
.carousel-item__details img {
  width: 4rem;
  height: 4rem;
}
.carousel-item__details--img {
  width: 2rem;
}
.carousel-item:hover .carousel-item__details {
  opacity: 1;
}
.carousel-item__details--title {
  font-weight: 800;
  color: white;
  white-space: normal;
  margin: 0.5rem 0 0 0;
}

.carousel-item__details--subtitle {
  color: white;
  font-size: 0.8rem;
  margin: 0.3rem 0;
}
.carousel-item__details--description{
  white-space: normal;
  text-align: center;
}
</style>