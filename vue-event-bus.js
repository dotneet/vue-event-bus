;(function () {

	var vueEventBus = {}
  vueEventBus.config = {name: '$bus'}
  vueEventBus.install = function (Vue, options) {
		if (options && 'name' in options && options.name) {
			vueEventBus.config.name = options.name
		}
    var bus = new Vue({})
		Object.defineProperty(Vue.prototype, vueEventBus.config.name, {
			get: function () {
				return bus
			}
		})
  }

  if (typeof exports == "object") {
    module.exports = vueEventBus
  } else if (typeof define == "function" && define.amd) {
    define([], function(){ return vueEventBus })
  } else if (window.Vue) {
    window.VueEventBus = vueEventBus
    Vue.use(VueEventBus)
  }

})()

