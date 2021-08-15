<template>
    <div class="list">
        <ul>
            <li class="item" v-for="(item,key) of cities" :key="key">{{key}}</li>
        </ul>
    </div>
</template>

<script>
export default {
  name: 'CityAlphabet',
  props: {
    cities: Object
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variable.styl'
.list
    display flex
    flex-direction column
    position fixed
    top 50%
    right 0
    width .4rem
    transform translateY(-50%)
    .item
        text-align center
        line-height .4rem
        color:$bgColor
</style>
