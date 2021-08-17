<template>
    <div class="header">
        <div class="header-left">
            <span class="iconfont">&#xe610;</span>
        </div>
        <div class="header-input">
            <span class="iconfont icon-search">&#xe62f;</span>
            输入城市/景点/游玩主题
        </div>
        <!-- 点击城市按钮跳转到城市选择页面 -->
        <router-link to="/city">
            <div class="header-right">
                {{this.city}}
                <span class="iconfont icon-arrow">&#xe6aa;</span>
            </div>
        </router-link>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: 'HomeHeader',
  computed: {
    ...mapState(['city'])
  }
}
</script>

<style lang="stylus" scoped>
@import '~styles/variable.styl';
.header
    display:flex
    color:#fff
    background-color:$bgColor
    line-height:$headerHeight
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
        color:#fff
        float:right
        min-width: 1.2rem
        padding  0 .1rem
        .icon-arrow
            margin-left: -.06rem
</style>
