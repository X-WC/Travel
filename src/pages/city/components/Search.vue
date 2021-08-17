<template>
    <div>
        <div class="search">
            <input v-model="keyword" type="text" class="search-input" placeholder="输入城市名或拼音">
        </div>
        <div
        class="search-content"
        v-show="keyword"
        ref="search"
        >
            <ul>
                <li class="search-item border-bottom"
                    v-for="item of list"
                    :key="item.id"
                    >
                    {{item.name}}
                </li>
                <li class="search-item border-bottom" v-show="hasNoData">
                    没有匹配到城市
                </li>
            </ul>
        </div>
    </div>
</template>

<script>
import BetterScroll from 'better-scroll'

export default {
  name: 'CitySearch',
  // 确保页面可以滚动起来
  mounted () {
    this.scroll = new BetterScroll(this.$refs.search, {
      click: true
    })
  },
  props: {
    // 接收父组件传进来的值
    cities: Object
  },
  data () {
    return {
      keyword: '',
      list: [],
      timer: null
    }
  },
  watch: {
    keyword () {
      // 函数节流器
      if (this.timer) {
        clearTimeout(this.timer)
      }
      // 如果keyword里面没有内容的话 直接返回一个空数组
      if (!this.keyword) {
        this.list = []
        return
      }
      this.timer = setTimeout(() => {
        const result = []
        // 遍历对象
        for (let i in this.cities) {
          // 得到cities对应的值 在进行遍历数组
          this.cities[i].forEach(value => {
            //  查找spell中字符与keyword值是否相同 如果有相同的值 就把原本数组取出 添加给result这个新数组
            if (value.spell.indexOf(this.keyword) > -1 || value.name.indexOf(this.keyword) > -1) {
              result.push(value)
            }
          })
        }
        this.list = result
      }, 100)
    }
  },
  computed: {
    hasNoData () {
      return !this.list.length
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variable.styl'
.search
    height .72rem
    background-color $bgColor
    padding 0 .1rem
    .search-input
        box-sizing border-box
        width 100%
        height .62rem
        padding 0 .1rem
        line-height .62rem
        text-align center
        border-radius .06rem
        color #666
.search-content
    z-index 1
    background #eee
    overflow hidden
    position absolute
    top 1.58rem
    left 0
    right 0
    bottom 0
    .search-item
        height .62rem
        padding .2rem
        line-height .62rem
        background #fff
</style>
