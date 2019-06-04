
import { createLocalVue } from '@vue/test-utils';

import install from '@/install';

describe('install', () => {
    let localVue;

    beforeEach(() => {
        localVue = createLocalVue();
    });

    test('localForage installed', () => {
        localVue.use(install);

        expect(localVue.$localForage).toBeDefined();
    });

    test('instances using `storeName`', () => {
        localVue.use(install, {
            instances: [
                {
                    storeName: 'instanceStoreName'
                }
            ]
        });

        expect(localVue.$localForage).toBeDefined();
        expect(localVue.$localForage.instanceStoreName).toBeDefined();
    });

    test('instances using `name`', () => {
        localVue.use(install, {
            instances: [
                {
                    name: 'instanceName'
                }
            ]
        });

        expect(localVue.$localForage).toBeDefined();
        expect(localVue.$localForage.instanceName).toBeDefined();
    });

    test('multiple instances', () => {
        localVue.use(install, {
            instances: [
                {
                    storeName: 'instanceStoreName'
                },
                {
                    name: 'instanceName'
                }
            ]
        });

        expect(localVue.$localForage).toBeDefined();
        expect(localVue.$localForage.instanceStoreName).toBeDefined();
        expect(localVue.$localForage.instanceName).toBeDefined();
    });

    test('ignore instance without `storeName` or `name`', () => {
        localVue.use(install, { instances: [{}] });

        expect(localVue.$localForage).toBeDefined();
    });
});
