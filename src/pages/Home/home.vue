<template>
  <div class="contain">
    <div class="item" v-for="item in dataList" :key="item">
      {{item}}
    </div>
  </div>
</template>

<script>

export default {
  name: 'home',
  components: {},
  data() {
    return {
      dataList: ['1', '2', '3', '4']
    };
  },
  computed: {},
  watch: {},
  methods: {},
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
  .contain {
    display: flex;
    flex-direction: row;
  }
  .item {
    flex: 1;
    text-align: center;
    background: red;
    padding: 5px;
    margin: 5px;
  }
</style>