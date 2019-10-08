<template>
  <div>
    <Header style="background:#fff height:160px">
      <template v-slot:left>
        <i class="iconfont iconshouye" ></i>
      </template>
      <template v-slot:main>
        <p>发现  <span>&nbsp</span>
          <span>
            甄选家
          </span>
        </p>
      </template>
      <template v-slot:right>
        <div>
          <i class="iconfont iconsousuo" style="margin-right:25px"></i>
          <i class="iconfont icongouwuche"></i>
        </div>
      </template>
      <template v-slot:nav>  
        <div class="nav" style="height:72px">
          <div class="navLeft" style="width:100%">
            <ul class="dd">
              <li class="action">
                <span >推荐</span>
              </li>
              <li>
                <span>居家生活</span>
              </li>
              <li>
                <span>服饰箱包</span>
              </li>
              <li>
                <span>美酒饮料</span>
              </li>
              <li>
                <span>个护清洁</span>
              </li>
              <li>
                <span>母婴亲子</span>
              </li>
              <li>
                <span>运动旅行</span>
              </li>
              <li>
                <span>数码家电</span>
              </li>
              <li>
                <span>全球特色</span>
              </li>
            </ul>
          </div>
        </div>
      </template>
    </Header>
    <div class="s-wrap">
      <img src="https://yanxuan.nosdn.127.net/9b83d46a01159e7a42d97598dc442172.jpg?imageView&amp;quality=65&amp;thumbnail=690y376" alt="" width="100%" height="100%">
    </div> 
     
  </div>
</template>

<script>
import Header from '../../components/Header/Header'
// import swiper from '../../components/Header/swiper/swiper.vue'
export default {
  components: {
    // swiper,
    Header
  }
}
</script>

<style lang="stylus" >
.search
  display flex
  height 100px
  justify-content space-between
  background #fff
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
.nav
  background #fff
  line-height 72px
.s-wrap 
  margin 100px 0 20px 0
  padding 36px 30px
  background #fff
  

</style>