<template>
  <div class="bottom">
    <div class="left">
      <img src="" alt="" />
      <p>电话：0755-84860840</p>
      <p>
        Copyright@2018橙智科技(深圳有限公司)&nbsp&nbsp|&nbsp&nbsp粤ICP18037294号
      </p>
    </div>
    <div class="right">
      <span>关于我们</span> <span>招聘</span>
      <div class="erweima"></div>
    </div>
  </div>
</template>
<script>
export default {
  data: () => {}
};
</script>
<style lang="scss" scoped>
.bottom {
  box-sizing: border-box;
  width: 100%;
  height: 200px;
  background: url() no-repeat;
  padding: 40px 300px 240px;
  display: flex;
  .left {
    flex: 7;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .right {
    flex: 1;
    display: flex;
    justify-content: center;
    align-items: center;
    .erweima {
      width: 88px;
      height: 88px;
      border: 1px solid #000;
    }
  }
}
</style>
