import { createLocalVue } from '@vue/test-utils'

import VueLocalforage from '@/'

describe('v-localforage', () => {
  let localVue

  beforeEach(() => {
    localVue = createLocalVue()
  })

  test('installed', () => {
    localVue.use(VueLocalforage)

    expect(localVue.$localforage).toBeDefined()
  })

  test('instances using `storeName`', () => {
    localVue.use(VueLocalforage, {
      instances: [
        {
          storeName: 'instanceStoreName'
        }
      ]
    })

    expect(localVue.$localforage).toBeDefined()
    expect(localVue.$localforage.instanceStoreName).toBeDefined()
  })

  test('instances using `name`', () => {
    localVue.use(VueLocalforage, {
      instances: [
        {
          name: 'instanceName'
        }
      ]
    })

    expect(localVue.$localforage).toBeDefined()
    expect(localVue.$localforage.instanceName).toBeDefined()
  })

  test('multiple instances', () => {
    localVue.use(VueLocalforage, {
      instances: [
        {
          storeName: 'instanceStoreName'
        },
        {
          name: 'instanceName'
        }
      ]
    })

    expect(localVue.$localforage).toBeDefined()
    expect(localVue.$localforage.instanceStoreName).toBeDefined()
    expect(localVue.$localforage.instanceName).toBeDefined()
  })

  test('ignore instance without `storeName` or `name`', () => {
    localVue.use(VueLocalforage, { instances: [{}] })

    expect(localVue.$localforage).toBeDefined()
  })
})
