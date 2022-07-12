<template>
  <div class="search-type" >
        <el-row v-for="o in searchTypes" :key="o.key" style="margin: 10px;" :gutter="20">
          <span style="margin: 5px 10px; font-size: 16px; font-weight: bold; line-height: 20px;">{{ o.name }}:</span>
            <a v-for="d in o.data" :key="o.key + '-' + d" :name="o.key + '-' + d"
             @click="chooseFliter" 
             style="margin: 0 5px; padding: 5px 5px; line-height: 20px;" 
             class="search-type"
             :class="[{active: activeName[o.key] == d}]"
            >{{ d }}</a>
        </el-row>
    </div>
  
  <el-row alignment="flex-start" 
            v-infinite-scroll="loadMore"
            :infinite-scroll-disabled="disabled"
            infinite-scroll-distance="30"
            :infinite-scroll-immediate="true"
            class="mov-card-row"
            v-show="contenshow">
      <el-col 
        v-for="o in movieList"
        :key="o.vod_id"
        :xs="8" :sm="4" :md="4" 
        style="padding: 9px;">   
        <router-link :to="'/movdetail/'+ o.vod_id" style="text-decoration: none;" target="_blank">
        <el-card
        class="box-card" 
        @click="selectMovie"
        shadow="hover"
        :body-style="{ padding: '8px 5px' }">
        <div class="card-div">
          <img :src="o.vod_pic" class="card-image"/>
          <span class="card-remark">{{ o.vod_remarks }}</span>
        </div>
        <div style="padding: 0px;">
          
          <span style="line-height: 26px; font-size: 15px; color:#777; display: flex; margin-top: 4px; text-overflow: ellipsis; overflow: hidden; width: 80%; white-space: nowrap;">
            <el-tooltip class="box-item" effect="dark" :content="o.vod_name" placement="bottom-end" :show-after="1000">
            {{ o.vod_name }}
            </el-tooltip>
          </span>
          <!-- <div class="bottom">
            <p style="font-size:smaller; color:#777; margin: 4px 0">{{ o.vod_remarks }}</p>
          </div> -->
        </div>
      </el-card>
      </router-link>
      </el-col>
  </el-row>
  <el-backtop :right="50" :bottom="80" />
  <p v-show="infiniteMsgShow" class="tips" style="font-size:smaller; color:#777;">Loading...</p>
  <p v-show="!infiniteMsgShow" class="tips" style="font-size:smaller; color:#777;">到底啦</p>
</template>

<script>
import { ref } from 'vue'
import apiGetMovList from '../apis/getMovInfo'
import SakuraBigImg from './SakuraBigImg.vue'
// import SakuraTypeButton from './SakuraTypeButton.vue'
import { useStore } from 'vuex'

export default {
    name: "MovieCardList",
    props: {
        movtype: String,
        keyword: String
    },
    components: {
      SakuraBigImg,
    },

    setup() {
      const store = useStore()  // 该方法用于返回store 实例
      return {
            store
        }
    },

    data() {
      return {
        disabled: false,
        page: 1,
        contenshow: true,
        infiniteMsgShow: true,
        vod_class: '',
        vod_area: '',
        vod_year: '',
        movieList: [
            ],
        searchTypes: [
                {name: "类型", key: "vod_class", data: []},
                {name: "地区", key: "vod_area", data: ["中国", "内地", "美国", "日本", "韩国", "英国", "法国", "香港", "泰国", "more"]},
                {name: "年份", key: "vod_year", data: ["2023", "2022", "2021", "2020", "2019", "2018", "2017", "2016", "2015", "2014", "2013", "2012", "2011", "2010", "more"]}
            ],
        activeName: {
          vod_class: '',
          vod_area: '',
          vod_year: ''
        }
      }
    },

    methods: {
        selectMovie(h) {
            console.log(h)
        },

        chooseFliter(v) {
          // 点击筛选标签后 获取想要筛选的 视频类型
          var cho_fliter = v.currentTarget.attributes.name.value
          // console.log(cho_fliter)
          var name = cho_fliter.split('-')[0]
          var value = cho_fliter.split('-')[1]
          this.activeName[name] = value
          if (name == "vod_class") {
            this.vod_class = value
          } else if (name == "vod_area") {
            this.vod_area = value
          } else if (name == "vod_year") {
            this.vod_year = value
          }
          this.page = 1
          this.movieList = []
          this.getMovList()
        },

        // 当属性滚动的时候  加载  滚动加载
        loadMore () {
          this.disabled = true // 将无限滚动给禁用
          setTimeout(
            () => {
              this.page++ // 增加页数
              this.getMovList() // 请求数据
            }, 500)  // 间隔500毫秒后发送请求
           },

        getMovList() {
          const param =  { 
              page: this.page,
              movtype: this.movtype || 0,
              keyword: this.keyword || '',
              vod_area: this.vod_area,
              vod_class: this.vod_class,
              vod_year: this.vod_year }

          // console.log(param)
          apiGetMovList(param).then(
            (res) => { 
              // console.log(res)
              if (res.length > 0) {
                this.contentShow = true
                this.infiniteMsgShow = true
                  for (var i in res) {
                    this.movieList.push(res[i])
                 }
                  this.disabled = false // 还有多余数据时 无限滚动打开
              } else {
                this.contentShow = false
                this.infiniteMsgShow = false
                this.disabled = true
                
              }
             }
          ).catch(
            () => {
                this.contentShow = false
                this.infiniteMsgShow = false
                this.disabled = true
            }
          )
      },

      getMovTypeNames() {
        // 获取此 movtype 对应的视频类型
        var type_id = this.movtype
        var type_names = this.store.state.appStore.type_names[type_id]
        this.searchTypes[0].data = type_names
        // console.log(type_names)
        // console.log(this.searchTypes)
      }
   },

   created() {
    this.getMovTypeNames()
    this.getMovList()
   }

}

</script>

<style>

a.search-type:hover {
    color: rgb(36, 184, 242);
}

a.search-type.active {
  background-color: rgb(36, 184, 242);
  color: white;
  border-radius: 4px;
}

.bottom {
  margin-top: 0px;
  line-height: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

div.card-div {
    position: relative;
    width: 100%;
    height: 0;
    overflow: hidden;
    padding-bottom: 130%;
    /* background-color: #ececec; */
}

img.card-image {
  width: 95%;
  height: auto;
  display: block;
  margin: 0 auto;
  /* aspect-ratio: 70/89;  */
  object-fit: cover;
}

span.card-remark {
    position: absolute;
    right: 4px;
    bottom: 4px;
    padding: 2px 6px;
    background: rgba(0,0,0,.8);
    color: #fff;
    border-radius: 2px;
    font-size: 13px;
}

.el-card.box-card {
  width: 100%;
  border-radius: 4px 4px 0 0;
  /* margin: 11px; */
  background-color: white;
  /* border-style: none; */
}

/* .el-col.col-card-class {
    margin: 0px 20px 40px 20px;
} */
</style>
