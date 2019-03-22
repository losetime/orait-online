export default class Unit {
  //用于监听根页面的宽度和高度
  getwh(Thet) {
    let htmlDom = document.getElementsByTagName("html")[0];
    let htmlWidth =
      document.documentElement.clientWidth || document.body.clientWidth;
    let htmlHeight =
      document.documentElement.clientHeight || document.body.clientHeight;
    htmlDom.style.fontSize = htmlWidth / 100 + "px";
    Thet.$store.commit("gethtmlWidth", htmlWidth);
    Thet.$store.commit("gethtmlHeight", htmlHeight);
  }
}
