# wheel
造几个简单的轮子
## Tabs
使用 `closest()` 选择距离元素最近的 tabs 元素，然后再找其子元素，而不要直接使用 tabs 来寻找其子元素

因为直接使用 tabs 元素来查找，在使用多个 tabs 元素的时候，只会选中第一个 tabs 后面的 tabs 永远不会被选中
