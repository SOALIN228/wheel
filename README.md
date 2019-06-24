# wheel
造几个简单的轮子
## 造轮子的原则
内部(分层原则): 遵循正交元素(每一层只做自己该做的事，如:尽量不要用 JS 来设置 CSS的属性，只用 JS 来添加、移除类)

外部(封装原则): 面向接口编程(思考其他人在调用时，要传什么参数最方便)



## 别人的轮子

**标准库的扩充**

underscore.js 扩充了 Array 和 Object 相关 API

moment.js 扩充了 Date

**DOM 的扩充**

jQuery.js 操作 DOM

video.js 操作 video

Fabric.js 操作 canvas

**UI 组件**

纯 CSS 的 UI 组件库，如 Bulma  https://bulma.io/

大而全的 UI 框架（CSS + JS），如 Bootstrap、Element UI

**垂直领域的 UI 组件**

专门做轮播的 Swiper http://idangero.us/swiper/demos/

专门做输入提示的 typeahead.js https://twitter.github.io/typeahead.js/

专门做文件上传的 fine-uploader

专门做 3D 瓦片效果的 vanilla-tilt.js https://micku7zu.github.io/vanilla-tilt.js/

专门做视差效果的 parallax.js  http://matthew.wagerfield.com/parallax/

专门做数据可视化的 D3.js http://mbostock.github.io/d3/talk/20111116/airports.html

专门做图表的 echarts.js

专门做动画的 velocity.js

专门做粒子效果的 particle.js

专门做手势识别的 hammer.js



## Tabs

**遇到的问题**:直接使用 tabs 元素来查找，在使用多个 tabs 元素的时候，只会选中第一个 tabs 后面的 tabs 永远不会被选中

**解决办法**: 使用 `closest()` 选择距离元素最近的 tabs 元素，然后再找其子元素



## Sticky

**遇到的问题**:使用 fixed 做粘性导航，添加 sticky 后会将原来的位置空出来，这样下面的元素就会跑到上面去

**解决办法**:通过 js 动态生成一个wrapper 站住位置



## Dialog

**学到的技巧**: 使用 get template () 可以在对象中生成 this.template



## Suggestion

**遇到的问题**：搜索时用户每次输入都会执行一次，这样在用户快速输入的时候，用户体验很差

**解决办法**:使用函数节流，如果用户在一段时间内连续输入，则只执行最后一次操作

自己实现的节流

```javascript
bindEvents () {
  let timerId
  this.$input.on('input', (e) => { // 函数节流
    if (timerId) {
      window.clearTimeout(timerId)
    }
    timerId = setTimeout(() => {
      this.search(e.currentTarget.value)
      timerId = undefined
    }, 1000)
  })
}
```

调用 underscore.js 库实现节流

```javascript
bindEvents () {
  let lazySearch = _.debounce(this.search.bind(this), 300) // 函数节流
  this.$input.on('input', (e) => {
  	lazySearch(e.currentTarget.value)
  })
}
```



## Slide

注意暴露的接口设计就好，多看优秀的轮子是怎么设计的
