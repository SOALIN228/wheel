class Slide {
  constructor (options) {
    this.options = options
    this.$element = $(options.element)
    this.$element.addClass('soalinSlides')
    this.timer = undefined
    this.initHtml()
    this.bindEvents()
    this.go(0)
    if (this.options.autoPlay) {
      this.play()
    }
  }

  initHtml () { // 初始化
    // 获取图片宽度并添加到 style 中
    this.width = this.$element.children('ol').children('li').width()
    this.$element.width(this.width)
    // 添加按钮
    this.$prev = $('<button class="soalinSlides-prev">上一张</button>')
    this.$element.append(this.$prev)
    this.$next = $('<button class="soalinSlides-next">下一张</button>')
    this.$element.append(this.$next)
  }

  bindEvents () {
    this.$prev.on('click', () => this.prev())
    this.$next.on('click', () => this.next())
    this.$element.on('mouseenter', () => {
      this.stop()
    }).on('mouseleave', () => {
      this.play()
    })
  }

  go (index) { // 切换图片
    let $ol = this.$element.children('ol')
    let $items = $ol.children('li')
    if (index >= $items.length) {
      index = 0
    } else if (index < 0) {
      index = $items.length - 1
    }
    $ol.css({
      transform: `translateX(${-index * this.width}px)`
    })
    this.current = index
  }

  next () { // 下一张
    this.go(this.current + 1)
  }

  prev () { // 上一张
    this.go(this.current - 1)
  }

  play () { // 自动播放
    this.timer = setInterval(() => {
      this.go(this.current + 1)
    }, 2000)
  }

  stop () { // 停止播放
    window.clearInterval(this.timer)
  }
}

let slide = new Slide({
  element: '.slides',
  autoPlay: true,
  controls: false,
  pager: false
})
