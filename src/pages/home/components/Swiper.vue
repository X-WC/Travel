<template>
    <div class="wrapper">
        <swiper ref="mySwiper" :options="swiperOptions">
            <swiper-slide v-for="item in swiperList" :key="item.id">
                <img class="swiper-img" :src="item.imgUrl" alt="">
            </swiper-slide>
            <div class="swiper-pagination" slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
  name: 'HomeSwiper',
  data () {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination'
        },
        loop: true, // 循环
        autoplay: {
          disableOnInteraction: false, // 打断后继续自动轮播
          delay: 4000 // 轮播延迟
        }
      },
      swiperList: [{
        id: '0001',
        imgUrl: require('@/assets/upload/focus.jpg')
      }, {
        id: '0002',
        imgUrl: require('@/assets/upload/focus.jpg')
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
    .wrapper >>> .swiper-pagination-bullet-active
        background-color #fff
    .wrapper
        overflow hidden
        width 100%
        height 0
        padding-bottom 20%
        background-color #ccc
        .swiper-img
            width 100%
</style>
