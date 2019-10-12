<template>
  <div id="cateWrap">
    <header>
      <div class="title">
        <i class="iconfont iconsousuo"></i>
        <span>
          搜索商品，共23155款好物
        </span>
      </div>
    </header>
    <div class="cate-list" ref="ll">
      <ul ref="YList">
        <li @click="isRed(index)" :class="{active: index===0}" v-for="(item, index) in category.categoryL1List" :key="index">
          {{item.name}}
        </li>
      </ul>
    </div>
    <div ref="rr" style="height:1140px">
      <div class="cate-showlist">
        <img :src="category.categoryL1List[index].bannerUrl">
          <ul ref="things">
            <li v-for="(li,n) in category.categoryL1List[index].subCateList" :key="n">
              <div class="i-wrap">
                <img :src="li.bannerUrl">
              </div>
              <div class="t-wrap">
                {{li.name}}
              </div>
            </li>
            </li>
          </ul>
      </div>
    </div>
  </div>
</template>

<script>
import BS from '@better-scroll/core'

import {mapState} from 'vuex'
export default {
  data() {
    return {
      index: 0,
      categoryList:[]
    }
  },
  
  computed: {
    ...mapState({
      category: state => state.category
    })
  },

  watch: {
    categoryList() {
      this.$bus.creatBs(this.$refs.rr,false, true)
      this.categoryList = this.category.categoryL1List[this.index].subCateList

    }
  },

  mounted() {
    this.$nextTick(() => {
      this.$bus.creatBs(this.$refs.ll,false, true)
      this.categoryList = this.category.categoryL1List[this.index].subCateList
    })
  },
  methods: {
    isRed(num) {
      // const lis = Array.from(this.$refs.YList.children)
      const lis = [...this.$refs.YList.children]
      lis.forEach((item,index) => {
        item.classList.remove('active')
        if(index === num ) {
          item.classList.add('active')
          this.index = num
        }
      })
    },
  }
}
</script>

<style lang="stylus">
#cateWrap
  background #fff
  overflow hidden
  header
    position relative
    top 0
    height 56px
    line-height 56px
    width 100%
    padding 16px 30px
    background #fff
    border-bottom 1px solid #ededed
    text-align center
    z-index 11
    .title
      height 56px
      background #ededed
      border-radius 10px
      font-size 26px
      letter-spacing 1px
      vertical-align middle
    .iconfont  
      vertical-align middle
      font-size 32px 
  .cate-list    
    float left 
    width 162px
    height 1148px
    color #333
    ul
      padding 40px 0
      text-align center
      font-size 28px
      li
        box-sizing border-box
        height 50px
        line-height 50px
        margin-top 40px
        border-left 4px solid transparent
        &:nth-of-type(1)
          margin-top 0
        &.active
          color #b4282d
          border-left 4px solid #b4282d
  .cate-showlist  
    float right
    width 528px
    height 1097px
    padding 30px 30px 21px
    img
      margin-bottom 32px
      width 528px
      height 192px
      .pagination
        position absolute
        bottom 20px
        z-index 10
        text-align center 
        span
          text-align center
          width 40px
          height 4px
          background #fff
    ul        
      display flex
      flex-wrap wrap
      li
        text-align center
        margin-right 34px
        &:nth-of-type(3n)
          margin-right 0
        .i-wrap
          overflow hidden
          border-radius 50%
          height 144px
          width 144px
          margin-bottom 5px
          img 
            width 100%
            height 100%
        .t-wrap
          width 144px
          font-size 24px
</style>