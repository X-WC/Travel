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
  data () {
    return {
      iconsList: [{
        id: '0001',
        imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20215/bdbdf2d8bbc533595440c74c7bd22af4.png',
        desc: '热门景点'
      }, {
        id: '0002',
        imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/cd9c5d035aa48862c3695becc06764e6.png',
        desc: '热门景点'
      }, {
        id: '0003',
        imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/feac0f0a895cbc7c49920238529ca6e7.png',
        desc: '热门景点'
      }, {
        id: '0004',
        imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20209/5ffcd4a916f764f678263b27c1e2e00c.png',
        desc: '热门景点'
      }, {
        id: '0005',
        imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20215/bdbdf2d8bbc533595440c74c7bd22af4.png',
        desc: '热门景点'
      }, {
        id: '0006',
        imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20215/bdbdf2d8bbc533595440c74c7bd22af4.png',
        desc: '热门景点'
      }, {
        id: '0007',
        imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20215/bdbdf2d8bbc533595440c74c7bd22af4.png',
        desc: '热门景点'
      }, {
        id: '0008',
        imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20215/bdbdf2d8bbc533595440c74c7bd22af4.png',
        desc: '热门景点'
      }, {
        id: '0009',
        imgUrl: 'https://mp-piao-admincp.qunarzz.com/mp_piao_admin_mp_piao_admin/admin/20215/bdbdf2d8bbc533595440c74c7bd22af4.png',
        desc: '热门景点'
      }]
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconsList.forEach((item, index) => {
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
