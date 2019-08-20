// 网路请求封装类
var uiUtil = require('/UIUtil.js')
const language = require('../language/LanguageUtil.js')

/**************** POST 请求  ******************/

// 不展示进度条的网络请求（POST）
// url:网络请求的url
// success:成功的回调函数
// fail：失败的回调
function postRequestBase(url, success, fail) {
  requestNetWork(url, 'POST', null, null, null, success, fail)
}

// 展示进度条的网络请求（POST）
// url:网络请求的url
// message:进度条的提示信息
// success:成功的回调函数
// fail：失败的回调
function postRequestLoadingBase(url, message, success, fail) {
  requestNetWork(url, 'POST', null, null, message, success, fail)
}

// 不展示进度条的网络请求（POST）
// url:网络请求的url
// params:请求参数
// success:成功的回调函数
// fail：失败的回调
function postRequestParams(url, params, success, fail) {
  requestNetWork(url, 'POST', null, params, null, success, fail)
}

// 展示进度条的网络请求（POST）
// url:网络请求的url
// params:请求参数
// message:进度条的提示信息
// success:成功的回调函数
// fail：失败的回调
function postRequestLoadingParams(url, params, message, success, fail) {
  requestNetWork(url, 'POST', null, params, message, success, fail)
}

// 不展示进度条的网络请求（POST）
// url:网络请求的url
// header:请求头
// success:成功的回调函数
// fail：失败的回调
function postRequestHeader(url, header, success, fail) {
  requestNetWork(url, 'POST', header, null, null, success, fail)
}

// 展示进度条的网络请求（POST）
// url:网络请求的url
// header:请求头
// message:进度条的提示信息
// success:成功的回调函数
// fail：失败的回调
function postRequestLoadingHeader(url, header, message, success, fail) {
  requestNetWork(url, 'POST', header, null, message, success, fail)
}

// 不展示进度条的网络请求（POST）
// url:网络请求的url
// header:请求头
// params:请求参数
// success:成功的回调函数
// fail：失败的回调

function postRequest(url, header, params, success, fail) {
  requestNetWork(url, 'POST', header, params, null, success, fail)
}

// 展示进度条的网络请求（POST）
// url:网络请求的url
// header:请求头
// params:请求参数
// message:进度条的提示信息
// success:成功的回调函数
// fail：失败的回调
function postRequestLoading(url, header, params, message, success, fail) {
  requestNetWork(url, 'POST', header, params, message, success, fail)
}

/*****************  GET 请求  *******************/

// 不展示进度条的网络请求（GET）
// url:网络请求的url
// success:成功的回调函数
// fail：失败的回调
function getRequestBase(url, success, fail) {
  requestNetWork(url, 'GET', null, null, null, success, fail)
}

// 展示进度条的网络请求（GET）
// url:网络请求的url
// message:进度条的提示信息
// success:成功的回调函数
// fail：失败的回调
function getRequestLoadingBase(url, message, success, fail) {
  requestNetWork(url, 'GET', null, null, message, success, fail)
}

// 不展示进度条的网络请求（GET）
// url:网络请求的url
// params:请求参数
// success:成功的回调函数
// fail：失败的回调
function getRequestParams(url, params, success, fail) {
  requestNetWork(url, 'GET', null, params, null, success, fail)
}

// 展示进度条的网络请求（GET）
// url:网络请求的url
// params:请求参数
// message:进度条的提示信息
// success:成功的回调函数
// fail：失败的回调
function getRequestLoadingParams(url, params, message, success, fail) {
  requestNetWork(url, 'GET', null, params, message, success, fail)
}

// 不展示进度条的网络请求（GET）
// url:网络请求的url
// header:请求头
// success:成功的回调函数
// fail：失败的回调
function getRequestHeader(url, header, success, fail) {
  requestNetWork(url, 'GET', header, null, null, success, fail)
}

