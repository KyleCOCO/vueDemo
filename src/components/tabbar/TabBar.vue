<template>
  <div class="tab-bar">
    <slot></slot>
  </div>
</template>

<script>

export default {
  name: 'TabBar',
  components: {},
  data() {
    return {

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
  .tab-bar {
    background-color: #f6f6f6;
    display: flex;
    position: fixed;
    left: 0;
    right: 0;
    bottom: 0;
    box-shadow: 0 -1px 1px rgba(100, 100, 100, 0.1);
  }
  
</style>