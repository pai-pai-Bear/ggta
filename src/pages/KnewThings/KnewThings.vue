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
          <div class="navLeft" style="width:100%" ref="twoBs">
            <ul class="dd">
              <li class="action">
                <span >推荐</span>
              </li>
              <li v-for="(item, index) in categoryList" :key="index">
                <span>{{item.name}}</span>
              </li>
            </ul>
          </div>
        </div>
      </template>
    </Header>
    <div class="s-wrap" ref="list">
      <div class="banner">
        <img src="https://yanxuan.nosdn.127.net/9b83d46a01159e7a42d97598dc442172.jpg?imageView&amp;quality=65&amp;thumbnail=690y376" alt="" width="100%" height="100%">
      </div>
      <div class="kList" v-for="(list, index) in things" 
        :key="index" 
        @touchstart="fun"
        @touchmove="height">
        <div class="p1" v-for="(l,i) in list.topics" :key="i" v-if="l.style === 2">
          <div class="pl">
            <div class="plt">
              <img :src="l.avatar">
              <span>{{l.nickname}}</span>
            </div>
            <div class="plm">
              <span>{{l.title}}</span>
              <span class="slim">{{l.subTitle}}</span>
            </div>
            <div class="plb">
              <i class="iconfont"></i>
              <span>{{l.readCount}}</span>
              <span>人看过</span>
            </div>
          </div>
          <div class="pr">
            <img :src="l.picUrl" alt="">
          </div>
        </div>
        <div class="p2" v-for="(l,i) in list.topics" :key="i" v-if="l.style === 1">
          <div class="pt">
            <img :src="l.avatar">
            <span>{{l.nickname}}</span>
          </div>
          <div class="pp">
            {{l.title}}
          </div>
          <div class="pi">
            <img :src="l.picUrl" alt="">
          </div>
          <div class="pk">
            <span>{{l.readCount}}</span>
            <span>人看过</span>
          </div>
        </div>
        
        <div class="p3" v-for="(l,i) in list.topics" :key="i" v-if="l.style === 3">
          <div class="ppp">
            {{l.title}}
          </div>
          <div class="ppt">
            {{l.subTitle}}
          </div>
          <div class="ppl">
            <ul>
              <li v-for="(p,n) in l.itemList" :key="n">
                <img :src="p.itemUrl" alt="">
              </li>
            </ul>
          </div>
          <div class="ppk">
            <span>5151</span>
            <span>人看过</span>
          </div>
        </div>
        
      </div>
    </div> 
     
  </div>
</template>

<script>
import Header from '../../components/Header/Header'
import BScroll from '@better-scroll/core'

import {debounce} from 'lodash'
import {mapState} from 'vuex'
export default {
  data() {
    return {
      height: null
    }
  },

  computed: {
    ...mapState({
      categoryList: state => state.categoryList,
      things: state => state.things
    })

  },

  mounted () {
    this.creatBS2()

    
  },

  watch: {
    categoryList() {
      this.creatBS2()
    },


  },

  methods: {
    creatBS2() {
      this.bs = new BScroll(this.$refs.twoBs, {
        click: true,
        scrollX: true,
      })
    },

    fun() {
      console.log('----')
      const handlerH = debounce( ev => {
        console.log('debounce')
        console.log(ev)
      }, 300)
      this.height = handlerH
    }
  },

  components: {
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
  margin 1.3rem  0 20px 0
  margin-bottom 112px
  .banner
    background #fff
    padding 36px 30px
  .kList
    .p1
      display flex
      justify-content space-between
      margin 20px 0
      padding 32px 30px
      background #fff
      .pl
        display flex
        flex-direction column
        justify-content  space-around
        width 4rem
        height 272px
        .plt
          img
            width .56rem
            height .56rem
            vertical-align middle
            border-radius 50%
            margin-right 10px
          span
            vertical-align middle
            font-size 26px
        .plm
          width 400px
          font-size 36px
          .slim
            display block
            width 400px
            margin-top 16px
            overflow hidden
            text-overflow ellipsis
            white-space nowrap
            font-size 28px
            color #7f7f7f
      .pr
        width 272px
        height 272px
        overflow hidden
        img
          width 150%
          height 130%
          transform translateX(-50px)
    .p2
      box-sizing border-box
      width 100%
      background #fff
      padding 32px 30px
      margin 20px 0
      .pt
        margin-bottom 20px
        img
          width .56rem
          height .56rem
          border-radius 50%
          vertical-align middle
          margin-right 10px
        span
          vertical-align middle
          font-size 26px
      .pp
        width 100%
        line-height 52px
        font-size 34px
        margin-bottom 16px
      .pi
        width 686px
        height 390px
        img 
          width 100%
          height 100%
      .pk
        margin-top 20px
    .p3
      background #fff
      padding 32px 30px
      margin 20px 0
      .ppp
        overflow hidden
        text-overflow ellipsis
        white-space nowrap
        font-size 34px
        margin-bottom 20px

      .ppt
        font-size 26px
        margin-bottom 20px
      .ppl
        ul
          display flex
          flex-wrap wrap
          justify-content space-around
          margin-bottom 20px
          li
            height 166px
            width 166px
            margin-bottom 5px
            img 
              width 100%
              height 100%
</style>