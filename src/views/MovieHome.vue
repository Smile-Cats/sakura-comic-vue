<template>
  <div style="padding: 20px 10px 0 10px">
    <SakuraBigImgVue/>
  </div>
  
  <MovLimitCardVue :movtype="4"/>
  <MovLimitCardVue :movtype="1"/>
  <MovLimitCardVue :movtype="2"/>
  <MovLimitCardVue :movtype="3"/>
  <el-backtop :right="50" :bottom="80" />
</template>

<script>
import SakuraBigImgVue from '../components/SakuraBigImg.vue'
import MovLimitCardVue from '../components/MovLimitCard.vue'

export default {
  name: 'MovieHome',
  components: {
    MovLimitCardVue,
    SakuraBigImgVue
  }
}
</script>
