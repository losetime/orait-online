<template>
  <div class="hendleMenu-wrap">
    <p @click.stop="reName()">
      <i class="iconfont icon-zhongmingming"></i> <span>重命名</span>
    </p>
    <p @click.stop="del_file()">
      <i class="iconfont icon-huishouzhan"></i> <span>删除</span>
    </p>
  </div>
</template>
<script>
export default {
  methods: {
    reName() {},
    del_file() {}
  }
};
</script>
<style lang="scss" scoped>
.hendleMenu-wrap {
  width: 110px;
  box-shadow: 0px 0px 5px 2px rgba(0, 0, 0, 0.16);
  border-radius: 5px;
  background: #ffffff;
  i {
    font-size: 20px;
    margin: 0 10px 0 25px;
  }
  p {
    display: flex;
    align-items: center;
    height: 30px;
    cursor: pointer;
    &:hover {
      color: rgba(245, 126, 81, 1);
    }
  }
}
</style>
