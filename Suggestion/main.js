class Suggestion {
  constructor (options) {
    this.options = options
    this.$input = $(options.input)
    this.$input.wrap('<div class="soalinSuggestion"></div>') // input 外包一层
    this.$wrapper = this.$input.parent()

    // 创建搜索提示列表、生成提示信息
    this.$ol = $('<ol class="soalinSuggestion-list"></ol>')
    this.$input.after(this.$ol)
    this.$loading = $('<div class="soalinSuggestion-loading"></div>')
    this.$loading.html(this.options.loadingTemplate)
    this.$empty = $('<div class="soalinSuggestion-empty"></div>')
    this.$empty.html(this.options.emptyTemplate)
    // 插入提示信息
    this.$ol.after(this.$loading)
    this.$ol.after(this.$empty)
    this.bindEvents()
  }

  bindEvents () {
    //  let timerId
    let lazySearch = _.debounce(this.search.bind(this), 300) // 函数节流
    this.$input.on('input', (e) => {
      lazySearch(e.currentTarget.value)
      // if (timerId) {
      //   window.clearTimeout(timerId)
      // }
      // timerId = setTimeout(() => {
      //   this.search(e.currentTarget.value)
      //   timerId = undefined
      // }, 1000)
    })
  }

  search (keyword) {
    this.$wrapper.addClass('loading')
    this.$wrapper.removeClass('empty')
    this.options.search(keyword, (array) => {
      this.$ol.empty() // 搜索提示列表置空
      this.$wrapper.removeClass('loading') // 移除 loading

      if (!array || array.length === 0) { // 如果搜索为空，显示提示信息
        this.$wrapper.addClass('empty')
        return
      }

      array.map((text) => { // 插入搜索提示到列表
        this.$ol.append($('<li></li>').text(text))
      })
    })
  }
}

let s = new Suggestion({
  input: 'input',
  search (text, callback) {
    if (text === '') {
      return callback([])
    }
    let array = []
    for (let i = 0; i < 5; i++) { // 生成随机提示信息
      let n = parseInt(Math.random() * 100, 10)
      array.push(text + n)
    }
    setTimeout(() => callback(array), 300) // 0.3后显示随机提示信息
  },
  loadingTemplate: '加载中',
  emptyTemplate: '找不到啊'
})
