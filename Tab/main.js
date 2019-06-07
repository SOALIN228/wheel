// ES5
// function Tabs (selector) {
//   this.elements = $(selector)
//   this.init()
//   this.bindEvents()
// }
//
// Tabs.prototype.init = function () {
//   this.elements.each(function (index, element) {
//     $(element).children('.tabs-bar').children('li').eq(0).addClass('active')
//     $(element).children('.tabs-content').children('li').eq(0).addClass('active')
//   })
// }
//
// Tabs.prototype.bindEvents = function () {
//   this.elements.on('click', '.tabs-bar > li', function (e) {
//     let $li = $(e.currentTarget)
//     $li.addClass('active').siblings().removeClass('active')
//     let $index = $li.index()
//     let $content = $li.closest('.tabs').find('.tabs-content > li').eq($index)
//     $content.addClass('active').siblings().removeClass('active')
//   })
// }

// ES6
class Tabs {
  constructor (selector) {
    this.elements = $(selector)
    this.init()
    this.bindEvents()
  }

  init () {
    this.elements.each(function (index, element) {
      $(element).children('.tabs-bar').children('li').eq(0).addClass('active')
      $(element).children('.tabs-content').children('li').eq(0).addClass('active')
    })
  }

  bindEvents () {
    this.elements.on('click', '.tabs-bar > li', function (e) {
      let $li = $(e.currentTarget)
      $li.addClass('active').siblings().removeClass('active')
      let $index = $li.index()
      let $content = $li.closest('.tabs').find('.tabs-content > li').eq($index)
      $content.addClass('active').siblings().removeClass('active')
    })
  }
}

let tabs = new Tabs('.tabs')
