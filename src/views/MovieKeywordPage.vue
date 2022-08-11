<template>
  <MovieCardListVue :movtype="'0'" :keyword="keyword"/>
</template>

<script>
// 根据关键词搜索的视频页
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
