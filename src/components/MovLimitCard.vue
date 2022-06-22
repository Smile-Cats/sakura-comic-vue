<template>  
  <div class="home-card" v-show="contentshow">
    <el-row style="margin: 15px 0 0 0">
        <span class="home-card-type">{{ type_id_names[movtype] }}</span>
        <router-link :to="'/movtype/'+ movtype" class="home-card-type" style="text-decoration: none; color:black;">
          &nbsp; 更多>
        </router-link>
    </el-row>
    
    <!-- <el-divider style="margin: 0;"/> -->
    <el-row alignment="flex-start">
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
  </div>
</template>

<script>
import apiGetMovList from '../apis/getMovInfo'
import SakuraBigImg from './SakuraBigImg.vue'
// import SakuraTypeButton from './SakuraTypeButton.vue'
import { useStore } from 'vuex'

export default {
    name: "MovLimitCard",
    props: {
        movtype: Number
    },
    components: {
      SakuraBigImg,
    },

    setup() {
      const store = useStore()  // 该方法用于返回store 实例
      const type_id_names = {
        1: "电影",
        2: "电视剧",
        3: "综艺",
        4: "动漫",
        5: "咨询"
    }
      return {
            store,
            type_id_names
        }
    },

    data() {
      return {
        page: 1,
        contentshow: true,
        movieList: [
            ]
      }
    },

    methods: {
        selectMovie(h) {
            console.log(h)
        },

        getMovList() {
          const param =  { 
              page: this.page,
              movtype: this.movtype 
              }

          console.log(param)
          apiGetMovList(param).then(
            (res) => { 
              // console.log(res)
              if (res.length > 0) {
                  for (var i in res) {
                    this.movieList.push(res[i])
                 }
              } else {
                this.contentShow = false
              }
             }
          ).catch(
            () => {
                this.contentShow = false
            }
          )
      }
   },

   created() {
    this.getMovList()
   }

}
</script>


<style>
span.home-card-type {
    float: left;
    margin: 10px;
    font-size: 20px; 
    font-weight: bold;
    line-height: 20px;
}

.home-card-type {
    float: left;
    margin: 10px;
    line-height: 20px;
}

a.home-card-type:hover {
    color:rgb(36, 184, 242) !important;
}
</style>
