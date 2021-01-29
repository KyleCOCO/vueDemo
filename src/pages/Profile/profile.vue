<template>
  <div>
    <h2>{{$store.state.counter}}</h2>
    <!-- <h2>{{data}}</h2> -->
    <div v-for="item in data.data" :key="item.zmanager_title">
      {{item.zmanager_title}}
      <div></div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'profile',
  components: {},
  data() {
    return {
      data: {}
    };
  },
  computed: {},
  watch: {},
  methods: {},
  created() {
    const that = this
    this.$request({
      url: '/circle/Circle/lastestNews',
      data: {page: 1, userId: 3454}
    }).then(res => {
      that.data = res;
      res.data.forEach(element => {
        console.log(element.zmanager_title);
        
      });
    }).catch(err => {
      console.log(err);
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

</style>