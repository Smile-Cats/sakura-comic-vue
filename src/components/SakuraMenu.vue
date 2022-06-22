<template>
  <el-menu
    :default-active="activeIndex"
    background-color="white"
    text-color="black"
    active-text-color="#24b8f2"
    :router="true"
    class="el-menu-demo"
    mode="horizontal"
    :ellipsis="true"
    @select="handleSelect"
  >
    <el-menu-item index="/" style="font-size:larger; color:#409EFF; ">Avalon</el-menu-item>
    <el-menu-item index="/movtype/4">动漫</el-menu-item>
    <el-menu-item index="/movtype/1">电影</el-menu-item>
    <el-menu-item index="/movtype/2">电视剧</el-menu-item>
    <el-menu-item index="/movtype/3">综艺</el-menu-item>
    <!-- <el-menu-item index="5">追番</el-menu-item>
    <el-menu-item index="6">个人空间</el-menu-item> -->
    <div class="menu-input">
      <el-input
        v-model="input"
        placeholder="Search"
        style = "width: 80%; margin-left: 3%"
        @keyup.enter="searchChange"
        :suffix-icon="Search"
      />
    </div>
    <div style="position: absolute; right: 0px;">
        <p class="login" style="margin: 15px 11px">
            登录/注册
        </p>
    </div>
  </el-menu>
</template>

<script>
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'
import { useRouter } from 'vue-router'

export default {
    name: "SakuraMenu",
    setup() {
        const router = useRouter()
        console.log(router.currentRoute.value)
        const activeIndex = ref('/')
        // console.log(activeIndex.value)
        console.log(router.currentRoute.value)
        const input = ref('')
        return {
            router,
            activeIndex,
            input,
            Search
            }
    },

    methods: {
        handleSelect(key, keyPath)  {
            console.log(key)
            this.activeIndex = key
            this.input = ''
          },
        
        // 输入框输入数据时 路由改变
        searchChange(value) {
          if(this.input) {
            this.activeIndex = '/'
            this.router.push({ name: 'search', query: { keyword: this.input }})
          }
        }
    },


    mounted() {
      this.router.isReady().then(
        () => {
          var currentPath = this.$route.fullPath
          if (currentPath.indexOf('search?keyword=') > -1) {
            this.input = this.$route.query.keyword ? this.$route.query.keyword : ''
          } else if (currentPath.indexOf('/movtype/') > -1) {
            this.activeIndex = currentPath
          }
        }
        ).catch(
          () => {
            this.input = ''
            this.activeIndex = '/'
          }
        )
    }
}


</script>

<style>
.flex-grow {
  flex-grow: 1;
}


/* 取消过渡效果 */
.el-menu-item {
  border-bottom: 0 !important;
}

.el-menu-item.is-active {
  background-color: white !important;
  border-bottom: 0 !important;
}

.el-menu-item:focus {
  background-color: white !important;
}

.el-menu-item:hover {
  background-color: white !important;
  color: #24b8f2 !important;
}

.el-menu {
  border: none !important;
  height: 100%;
  position: relative;
}

.el-input {
  margin: 10px 0px;
}

div.menu-input {
  position: absolute;
  right: 10%;
  width: 25%;
}
</style>
