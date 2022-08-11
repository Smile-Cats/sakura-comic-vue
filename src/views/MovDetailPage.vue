<template>
  <MovDetail :vod_id="vod_id"/>
  <CommentVue :vod_id="vod_id"/>
  <el-backtop :right="50" :bottom="80" />
</template>

<script>
// 详情页
import MovDetail from '../components/MovDetail.vue'
import CommentVue from '../components/Comments.vue'

export default {
  name: 'MovDetailPage',
  props: {
        vod_id: String
    },
  components: {
    MovDetail,
    CommentVue
  }
}
</script>
