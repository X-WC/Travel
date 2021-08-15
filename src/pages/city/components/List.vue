<template>
    <div class="list" ref="wrapper">
        <div>
            <div class="area">
                <div class="title border-topbottom">当前城市</div>
                    <ul class="button-list">
                        <li class="button-wrapper">
                            <div class="button">{{city}}</div>
                        </li>
                    </ul>
                </div>
                <div class="area">
                <div class="title border-topbottom">热门城市</div>
                    <ul class="button-list">
                        <li class="button-wrapper" v-for="item of hotCities" :key="item.id">
                            <div class="button">{{item.name}}</div>
                        </li>
                    </ul>
                </div>
                <div class="area" v-for="(city,key) of cities" :key="key">
                <div class="title border-topbottom">{{key}}</div>
                    <ul class="item-list">
                        <li class="item border-bottom" v-for="item of city" :key="item.id">{{item.name}}</li>
                    </ul>
                </div>
        </div>
    </div>
</template>

<script>
import BetterScroll from 'better-scroll'

export default {
  name: 'CityList',
  mounted () {
    this.scroll = new BetterScroll(this.$refs.wrapper, {
      click: true
    })
  },
  props: {
    city: String,
    cities: Object,
    hotCities: Array
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
