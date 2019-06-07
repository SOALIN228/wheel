class Sticky {
  constructor (selector, n) {
    this.elements = $(selector)
    this.offset = n || 0
    this.addPlaceholder()
    this.cacheOffsets()
    this.listenToScroll()
  }

  addPlaceholder () {
    this.elements.each((index, element) => {
      $(element).wrap('<div class="topbarPlaceholder"></div>')
      $(element).parent().height($(element).height())
    })
  }

  cacheOffsets () {
    this.offsets = []
    this.elements.each((index, element) => {
      this.offsets[index] = $(element).offset()
    })
  }

  listenToScroll () {
    $(window).on('scroll', () => {
      let scrollY = window.scrollY
      this.elements.each((index, element) => {
        let $element = $(element)
        if (scrollY + this.offset > this.offsets[index].top) {
          $element.addClass('sticky')
            .css({top: this.offset})
        } else {
          $element.removeClass('sticky')
        }
      })
    })
  }
}

new Sticky('#topbar')
new Sticky('button', 60)
