<template>
  <MovieCardListVue :movtype="'3'"/>
</template>

<script>
import MovieCardListVue from '../components/MovieCardList.vue'

export default {
  name: 'MoviePage3',
  components: {
    MovieCardListVue
  }
}
</script>
