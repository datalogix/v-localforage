import localForage from 'localforage';

export default (Vue, options = {}) => {
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
