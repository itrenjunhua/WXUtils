// components/dialog/dialog.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    title: {
      type: String,
      value: '弹框标题'
    },
    image: {
      type: String,
      value: '../../images/open_success.png'
    },
    content: {
      type: String,
      value: '内容'
    },
    cancelText: {
      type: String,
      value: '取消'
    },
    okText: {
      type: String,
      value: '确定'
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    isShow: false
  },

  /**
   * 组件的方法列表
   */
  methods: {
    show: function() {
      this.setData({
        isShow: true
      })
    },
    close: function() {
      this.setData({
        isShow: false
      })
    },
    _cancelEvent: function() {
      this.triggerEvent('cancelEvent');
    },
    _okEvent: function() {
      this.triggerEvent('okEvent');
    },
  }
})