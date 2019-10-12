<template>
  <div>
    <div class="s-search">
      <div class="inputc">
        <i class="iconfont iconsousuo"></i>
        <input type="search" 
        :placeholder="defaultKey" 
        v-model="key"/>
        <!-- <span class="del" @click="del">x</span> -->
      </div>
      <span @click="$router.back()">取消</span>
    </div>  
    <div class="result">
      <ul class="reL" v-show="key">
        <li>wa</li>
        <li>wa</li>
        <li>wa</li>
        <li>wa</li>
      </ul>    
    </div>
    <div class="key">
      <div class="hot">热门搜索</div>
      <ul class="s-pp">
        <li :class="{active: key.highlight === 1}" v-for="(key, index) in hots.hotKeywordVOList" :key="index">
          <span >{{key.keyword}}</span>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {mapState} from 'vuex'
export default {
  data() {
    return {
      defaultKey:'',
      key: ''
    }
  },

  computed: {
    ...mapState({
      hots: state => state.hots
    })
  },

  methods: {
    del() {
      this.defaultKey = ''
    }
  },

  mounted(){
    let index = Math.floor(Math.random() * 3)
    this.defaultKey = this.hots.defaultKeywords[index].keyword
  }
}
</script>

<style lang="stylus" >
.s-search
  display flex
  align-items center
  box-sizing border-box
  background #fff
  height 88px
  line-height 88px
  padding 0 30px
  .inputc
    padding 0 20px
    width 88%
    height 56px
    line-height 56px
    box-sizing border-box
    background #f4f4f4
    i
      font-size 34px
      vertical-align middle
      margin-right 20px
    input
      height 39px
      width 89%
      outline none
      vertical-align middle
      background #f4f4f4
      font-size 28px
      // color #ddd
      color: rgba(0,0,0,.8)
      .del
        position absolute
        right 0
        top 0
  span
    margin-left 20px
    height 88px
    text-align center
    font-size 30px
.result
  position relative
  top 0
  background #fff
  font-size 30px
  .reL
    position absolute
    padding 0 30px
    background #fff
    top 0
    left 0
    li
      width 750px
      height 104px
      line-height 104px
      border-bottom 1px solid #ddd

.key
  height 330px
  background #fff
  .hot
    height 90px
    padding 0 30px
    border-style none
    font-size 28px
    line-height 90px
    color #999
  .s-pp
    display flex
    flex-wrap wrap
    width 100%  
    font-size 24px
    color #333
    background #fff
    li
      margin 0 0 32px 32px
      height 47px
      line-height 47px
      text-align center
      border 1px solid #999
      border-radius 4px
      font-size 24px
      color #333
      font-weight bold
      padding 0 15px
      &.active
        border 1px solid #b4282d
        color #b4282d
  
</style>