// 展示进度条的网络请求（GET）
// url:网络请求的url
// header:请求头
// message:进度条的提示信息
// success:成功的回调函数
// fail：失败的回调
function getRequestLoadingHeader(url, header, message, success, fail) {
  requestNetWork(url, 'GET', header, null, message, success, fail)
}

// 不展示进度条的网络请求（GET）
// url:网络请求的url
// header:请求头
// params:请求参数
// success:成功的回调函数
// fail：失败的回调
function getRequest(url, header, params, success, fail) {
  requestNetWork(url, 'GET', header, params, null, success, fail)
}

// 展示进度条的网络请求（GET）
// url:网络请求的url
// header:请求头
// params:请求参数
// message:进度条的提示信息
// success:成功的回调函数
// fail：失败的回调
function getRequestLoading(url, header, params, message, success, fail) {
  requestNetWork(url, 'GET', header, params, message, success, fail)
}

/*****************  网络请求封装  *******************/

// 网络请求封装函数
// url:网络请求的url
// method:请求方式
// header:请求头
// params:请求参数
// message:进度条的提示信息
// successFunction:成功的回调函数
// failFunction:失败的回调
function requestNetWork(url, method, header, params, message, successFunction, failFunction) {
  // 是否有内容
  if (message != null && message.length > 0) {
    wx.showLoading({
      title: message,
    })
  }

  console.log("【start】=============  NetWork Request Start  =============【start】")
  console.log("Request Url: " + getApp().ApiServices.BASE_HTTP + url)

  var puslicHeader = {
    'content-type': 'application/json', // 默认值
    // 根据管理员sessionId判断是否为管理员操作
    "session_id": getApp().globalData.adminSessionId == null ? getApp().globalData.sessionId : getApp().globalData.adminSessionId
  }

  var resultHeader = connectJson(puslicHeader, header)

  console.log("【--- Request Header ---】")
  console.log(resultHeader)
  console.log("【--- Request Params ---】")
  console.log(params)


  wx.request({
    url: getApp().ApiServices.BASE_HTTP + url,
    method: method == null ? 'POST' : method,
    dataType: 'json',
    data: params == null ? {} : params,
    header: resultHeader,
    success: function(res) {
      console.log("【 Request NetWork Success: " + getApp().ApiServices.BASE_HTTP + url + "】")
      console.log(res.data)

      if (message != null && message.length > 0) {
        wx.hideLoading()
      }
      
      if (res.statusCode == 200) {
        if (res.data.status == 200) {
          successFunction(res.data.data)
        } else if (res.data.status == 503) {
          // 更新 sessionId 并重新获取数据
          // localLoginAndRequest(url, method, header, params, message, successFunction, failFunction)
          uiUtil.showToast(language.getLanguage().taostSessionIdException)
        } else {
          if (res.data.message != null) {
            uiUtil.showToast(res.data.message)
          }
        }
      } else {
        failFunction(res)
      }

    },
    fail: function(res) {
      console.log("【 Request NetWork Fail: " + getApp().ApiServices.BASE_HTTP + url + "】")
      console.log(res)

      wx.hideLoading()
      failFunction(res)
    },
    complete: function(res) {
      console.log("【end】=============  NetWork Request End  =============【end】")
    },
  })
}

/**
 * 合并2个json对象
 */
function connectJson(jsonbject1, jsonbject2) {
  var resultJsonObject = {};
  for (var attr in jsonbject1) {
    resultJsonObject[attr] = jsonbject1[attr];
  }
  for (var attr in jsonbject2) {
    resultJsonObject[attr] = jsonbject2[attr];
  }
  return resultJsonObject;
}

