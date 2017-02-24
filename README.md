# vue-event-bus

## Install

```
var VueEventBus = require('vue-event-bus')
Vue.use(VueEventBus)
```

## Usage

```
new Vue({
  created: function () {
    this.$bus.$on('event', function () { console.log('event is received.') })
    this.$bus.$emit('event')
  }
})
```

## License

MIT

