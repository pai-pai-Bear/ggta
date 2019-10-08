<template>
  <div>
    <header>
      <slot name="left"></slot>
      <slot name='main'></slot>
      <slot name='right'></slot>
    </header>
  </div>
</template>


<script>
export default {
  data(){
    return {
      one: 1,
      bar: 2
    }
  }
}
</script>

<style lang="stylus">
header 
  position relative
  top 0
  display flex
  justify-content space-between
  box-sizing border-box
  width 100%
  height 100px
  line-height 100px
  padding 0  30px
  font-size 36px
  
</style>>
