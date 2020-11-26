import Vue from 'vue'
import App from './App.vue'

Vue.config.productionTip = false

function mount(container, props) {
  return new Vue({
    render: h => h(App, { props }),
  }).$mount(container)
}

export function bootstrap(container, props) {
  return mount(container, props)
}

if (process.env.NODE_ENV === 'development') {
  mount('#app')
}
