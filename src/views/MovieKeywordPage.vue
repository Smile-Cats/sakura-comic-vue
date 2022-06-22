<template>
  <MovieCardListVue :movtype="'0'" :keyword="keyword"/>
</template>

<script>
import MovieCardListVue from '../components/MovieCardList.vue'

export default {
  name: 'MovieKeywordPage',
  data() {
    return {
      keyword: ''
    }
  },

  components: {
    MovieCardListVue
  },

  created() {
    this.keyword = this.$route.query.keyword
  }
}
</script>
