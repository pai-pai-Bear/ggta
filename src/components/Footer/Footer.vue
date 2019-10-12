<template>
    <footer id="footer">
      <div :class="{active: this.$route.path !== '/category' && $route.path !== '/knewThings' &&  $route.path !== '/cart' && $route.path !== '/personal'}" >
        <span class="item" @click="goto('/home')">
          <i class="iconfont iconshouye"></i>
          <span>首页</span>
        </span>
      </div>
      <div :class="{active:$route.path === '/category'}">
        <span class="item" @click="goto('/category')">
          <i class="iconfont iconchouti"></i>
          <span>分类</span>
        </span>
      </div>
      <div :class="{active:$route.path === '/knewThings'}">
        <span class="item" @click="goto('/knewThings')">
          <i class="iconfont iconshitu"></i>
          <span>识物</span>
        </span>
      </div>
      <div :class="{active:$route.path === '/cart'}">
        <span class="item" @click="goto('/cart')">
          <i class="iconfont icongouwuche"></i>
          <span>购物车</span>
        </span>
      </div>
      <div :class="{active:$route.path === '/personal'}">
        <span class="item" @click="goto('/personal')">
          <i class="iconfont icongeren"></i>
          <span>个人</span>
        </span>
      </div>
    </footer>
</template>

<script>
export default {
  data(){
    return {
      path: '/',
      show: true
    }
  },
  computed: {
    isactive () {
      this.path = this.$route.path
      console.log(this.path)
    }
  },

  methods: {
    goto(path){
      if(this.$route.path !== path){
        this.$router.replace(path)
      } else {
        window.location.reload()
      }
    },

  } ,

  watch: {
    
  }
}
</script>

<style lang="stylus" scorpt>
#footer
  display flex
  position fixed
  bottom 0
  left 0
  width 100%
  height 98px
  background #fff
  z-index 98
  div
    display flex
    justify-content center
    align-items center
    width 20%
    color #666
    &.active
      color #b4282d
    .item
      text-align center
      .iconfont
        display inline-block
        font-size 34px
        margin-bottom 6px
      span
        display block
        font-size 24px

    

</style>