<template>
  <div class="tab-bar-item" @click="itemclick">
    <div v-if="!isSelect">
      <slot name="item-icon"></slot>
    </div>
    <div v-else>
      <slot name="item-icon-select"></slot>
    </div>
    <div :style="selectStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>

export default {
  name: 'TabBarItem',
  props: {
    path: String,
    selecColor: {
      type: String,
      default: 'red'
    }
  },
  data() {
    return {
    };
  },
  computed: {
    isSelect() {
      // return this.$route.path === this.path
      return this.$route.path.indexOf(this.path) !== -1
    },
    selectStyle() {
      return this.isSelect ? {color: this.selecColor} : {}
    }
  },
  methods: {
    itemclick() {
      this.$router.replace(this.path);
    }
  }
}
</script>
<style scoped>
  .tab-bar-item {
    flex: 1;
    text-align: center;
    height: 49px;
    font-size: 14px;
  }
  .tab-bar-item i {
    font-size: 24px;
    margin-top: 3px;
    vertical-align: middle;
    margin-bottom: 2px;
  }
  .slect {
    color: #f00;
  }
</style>