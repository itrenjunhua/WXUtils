/**
 * 用于判断空，Undefined String Array Object
 */
function isEmpty(str) {
  if (Object.prototype.toString.call(str) === '[object Undefined]') { //空
    return true
  } else if (str == null || str == 'null') {
    return true
  } else if (
    Object.prototype.toString.call(str) === '[object String]' ||
    Object.prototype.toString.call(str) === '[object Array]') { //字条串或数组
    return str.length == 0 ? true : false
  } else if (Object.prototype.toString.call(str) === '[object Object]') {
    return JSON.stringify(str) == '{}' ? true : false
  } else {
    return true
  }
}

/**
 * 判断多个字符串是否为 null，只要有一个为 null，就返回 true
 */
function isEmptys() {
  if (arguments == null || arguments.length <= 0)
    return true

  for (var i = 0; i < arguments.length; i++) {
    if (isEmpty(arguments[i])) {
      return true
    }
  }
  return false
}


/**
 * 处理空字符串
 */
function handlerString(msg) {
  if (msg == null || isEmpty(msg))
    return ""


  if (Object.prototype.toString.call(msg) === '[object String]') {
    return msg.length == 0 ? "" : msg
  }

  return ""
}

/**
 * 处理多个空字符串
 */
function handlerStrings() {
  if (arguments == null || arguments.length <= 0)
    return ""

  var result = ""
  for (var i = 0; i < arguments.length; i++) {
    result += handlerString(arguments[i])
  }

  return result
}

/**
 * 替换字符串
 */
function replace(oldStr, oldChar, newChar) {
  if (oldStr == null || isEmpty(oldStr))
    return ""

  return oldStr.replace(oldChar, newChar)
}

module.exports = {
  // 用于判断空，Undefined String Array Object
  isEmpty: isEmpty,
  // 判断多个字符串是否为 null，只要有一个为 null，就返回 true
  isEmptys: isEmptys,
  // 处理空字符串
  handlerString: handlerString,
  // 处理多个空字符串，并安顺序连接
  handlerStrings: handlerStrings,
  // 替换字符串
  replace: replace,
}