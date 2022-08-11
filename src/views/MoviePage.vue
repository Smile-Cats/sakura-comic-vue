<template>
  <MovieCardListVue :movtype="movtype"/>
</template>

<script>
// 无限滚动条的视频列表页
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
