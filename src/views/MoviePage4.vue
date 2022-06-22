<template>
  <MovieCardListVue :movtype="'4'"/>
</template>

<script>
import MovieCardListVue from '../components/MovieCardList.vue'

export default {
  name: 'MoviePage4',
  components: {
    MovieCardListVue
  }
}
</script>
