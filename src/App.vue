<template>
  <div>
    <Header @genres-films="setMovies"/>
    <Main :films="films" :tvSeries="tvSeries"/>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Main from './components/Main.vue'
export default {
  name: 'App',
  data(){
    return{
      films:[],
      tvSeries:[]
    }
  },
  components: {
   Header,
   Main,
  },
  methods:{
    setMovies(films,tvSeries){
      this.films = films;
      this.tvSeries = tvSeries
    }
  }
}
</script>

<style lang="scss">
@import "assets/scss/style.scss"
</style>
