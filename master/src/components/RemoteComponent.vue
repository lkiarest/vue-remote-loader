<template>
  <div>
    <div ref="container"></div>
  </div>
</template>

<script>
import ModuleLoader from '../utils/module-loader'
const APP_LOADER_NAME = '__REMOTE_LOADED_APP__'

const mloader = new ModuleLoader()

export default {
  props: {
    url: String,
  },
  mounted () {
    this.$nextTick(() => {
      this.loadComponent()
    })
  },
  beforeDestroy () {
    if (this.vm && this.vm.$destroy) {
      this.vm.$destroy()
    }
  },
  methods: {
    loadComponent () {
      mloader.load(this.url).then(code => {
        if (!code) {
          return
        }

        try {
          const module = eval(code)
          if (module && module.bootstrap && typeof module.bootstrap === 'function') {
            this.vm = module.bootstrap(this.$refs.container, this.$attrs)
          } else if (window[APP_LOADER_NAME]) {
            this.vm = window[APP_LOADER_NAME].bootstrap(this.$refs.container, this.$attrs)
          }
        } catch (e) {
          console.error(e)
          console.error('未找到应用入口')
        }
      })
    }
  }
}
</script>
