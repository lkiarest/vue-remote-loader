export default class ModuleLoader {
  constructor () {
    this.requests = {}
    this.cached = {}
  }

  load (url) {
    if (!url) {
      console.warn('load modules failed: no url !')
      return Promise.resolve(null)
    }

    const { cached } = this
    if (cached[url]) {
      return Promise.resolve(cached[url])
    }

    return new Promise((resolve) => {
      const { requests } = this
      const running = requests[url] && requests[url].length > 0

      requests[url] = requests[url] || []
      requests[url].push(resolve)

      if (!running) {
        fetch(url).then(res => res.text()).catch((e) => {
          console.error(e)
          return ''
        }).then(text => {
          const callbacks = requests[url]
          if (callbacks && callbacks.length > 0) {
            callbacks.forEach(callback => callback(text))
            requests[url] = null
          }
        })
      }
    })
  }
}