// 本地登录获取自定义 sessionId
function localLogin(successFunction, failFunction) {
  wx.login({
    success: function(res) {
      // 发送 res.code 到后台换取 openId, sessionKey, unionId
      postRequestLoadingBase(getApp().ApiServices.wxLogin + "?code=" + res.code + "&boxsId=" + getApp().globalData.boxsId,
        language.getLanguage().dialogLoading,
        function(data) {
          getApp().globalData.sessionId = data.sessionId
          if (getApp().globalData.model == 3) {
            getApp().globalData.bindInfo = data
          }
          getApp().globalData.count = 0
          successFunction(data)
        },
        function(data) {
          getApp().globalData.count = getApp().globalData.count + 1
          if (getApp().globalData.count > 5) {
            failFunction(data)
            return
          } else {
            localLogin(successFunction, failFunction)
          }
        })
    }
  })
}

// 本地登录获取自定义 sessionId，并且获取到 sessionId 之后重新请求获取数据
function localLoginAndRequest(url, method, header, params, message, successFunction, failFunction) {
  getApp().globalData.count = getApp().globalData.count + 1
  if (getApp().globalData.count > 5) {
    uiUtil.showToast(language.getLanguage().taostSessionIdException)
    return
  }

  wx.login({
    success: function(res) {
      // 发送 res.code 到后台换取 openId, sessionKey, unionId
      postRequestBase(getApp().ApiServices.localLogin + "?code=" + res.code, function(data) {
        console.log(data)
        getApp().globalData.sessionId = data.sessionId
        if (getApp().globalData.model == 3) {
          getApp().globalData.bindInfo = data
        }
        getApp().globalData.count = 0
        // 重新获取数据
        requestNetWork(url, method, header, params, message, successFunction, failFunction)
      }, function(data) {
        localLoginAndRequest(url, method, header, params, message, successFunction, failFunction)
      })
    }
  })
}

module.exports = {
  //----------【Start】 POST  请求 【Start】----------//

  // POST 请求：不显示进度框，无请求参数，无请求头
  postRequestBase: postRequestBase,
  // POST 请求：显示进度框，无请求参数，无请求头
  postRequestLoadingBase: postRequestLoadingBase,
  // POST 请求：不显示进度框，有请求参数，无请求头
  postRequestParams: postRequestParams,
  // POST 请求：显示进度框，有请求参数，无请求头
  postRequestLoadingParams: postRequestLoadingParams,
  // POST 请求：不显示进度框，无请求参数，有请求头
  postRequestHeader: postRequestHeader,
  // POST 请求：显示进度框，无请求参数，有请求头
  postRequestLoadingHeader: postRequestLoadingHeader,
  // POST 请求：不显示进度框，有请求参数，有请求头
  postRequest: postRequest,
  // POST 请求：显示进度框，有请求参数，有请求头
  postRequestLoading: postRequestLoading,

  //------------【End】 POST 请求 【End】------------//

  //----------【Start】 GET  请求 【Start】----------//

  // GET 请求：不显示进度框，无请求参数，无请求头
  getRequestBase: getRequestBase,
  // GET 请求：显示进度框，无请求参数，无请求头
  getRequestLoadingBase: getRequestLoadingBase,
  // GET 请求：不显示进度框，有请求参数，无请求头
  getRequestParams: getRequestParams,
  // GET 请求：显示进度框，有请求参数，无请求头
  getRequestLoadingParams: getRequestLoadingParams,
  // GET 请求：不显示进度框，无请求参数，有请求头
  getRequestHeader: getRequestHeader,
  // GET 请求：显示进度框，无请求参数，有请求头
  getRequestLoadingHeader: getRequestLoadingHeader,
  // GET 请求：不显示进度框，有请求参数，有请求头
  getRequest: getRequest,
  // GET 请求：显示进度框，有请求参数，有请求头
  getRequestLoading: getRequestLoading,

  //------------【End】 GET 请求 【End】------------//

  //----- 请求封装基本方法（可以不需要对外提供） -----//
  requestNetWork: requestNetWork,
  //----- 重新登录获取本地 sessionId -----//
  // 不需要再次访问获取数据接口
  localLogin: localLogin,
  // 获取新的 sessionId 并且重新获取数据
  localLoginAndRequest: localLoginAndRequest
}