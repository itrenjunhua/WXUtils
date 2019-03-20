// components/pageStatusView/pageStatusView.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    marginTop: {
      type: Number,
      value: 360
    },

    // 页面状态值   0：加载中  1：显示内容 2：空页面 3：网络错误 4：加载异常/错误
    pageStatusValue: {
      type: Number,
      value: 0
    },

    // 加载中数据
    loadingImage: {
      type: String,
      value: '/images/content_loading_page.gif'
    },
    loadingText: {
      type: String,
      value: '努力加载中...'
    },

    // 空页面数据
    emptyImage: {
      type: String,
      value: '/images/content_empty_page.png'
    },
    emptyText: {
      type: String,
      value: '暂时没有内容~'
    },

    // 网络错误数据
    netWorkImage: {
      type: String,
      value: '/images/content_empty_page.png'
    },
    netWorkText: {
      type: String,
      value: '网络连接异常'
    },

    // 加载异常/错误数据
    errorImage: {
      type: String,
      value: '/images/content_empty_page.png'
    },
    errorText: {
      type: String,
      value: '加载失败了..'
    },
  },

  /**
   * 组件的初始数据
   */
  data: {

  },

  /**
   * 组件的方法列表
   */
  methods: {

  }
})