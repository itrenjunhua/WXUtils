// 数字处理工具类
const stringUtil = require('/StringUtil.js')

/**
 * 金额处理，保留2位小数
 */
function returnMoney(value, defaultValue) {
  if (stringUtil.isEmpty(value + "")) return defaultValue

  var value = parseFloat(value) * 100 / 100;
  var xsd = value.toString().split(".");
  if (xsd.length == 1) {
    value = value.toString() + ".00";
    return value;
  }
  if (xsd.length > 1) {
    if (xsd[1].length < 2) {
      value = value.toString() + "0";
    } else if (xsd[1].length > 2) {
      value = xsd[0] + "." + xsd[1].substring(0, 2)
    }
    return value;
  }
}


module.exports = {
  // 金额处理，保留2位小数
  returnMoney: returnMoney,
}