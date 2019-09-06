// components/treeView.js
Component({
  properties: {
    model: {
      type: Object,
      value: {}
    },
    selectedItem: {
      type: Object,
      value: {}
    },
  },

  data: {
    open: true,
    isBranch: false,
  },

  methods: {
    // 更新数据
    refreshData: function() {
      // 修改数据，以达到重新渲染界面效果
      this.setData({
        isBranch:true,
        isBranch: false
      })
      this.setData({
        isBranch: Boolean(this.data.model.nodes && this.data.model.nodes.length),
      });
    },

    toggle: function(e) {
      if (this.data.isBranch) {
        this.setData({
          open: !this.data.open,
        })
      }
    },

    tapItem: function(e) {
      var that = this
      var item = e.currentTarget.dataset.item;
      this.triggerEvent('tapitem', {
        item: item,
        isBranch: that.data.isBranch
      }, {
        bubbles: true,
        composed: true
      });
    }
  },

  ready: function(e) {
    this.setData({
      isBranch: Boolean(this.data.model.nodes && this.data.model.nodes.length),
    });
  },
})