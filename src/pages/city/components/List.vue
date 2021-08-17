<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="area">
                <div class="title border-topbottom">当前城市</div>
                    <ul class="button-list">
                        <li class="button-wrapper">
                            <div class="button">{{this.city}}</div>
                        </li>
                    </ul>
                </div>
                <div class="area">
                <div class="title border-topbottom">热门城市</div>
                    <ul class="button-list">
                        <li
                        class="button-wrapper"
                        v-for="item of hotCities"
                        :key="item.id"
                        @click="handleCityClick(item.name)"
                        >
                            <div class="button">{{item.name}}</div>
                        </li>
                    </ul>
                </div>
                <div class="area"
                v-for="(city,key) of cities"
                :key="key"
                :ref="key"
                >
                <div class="title border-topbottom">{{key}}</div>
                    <ul class="item-list">
                        <li
                        class="item border-bottom"
                        v-for="item of city"
                        :key="item.id"
                        @click="handleCityClick(item.name)"
                         >{{item.name}}</li>
                    </ul>
                </div>
        </div>
    </div>
</template>

<script>
import BetterScroll from 'better-scroll'
import { mapMutations, mapState } from 'vuex'

export default {
  name: 'CityList',
  computed: {
    ...mapState(['city'])
  },
  methods: {
    handleCityClick (city) {
      // this.$store.commit('changeCity', city)
      this.changeCity(city)
      this.$router.push('/')
    },
    ...mapMutations(['changeCity'])
  },
  props: {
    cities: Object,
    hotCities: Array,
    letter: String
  },
  // 添加一个监听器 监听letter的变化 如果letter变化 则改变城市显示区域
  watch: {
    letter () {
      if (this.letter) {
        // console.log(this.$refs[this.letter])
        // this.$refs[letter]是一个数组 我们需要得到他的dom元素 this.$refs[this.letter][0]
        const element = this.$refs[this.letter][0]
        // better-scroll 提供了一个 scrollToElement 方法 可以让页面跳转到对应的dom元素上
        this.scroll.scrollToElement(element)
      }
    }
  },
  mounted () {
    this.scroll = new BetterScroll(this.$refs.wrapper, {
      click: true
    })
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variable.styl'
.border-topbottom
    &:before
        border-color #ccc
    &:after
        border-color #ccc
.border-bottom
    &:before
        border-color #ccc
.list
    overflow hidden
    position absolute
    top 1.58rem
    left 0
    right 0
    bottom 0
    .title
        height .4rem
        line-height .4rem
        font-size .24rem
        padding .1rem .1rem
        background-color #eee
    .button-list
        overflow hidden
        padding .1rem .6rem .1rem .1rem
        .button-wrapper
            float left
            width 33.3%
            .button
                margin .1rem
                padding .1rem 0
                text-align center
                border .02rem solid #ccc
                border-radius .06rem
    .item-list
        .item
            height .76rem
            padding-left .2rem
            line-height .76rem
</style>
