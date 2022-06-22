<template>
  <MovieCardListVue :movtype="movtype"/>
</template>

<script>
import MovieCardListVue from '../components/MovieCardList.vue'

export default {
  name: 'MoviePage',
  props: {
        movtype: String
    },
  components: {
    MovieCardListVue
  }
}
</script>
