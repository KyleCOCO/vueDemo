<template>
  <div>
    <tab-bar>
      <tab-bar-item path="/home" selecColor="red">
        <i slot="item-icon" class="iconfont icon-zhuye"></i>
        <i slot="item-icon-select" class="iconfont icon-zhuye-select"></i>
        <div slot="item-text">
          首页
        </div>
      </tab-bar-item>
      <tab-bar-item path="/category" selecColor="red">
        <i slot="item-icon" class="iconfont icon-fenlei"></i>
        <i slot="item-icon-select" class="iconfont icon-fenlei-select"></i>
        <div slot="item-text">
          分类
        </div>
      </tab-bar-item>
      <tab-bar-item path="/cart" selecColor="red">
        <i slot="item-icon" class="iconfont icon-gouwuche"></i>
        <i slot="item-icon-select" class="iconfont icon-gouwuche-select"></i>
        <div slot="item-text">
          购物车
        </div>
      </tab-bar-item>
      <tab-bar-item path="/profile" selecColor="red">
        <i slot="item-icon" class="iconfont icon-wode"></i>
        <i slot="item-icon-select" class="iconfont icon-wode-select"></i>
        <div slot="item-text">
          我的
        </div>
      </tab-bar-item>
    </tab-bar>
  </div>
</template>

<script>
import TabBar from './tabbar/TabBar'
import TabBarItem from './tabbar/TabBarItem'
export default {
  name: 'MainTabBar',
  components: {
    TabBar,
    TabBarItem
  },
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

</style>