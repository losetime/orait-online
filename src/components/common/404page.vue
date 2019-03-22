<template>
  <div class="notFound-wrap">
    <div class="l-anmition-wrap">
      <div class="font-wrap"><i class="iconfont icon-fankuisss"></i></div>
      <div class="big-circle">
        <div class="center-circle">
          <div class="small-circle"><div class="mini-circle"></div></div>
        </div>
      </div>
    </div>
    <div class="r-hint-wrap">
      <p>404</p>
      <p>抱歉，您访问的页面不存在</p>
      <p>返回首页</p>
    </div>
  </div>
</template>
<script>
export default {};
</script>
<style lang="scss" scoped>
.notFound-wrap {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 800px;
}
.l-anmition-wrap {
  position: relative;
  width: 500px;
  height: 500px;
  .font-wrap {
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    margin: auto;
    z-index: 100;
    width: 80px;
    height: 80px;
    line-height: 80px;
    text-align: center;
    .iconfont {
      color: #fa8c16;
      font-size: 80px;
    }
  }
  .big-circle,
  .center-circle,
  .small-circle,
  .mini-circle {
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    animation: circle-opacity 2s infinite;
    animation-direction: alternate;
    animation-timing-function: ease-in-out;
  }
  .big-circle {
    width: 500px;
    height: 500px;
    background: #fff7e6;
  }
  .center-circle {
    width: 438px;
    height: 438px;
    background: #ffeecf;
  }
  .small-circle {
    width: 338px;
    height: 338px;
    background: #ffe9c2;
  }
  .mini-circle {
    position: relative;
    width: 239px;
    height: 239px;
    background: #ffd08c;
  }
  @keyframes circle-opacity {
    from {
      opacity: 0;
      transform: scale(0);
    }
    to {
      opacity: 1;
      transform: scale(1);
    }
  }
}
.r-hint-wrap {
  p:nth-child(1) {
    font-size: 90px;
    color: #554843;
  }
  p:nth-child(2) {
    font-size: 24px;
    color: #9a8c87;
  }
  p:nth-child(3) {
    margin-top: 20px;
    width: 240px;
    height: 60px;
    text-align: center;
    line-height: 60px;
    border: 1px solid #fa8c16;
    border-radius: 30px;
    font-size: 24px;
    color: #fa8c16;
    cursor: pointer;
  }
}
</style>
