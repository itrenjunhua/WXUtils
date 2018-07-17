# 微信小程序常用工具类

## 1.UIUtil.js 文件
主要包含与UI相关的工具方法

	module.exports = {
 		// 显示普通toast（没有任何图标）
  		showToast: showToast
	}

## 2.NetWorkUtil.js 文件
包含网络操作相关的工具方法

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
	
	    //--------------- 请求封装基本方法 ---------------//
	    requestNetWork: requestNetWork,
	}