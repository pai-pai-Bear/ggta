<template>
  <div style="height:100vh;background:#fff">
    <Header class="header">
      <template v-slot:left>
        <i class="iconfont iconshouye" @click="$router.replace('/home')"></i>
      </template>
      <template v-slot:main>
        <img src="//yanxuan-static.nosdn.127.net/hxm/yanxuan-wap/p/20161201/style/img/icon-normal/indexLogo-a90bdaae6b.png" alt="">
      </template>
      <template v-slot:right>
        <div>
          <i class="iconfont iconsousuo" style="margin-right:25px"></i>
          <i class="iconfont icongouwuche"></i>
        </div>
      </template>
    </Header>
  </div>  
</template>

<script>
import Header from '../../components/Header/Header'
export default {
  components: {
    Header,
  }
}
</script>

<style lang="stylus" scoped>
body
  background #fff
.search
  display flex
  height 100px
  justify-content space-between
  background:#fafafa
  img 
    margin-left 50px
    height 70%
  .iconfont
    font-size 46px
  p
    position absolute
    left 0
    right 0
    margin auto
    text-align center
    color #b4282d
    font-size 40px
    font-weight bold
    span
      font-size 26px
      color #666
</style>