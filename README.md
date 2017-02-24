# vue-event-bus

vue-event-bus helps Vue components to communicate with each others.

## Install

```bash
npm install --save vue-event-bus
```

## Setup

```js
var VueEventBus = require('vue-event-bus')
Vue.use(VueEventBus)
```

## Usage

```js
new Vue({
  created: function () {
    this.$bus.$on('event', function () { console.log('event is received.') })
  }
})

new Vue({
  created: function () {
    this.$bus.$emit('event')
  }
})
```

## Options

If you want to change the name of bus you can use `name` option.

```
Vue.use(VueEventBus,{name:'$eventbus'})

new Vue({
  created: function () {
    this.$eventbus.$emit('event')
  }
})
```


## License

MIT

