<template>
  <div>
    <h2>{{$store.state.counter}}</h2>
    <h2>平方:{{$store.getters.powerCounter}}</h2>
    <button @click="cartAdd">+</button>
    <button @click="cartReduce">-</button>
  </div>
</template>

<script>

export default {
  name: 'cart',
  components: {},
  data() {
    return {

    };
  },
  computed: {},
  watch: {},
  methods: {
    cartAdd() {
      this.$store.commit('add');
    },
    cartReduce() {
      this.$store.commit('reduce');
    }
  },
  created() {},
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