<template>
    <div class="list">
        <ul>
            <li class="item"
            v-for="item of letters"
            :key="item"
            @click="handleLetterClick"
            @touchstart="handletouchStart"
            @touchmove="handletouchMove"
            @touchend="handletouchEnd"
            :ref="item"
            >
            {{item}}
            </li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  },
  computed: {
    letters () {
      // 定义一个空数组
      const letters = []
      // 循环 cities对象
      for (let i in this.cities) {
        // 将字母表取出作为数组项
        letters.push(i)
      }
      // ["A","B","C"...]
      return letters
    }
  },
  // 将数据更新时 执行此函数
  updated () {
    // 得到A字母距离顶端的高度
    this.startY = this.$refs['A'][0].offsetTop
  },
  data () {
    return {
      // 定义一个标识位touches 确保在touchmove的时候才进行操作
      touchStatus: false,
      startY: 0,
      // 节流阀
      timer: null
    }
  },
  methods: {
    handleLetterClick (e) {
      this.$emit('change', e.target.innerText)
    },
    handletouchStart () {
      this.touchStatus = true
    },
    handletouchMove (e) {
      // console.log(e)
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          // 得到手指距离顶端的高度
          const touchY = e.touches[0].clientY - 79
          // 字母的索引 = （手指距离顶端的高度-A字母距离顶端的高度） / 字母本身的高度
          const index = Math.floor((touchY - this.startY) / 20)
          // 索引在0到数组长度的最大值之间 执行中间代码
          if (index >= 0 && index < this.letters.length) {
            // 将数组的索引字母暴露给父组件 从而传达给兄弟组件
            this.$emit('change', this.letters[index])
          }
        }, 8)
      }
    },
    handletouchEnd () {
      this.touchStatus = false
    }
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variable.styl'
.list
    display flex
    flex-direction column
    justify-content center
    position absolute
    top 1.58rem
    right 0
    bottom 0
    width .4rem

    .item
        text-align center
        line-height .4rem
        color:$bgColor
</style>
