class Dialog {
  constructor (options) {
    this.options = options
    this.init()
  }

  get template () {
    let { title, content } = this.options
    return `
      <div class="soalinDialog">
        <div class="soalinDialog-wrapper">
          <header class="soalinDialog-header">${title}</header>
          <main class="soalinDialog-main">${content}</main>
          <footer class="soalinDialog-footer"></footer>
        </div>
      </div>`
  }

  generateButtons () {
    let { buttons } = this.options
    let $buttons = buttons.map((buttonOptions) => {
      let $b = $('<button></button>')
      $b.text(buttonOptions.text)
      $b.on('click', buttonOptions.action)
      return $b
    })
    return $buttons
  }

  init () {
    let $dialog = $(this.template)
    $dialog.find('footer').append(this.generateButtons())
    $dialog.addClass(this.options.class)
    this.$dialog = $dialog
  }

  open () {
    $('body').append(this.$dialog)
  }

  close () {
    this.$dialog.detach()
  }
}

x.onclick = function () {
  let dialog = new Dialog({
    title: '标题',
    content: '<b>欢迎</b>',
    class: 'userDialog',
    buttons: [{
      text: '确定',
      action: function () {
        setTimeout(() => {
          dialog.close()
        })
      }
    }, {
      text: '取消',
      action: function () {
        setTimeout(() => {
          dialog.close()
        })
      }
    }]
  })
  dialog.open()
}
