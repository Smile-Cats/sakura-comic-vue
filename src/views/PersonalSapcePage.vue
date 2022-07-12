<template>
  <CollectVideosVue :user_id="user_id"/>
</template>

<script>
import { ref } from 'vue'
import CollectVideosVue from '../components/CollectVideos.vue'

export default {
  name: 'PersonalSpacePage',
  props: {
        user_id: String
    },
  components: {
    CollectVideosVue
  },

  data() {
    return {
        activeName: ref('1')
    }
  },

  methods: {
    handleClick(tab, event) {
        console.log(tab, event)
    }
  }
}
</script>

<style>
.demo-tabs  {
    margin: 20px 15px;
}



.demo-tabs > .el-tabs__content {
  margin: 0;
  background: #fff;
}

span.tab-label {
  font-size: 15px; 
  font-weight: bold;
  color: #606266; 
}
</style>

