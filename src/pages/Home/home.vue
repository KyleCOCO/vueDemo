<template>
  <div id="home">
    <nav-bar class="home-nav">
      <div slot="center">
        购物街
      </div>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from '@/components/navbar/NavBar'
export default {
  name: 'home',
  components: {
    NavBar
  },
  data() {
    return {
      
    };
  },
  computed: {},
  watch: {},
  methods: {},
  created() {
    this.$axios({
      url: '/home/multidata'
    }).then(res => {
      console.log(res);
    })
  },
  mounted() {},
  beforeCreate() {},
  beforeMount() {},
  beforeUpdate() {},
  updated() {},
  beforeDestroy() {},
  destroyed() {},
  activated() {},
}
</script>
<style scoped>
  .home-nav {
    background-color: var(--color-tint);
    color: #fff;
  }
</style>