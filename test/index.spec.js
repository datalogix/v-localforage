import VueLocalForage from '@/';

describe('module', () => {
    test('properties', () => {
        expect(VueLocalForage).toBeDefined();
        expect(VueLocalForage).toHaveProperty('install');
        expect(VueLocalForage.install).toBeInstanceOf(Function);
    });
});
