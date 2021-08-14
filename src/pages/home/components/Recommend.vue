<template>
  <div>
    <div class="recommend-title">热销推荐</div>
    <ul>
      <li class="item border-bottom" v-for="item of RecommendList" :key="item.id">
        <div class="item-img-wrapper">
          <img :src="item.imgUrl" class="item-img" alt="" />
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-btn">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'HomeRecommend',
  data () {
    return {
      RecommendList: [{
        id: '0001',
        imgUrl: 'https://imgs.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_200x200_1bc99086.jpg',
        title: '故宫',
        desc: '世界五大宫之首，穿越与您近在咫尺'
      }, {
        id: '0002',
        imgUrl: 'https://imgs.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_200x200_1bc99086.jpg',
        title: '故宫',
        desc: '世界五大宫之首，穿越与您近在咫尺'
      }, {
        id: '0003',
        imgUrl: 'https://imgs.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_200x200_1bc99086.jpg',
        title: '故宫',
        desc: '世界五大宫之首，穿越与您近在咫尺'
      }, {
        id: '0004',
        imgUrl: 'https://imgs.qunarzz.com/sight/p0/1409/19/adca619faaab0898245dc4ec482b5722.jpg_200x200_1bc99086.jpg',
        title: '故宫',
        desc: '世界五大宫之首，穿越与您近在咫尺'
      }]
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/mixins.styl';
    .recommend-title
        line-height: 0.8rem
        background-color: #eee
        margin-top: 0.2rem
        text-indent: 0.2rem
    .item
        display flex
        height 1.9rem
        .item-img-wrapper
            padding .1rem
            overflow hidden
            width 1.7rem
            height 1.7rem
            .item-img
                height 100%
                width 100%
        .item-info
            flex 1
            padding .1rem
            .item-title
                line-height .54rem
                font-size .32rem
                ellipsis()
            .item-desc
                line-height .4rem
                color:#ccc
                ellipsis()
            .item-btn
                line-height .44rem
                margin-top .16rem
                background-color #ff9300
                padding 0 .2rem
                border-radius .06rem
                color #fff
</style>
