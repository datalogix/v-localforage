import localforage from 'localforage'

const VueLocalforage = {
  install(Vue, options = {}) {
    Vue.$localforage = localforage.createInstance(options)
    Vue.prototype.$localforage = Vue.$localforage

    if (!options.instances) {
      return
    }

    for (const instance of options.instances) {
      const name = instance.storeName || instance.name

      if (!name) {
        continue
      }

      Vue.$localforage[name] = localforage.createInstance(instance)
      Vue.prototype.$localforage[name] = Vue.$localforage[name]
    }
  }
}

/* istanbul ignore next */
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueLocalforage)
}

export default VueLocalforage
