<template>
    <div class="header">
        <div class="header-left">
            <span class="iconfont">&#xe610;</span>
        </div>
        <div class="header-input">
            <span class="iconfont icon-search">&#xe62f;</span>
            输入城市/景点/游玩主题
        </div>
        <div class="header-right">
            城市
            <span class="iconfont icon-arrow">&#xe6aa;</span>
        </div>
    </div>
</template>

<script>
export default {
  name: 'HomeHeader'
}
</script>

<style lang="stylus" scoped>
@import '~styles/variable.styl';
.header
    display:flex
    color:#fff
    background-color:$bgColor
    line-height:0.88rem
    text-align:center
    .header-left
        float:left
        width:0.8rem
        height:0.88rem
    .header-input
        flex:1
        height:0.6rem
        line-height:0.6rem
        margin:0.14rem 0
        background-color:#fff
        color:#e4e7ea
        border-radius:0.06rem
        text-align:left
        .icon-search
            margin-left:.2rem
    .header-right
        float:right
        width:1.28rem
        .icon-arrow
            margin-left: -.06rem
</style>
