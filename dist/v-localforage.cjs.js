'use strict';

function _interopDefault (ex) { return (ex && (typeof ex === 'object') && 'default' in ex) ? ex['default'] : ex; }

var localforage = _interopDefault(require('localforage'));

const VueLocalforage = {
  install(Vue, options = {}) {
    Vue.$localforage = localforage.createInstance(options);
    Vue.prototype.$localforage = Vue.$localforage;

    if (!options.instances) {
      return
    }

    for (const instance of options.instances) {
      const name = instance.storeName || instance.name;

      if (!name) {
        continue
      }

      Vue.$localforage[name] = localforage.createInstance(instance);
      Vue.prototype.$localforage[name] = Vue.$localforage[name];
    }
  }
};

/* istanbul ignore next */
if (typeof window !== 'undefined' && window.Vue) {
  window.Vue.use(VueLocalforage);
}

module.exports = VueLocalforage;
