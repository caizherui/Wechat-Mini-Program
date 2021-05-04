// component/tabs/tabs.js
Component({
  /**
   * 组件的属性列表
   */
  properties: {
    //要接收的数据的名称
    tabs:{
      type:Array,
      value:[]
    }
  },

  /**
   * 组件的初始数据
   */
  data: {
    
  },

  /**
   * 和页面有一定区别（必须存放在这里）
   */
  methods: {
    handleitemtap(e){
      //获取索引
      const {index}=e.currentTarget.dataset;
      //自定义事件
      this.triggerEvent("itemchange",{index});
      //最严谨的写法
      let tabs=JSON.parse(JSON.stringify(this.data.tabs));

      //不是很严谨的写法
      //let {tabs}=this.data;
      tabs.forEach((v,i)=>i===index?v.isActive=true:v.isActive=false)
      this.setData({
        tabs
      })
    }
  }
})
