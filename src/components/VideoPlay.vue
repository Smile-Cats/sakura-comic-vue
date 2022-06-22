<template>
    <vue3videoPlay  
    width="100%"
    title="冰河世纪"
    :src="src"
    :type="type"
    @ended="onEnd"
    :autoPlay="false"/>

</template>

<script>

import 'vue3-video-play/dist/style.css'
import vue3videoPlay from 'vue3-video-play'
// import { videoPlay } from 'vue-video-play'

export default {
    name: 'myVideoPlay',

    props: {
        src: String
    },

    data() {
        return {
            type: 'm3u8', //视频类型
        }
    },
    components: {
        vue3videoPlay
  },

    methods:{

        onEnd() {
            console.log(this.scr, 'ended')
        },

        checkVideo() {
            
            }

    }, 


}

</script>