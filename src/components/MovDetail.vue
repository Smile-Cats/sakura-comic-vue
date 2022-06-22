<template>
    <div class="vod-detail" style="margin: 20px 0; width: 90%; overflow: hidden;">
        <el-row class="vod-detail">
            <el-col :xs="24" :sm="6" class="vod-detail">
                <div class="vod-detail">
                    <img :src="mov_detail.vod_pic" alt=""/>
                </div>
                
            </el-col>
            <el-col  :sm="18" style="padding: 0 10px">
                <el-row style="margin: 0 0 15px 0">
                    <p style="margin: 0; font-size: 18px;">{{ mov_detail.vod_name }}</p>
                </el-row>

                <el-row v-if="mov_detail.vod_sub">
                    <span class="des-name">
                        又名:&nbsp; &nbsp; 
                        <p class="des-content">{{ mov_detail.vod_sub }}</p>
                    </span>
                    
                </el-row>

                <el-row>
                    <span class="des-name">地区:&nbsp;&nbsp;</span>
                    <p class="des-content"> {{ mov_detail.vod_area }}</p>
                </el-row>

                <el-row>
                    <span class="des-name">
                        语言:&nbsp;&nbsp;
                        <p class="des-content"> {{ mov_detail.vod_lang }}</p>
                    </span>
                    
                </el-row>

                <el-row>
                    <span class="des-name">
                        类型:&nbsp;&nbsp;
                        <p class="des-content"> {{ mov_detail.type_name }}</p>
                    </span>
                    
                </el-row>

                <el-row>
                    <span class="des-name">
                        上映:&nbsp;&nbsp;
                        <p class="des-content"> {{ mov_detail.vod_year }}</p>
                    </span>
                    
                </el-row>

                <el-row>
                    <span class="des-name">
                        集数:&nbsp; &nbsp;
                        <p class="des-content">{{ mov_detail.vod_remark }}</p>
                    </span>
                    
                </el-row>

                <el-row>
                    <span class="des-name">
                        导演:&nbsp;&nbsp;
                        <p class="des-content"> {{ mov_detail.vod_director }}</p>
                    </span>
                    
                </el-row>

                <el-row>
                    <span class="des-name">
                        更新时间:&nbsp;&nbsp;
                        <p class="des-content"> {{ mov_detail.vod_time }}</p>
                    </span>
                    
                </el-row>

                <el-row>
                    <span class="des-name">
                        主演:&nbsp;&nbsp;
                        <p class="des-content"> {{ mov_detail.vod_actor }}</p>
                    </span>
                    
                </el-row>

                <el-row class="detail3">
                    <span class="des-name">
                        详情:&nbsp;&nbsp; 
                        <p class="des-content" style="font-size:15px" v-if="checkHtml(mov_detail.vod_content)" v-html="mov_detail.vod_content"/>
                        <p class="des-content" style="font-size:15px" v-else>{{ mov_detail.vod_content }}</p>
                    </span>  
                    
                </el-row>

            </el-col>  
        </el-row>

        <el-row class="vod-play-url">
            <el-col class="vod-play-url"
                v-for="v, k in mov_detail.vod_play_url" 
                :key="k"
                :href="v"
                :xs="8" :sm="3"
                style="margin: 5px 0;"
                >
                <el-button 
                class="vod-play-url" 
                style="float: left;" 
                @click="videoPlay" 
                :class="[{active: activeName == v}]"
                :href="v">{{ k }}
                </el-button>
            </el-col>
        </el-row>
        
        <el-row class="video-play" v-if="video_play" style="margin: 40px  0">
            <myVideoPlay :src="video_play_url"/>
        </el-row>
    </div>
</template>

<script>
import apiGetMovDetail from '../apis/getMovDetail'
import myVideoPlay from './VideoPlay.vue'
import { ElMessage } from 'element-plus'

export default {
  name: 'MovDetail',

  components: {
    myVideoPlay
  },

  props: {
        vod_id: String
    },
  data() {
    return {
        mov_detail: {},
        video_play: false,
        video_play_url: '',  // 此时正在播放的 视频url
        activeName: ''
    }
  },

  methods: {
    getMovDetail() {
        var param = {
            vod_id: this.vod_id
        }
        console.log(param)
        apiGetMovDetail(param).then(
            (res) => {
                if (res.code == 200) {
                    this.mov_detail = res.data
                } else {
                    console.log('failed', res)
                }
            }
        )
    },

    videoPlay(v) {
        // 点击按钮时修改 视频播放的链接
        var play_url = v.currentTarget.attributes.href.value
        console.log(play_url)
        if (play_url) {
            this.video_play = true
            this.video_play_url = play_url
            this.activeName = play_url
        } else {
            ElMessage({
                message: '导入视频失败',
                type: 'warning',
                })
        }
        
    },

    checkHtml(s) {
        if (typeof(s) == 'string') {
            if (s.indexOf('<p>')>-1) {
                return true
            } else if (s.indexOf('<span>')>-1) {
                return true
            } else {
                return false
            }
        } else {
            return false
        }
    }
  },

  created() {
    this.getMovDetail()
  }

}

</script>

<style>

div.vod-detail .el-row {
    margin: 0 0 10px;
}

span.des-name {
    line-height: 20px;
    margin: 0;
    color: #999;
    font-weight: 400;
    display: inline;
    text-align: left;
}

p.des-content {
    margin: 0;
    line-height: 20px;
    text-align: left;
    display: inline;
    color:black;
}


.el-col.vod-detail div.vod-detail {
    position: relative;
    width: 100%;
    height: 0;
    overflow: hidden;
    padding-bottom: 130%;
}

.el-col.vod-detail div img {
    width: 95%;
    height: auto;
    display: block;
    margin: 0 auto;
    /* aspect-ratio: 70/89;  */
    object-fit: cover;
}

.el-button.vod-play-url.active {
  background-color: rgb(36, 184, 242);
  color: white;
  border-radius: 4px;
}
/* p {
    margin: 0;
    padding: 0;
} */
</style>