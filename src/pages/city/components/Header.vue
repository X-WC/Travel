<template>
    <div>
        <div class="header">
            城市选择
            <router-link to="/">
                <div class="header-left">
                    <span class="iconfont">&#xe610;</span>
                </div>
            </router-link>
        </div>
    </div>
</template>

<script>
export default {
  name: 'CityHeader'
}
</script>

<style lang="stylus" scoped>
@import '~styles/variable.styl'
.header
    position relative
    background-color $bgColor
    height $headerHeight
    line-height $headerHeight
    text-align center
    font-size .32rem
    color #fff
    .header-left
        position absolute
        top 0
        left 0
        width:0.8rem
        height:0.88rem
        color #fff
</style>
