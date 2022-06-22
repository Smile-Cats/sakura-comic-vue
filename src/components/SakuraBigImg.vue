<template>
  <el-carousel :height="bannerHeight+'px'" style="margin: 0 auto; width: 100%; border-radius: 4px" indicator-position="outside">
    <el-carousel-item v-for="i in imgs" :key="i">
      <img :src="i" style="width: 100%" ref="bannerHeight" @load="imgLoad">
    </el-carousel-item>
  </el-carousel>
</template>


<script>

export default {
    name: "SakuraBigImg",
    props: {
        movtype: Number
    },
    setup() {
        return {
            // movieList
        }
    },
    data() {
        return {
            bannerHeight: "",
            imgs: [
                "src/assets/bigImg/b1.webp",
                "src/assets/bigImg/b2.webp",
                "src/assets/bigImg/b3.webp",
                "src/assets/bigImg/b4.webp"]
        }
    },

    mounted() {
          this.imgLoad();
            window.addEventListener('resize',() => {
                this.bannerHeight=this.$refs.bannerHeight[0].height;
                this.imgLoad();
            },false)
        },

    methods: {
          imgLoad(){
            this.$nextTick(()=>{
              this.bannerHeight=this.$refs.bannerHeight[0].height;
                console.log(this.$refs.bannerHeight[0].height);
            })
          },
          }
}

</script>

<style scoped>
.el-carousel__item h3 {
  display: flex;
  color: #475669;
  opacity: 0.75;
  line-height: 300px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: white;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: white;
}
</style>
