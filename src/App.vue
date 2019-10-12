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

  mounted() {
    this.$store.dispatch('getHomeData')
    this.$store.dispatch('getCategory')
    this.$store.dispatch('getCategoryList')
    this.$store.dispatch('getThings')
    this.$store.dispatch('getHot')
  },

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
