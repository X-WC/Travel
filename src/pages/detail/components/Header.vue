<template>
  <div>
    <router-link
    tag="div"
    to="/"
    class="header-abs"
    v-show="showAbs"
    >
      <div class="header-abs-back">
            <span class="iconfont">&#xe610;</span>
        </div>
    </router-link>
    <div
    class="header-fixed"
    v-show="!showAbs"
    :style="opacityStyle"
    >
      景点详情
        <router-link to="/">
          <div class="header-fixed-back">
            <span class="iconfont">&#xe610;</span>
          </div>
      </router-link>
    </div>
    <div class="content"></div>
  </div>
</template>

<script>

export default {
  name: 'DetailHeader',
  data () {
    return {
      showAbs: true,
      opacityStyle: {
        opacity: 0
      }
    }
  },
  methods: {
    handleScroll () {
      const top = document.documentElement.scrollTop
      if (top > 60) {
        let opacity = top / 140
        opacity = opacity > 1 ? 1 : opacity
        this.opacityStyle = {opacity}
        this.showAbs = false
      } else {
        this.showAbs = true
      }
    }
  },
  activated () {
    window.addEventListener('scroll', this.handleScroll)
  }
}
</script>

<style lang="stylus" scoped>
  @import '~styles/variable.styl'
  .header-abs
    position absolute
    top .2rem
    left .2rem
    right 0
    bottom 0
    width .8rem
    height .8rem
    line-height .8rem
    text-align center
    border-radius .4rem
    background rgba(0,0,0,.5)
    .header-abs-back
      color #fff
  .header-fixed
    position fixed
    top 0
    width 100%
    height $headerHeight
    line-height $headerHeight
    background-color $bgColor
    text-align center
    font-size .32rem
    color #fff
    .header-fixed-back
        position absolute
        top 0
        left 0
        width:0.8rem
        height:0.88rem
        color #fff
  .content
    height 50rem
</style>
