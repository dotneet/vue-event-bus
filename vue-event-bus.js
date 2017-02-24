;(function () {

	var vueEventBus = {}
  vueEventBus.config = {name: '$bus'}
  vueEventBus.install = function (Vue, options) {
		if (options && 'name' in options && options.name) {
			vueEventBus.config.name = options.name
		}
    var v = new Vue({})
    var bus = {}
    bus.$on = function () { v.$on.apply(v, arguments) }
    bus.$off = function () { v.$off.apply(v, arguments) }
    bus.$emit = function () { v.$emit.apply(v, arguments) }
    bus.$once = function () { v.$once.apply(v, arguments) }
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

