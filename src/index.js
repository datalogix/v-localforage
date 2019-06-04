import install from './install';

const VueLocalForage = {
    install
};

/* eslint-disable no-undef */
/* istanbul ignore next */
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(VueLocalForage);
}
/* eslint-enable no-undef */

export default VueLocalForage;
