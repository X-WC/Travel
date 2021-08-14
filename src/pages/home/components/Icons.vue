<template>
   <div class="icons">
        <swiper ref="mySwiper">
            <swiper-slide v-for="(page,index) of pages" :key="index">
                <div class="icon" v-for="item in page" :key="item.id">
                    <div class="icon-img">
                        <img class="icon-img-content" :src="item.imgUrl" alt="">
                    </div>
                    <p class="icon-desc">{{item.desc}}</p>
                </div>
            </swiper-slide>
        </swiper>
   </div>
</template>

<script>
export default {
  name: 'HomeIcons',
  props: {
    iconList: Array
  },
  data () {
    return {}
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variable.styl';
@import '~styles/mixins.styl';
.icons >>> .swiper-container
    width:100%
    height:50vw
.icons
    margin-top .1rem
    .icon
        overflow hidden
        position:relative
        float:left
        width:25%
        height:25vw
        .icon-img
            position:absolute
            top:0
            left:0
            right:0
            bottom:.3rem
            .icon-img-content
                display:block
                height:100%
                margin 0 auto
        .icon-desc
            position:absolute
            left 0
            right 0
            bottom 0
            text-align center
            color $textColor
            // 解决文字描述超过p标签宽度
            ellipsis()
</style>
