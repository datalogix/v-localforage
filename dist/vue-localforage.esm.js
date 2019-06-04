import localForage from 'localforage';

var install = (Vue, options = {}) => {
    Vue.$localForage = localForage.createInstance(options);
    Vue.prototype.$localForage = Vue.$localForage;

    if (!options.instances) {
        return;
    }

    for (const instance of options.instances) {
        const name = instance.storeName || instance.name;

        if (!name) {
            continue;
        }

        Vue.$localForage[name] = localForage.createInstance(instance);
        Vue.prototype.$localForage[name] = Vue.$localForage[name];
    }
};

const VueLocalForage = {
    install
};

/* eslint-disable no-undef */
/* istanbul ignore next */
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(VueLocalForage);
}

export default VueLocalForage;
