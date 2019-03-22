function verifyFn(str, That) {
  console.log(str);
  switch (str) {
    //验证昵称
    case "nickname":
      if (/^[a-zA-Z\u4e00-\u9fa5]+$/.test(That.nickname)) {
        That.hint.nickname = "";
      } else {
        That.hint.nickname = "仅支持中英文输入";
      }
      break;
    //验证手机号码
    case "phone":
      if (/^1[34578]\d{9}$/.test(That.phone)) {
        That.hint.phone = "";
        That.styles.setProperty("--btnColor", "rgba(255, 119, 62, 1)");
      } else {
        That.hint.phone = "手机号码有误";
      }
      break;
    //验证企业名称
    case "companyName":
      if (/^[a-zA-Z\u4e00-\u9fa5]+$/.test(That.companyName)) {
        That.hint.companyName = "";
      } else {
        That.hint.companyName = "仅支持中英文输入";
      }
      break;
    default:
      return;
  }
}

class Hint {
  constructor() {
    this.icon = -1;
    this.message = "";
  }
}
export { Hint, verifyFn };
