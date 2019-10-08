<template>
  <div>
    
    <router-view></router-view>
    <Footer v-show="$route.meta.showFoot"></Footer>
  </div>
</template>

<script>
import Footer from './components/Footer/Footer.vue'
export default {
  name: 'app',
  components: {
    Footer,
  }
}
</script>

<style lang="stylus">
body
  background #eee
  color #666
  overflow-x hidden
</style>
