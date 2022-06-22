<template>
  <MovDetail :vod_id="vod_id"/>
  <el-backtop :right="50" :bottom="80" />
</template>

<script>
import MovDetail from '../components/MovDetail.vue'

export default {
  name: 'MovDetailPage',
  props: {
        vod_id: String
    },
  components: {
    MovDetail
  }
}
</script>
