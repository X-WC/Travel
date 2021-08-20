<template>
  <div>
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" src="http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_600x330_f922b488.jpg" alt="故宫">
      <div class="banner-info">
        <div class="banner-title">故宫(AAAAA景区)</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe630;</span>12
        </div>
      </div>
    </div>
    <common-gallary :imgs="imgs" v-show="showGallary" @close="handleCloseGallary"></common-gallary>
  </div>
</template>

<script>
import CommonGallary from 'common/gallary/Gallary'

export default {
  name: 'DetailBanner',
  components: {
    CommonGallary
  },
  data () {
    return {
      showGallary: false,
      imgs: ['http://img1.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_r_800x800_6edd8174.jpg', 'http://img1.qunarzz.com/sight/p0/1909/4e/4e1afc2e1133ade7a3.img.jpg_r_800x800_d3eb324d.jpg']
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleCloseGallary () {
      this.showGallary = false
    }
  }
}
</script>

<style lang="stylus" scoped>
  .banner
    position relative
    overflow hidden
    height 0
    padding-bottom 55%
    .banner-img
      width 100%
    .banner-info
      display flex
      position absolute
      left 0
      right 0
      bottom 0
      color #fff
      background-image linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,.8))
      .banner-title
        flex:1
        padding .2rem
        font-size .32rem
      .banner-number
        width  1.2rem
        height .4rem
        line-height .4rem
        margin-top .14rem
        margin-right .2rem
        background rgba(0,0,0,.5)
        font-size .24rem
        text-align center
        border-radius .2rem
        .banner-icon
          font-size .24rem
          margin-right .1rem
</style>
