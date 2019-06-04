# @storage-js/vue-localforage

[![NPM Version](https://img.shields.io/npm/v/@storage-js/vue-localforage.svg)](https://www.npmjs.com/package/@storage-js/vue-localforage)
[![Downloads](https://img.shields.io/npm/dt/@storage-js/vue-localforage.svg)](https://www.npmjs.com/package/@storage-js/vue-localforage)
[![MIT License](https://img.shields.io/npm/l/@storage-js/vue-localforage.svg)](LICENSE)

[![Build Status](https://travis-ci.org/storage-js/vue-localforage.svg?branch=master)](https://travis-ci.org/storage-js/vue-localforage)
[![Build status](https://ci.appveyor.com/api/projects/status/dy8i5evw1iah5lkj/branch/master?svg=true)](https://ci.appveyor.com/project/cknow/vue-localforage/branch/master)
[![Coverage Status](https://coveralls.io/repos/github/storage-js/vue-localforage/badge.svg?branch=master)](https://coveralls.io/github/storage-js/vue-localforage?branch=master)

[![Code Climate](https://codeclimate.com/github/storage-js/vue-localforage/badges/gpa.svg)](https://codeclimate.com/github/storage-js/vue-localforage)
[![Test Coverage](https://codeclimate.com/github/storage-js/vue-localforage/badges/coverage.svg)](https://codeclimate.com/github/storage-js/vue-localforage/coverage)
[![Issue Count](https://codeclimate.com/github/storage-js/vue-localforage/badges/issue_count.svg)](https://codeclimate.com/github/storage-js/vue-localforage)

[![Dependencies Status](https://david-dm.org/storage-js/vue-localforage/status.svg)](https://david-dm.org/storage-js/vue-localforage)
[![devDependencies Status](https://david-dm.org/storage-js/vue-localforage/dev-status.svg)](https://david-dm.org/storage-js/vue-localforage?type=dev)
[![peerDependencies Status](https://david-dm.org/storage-js/vue-localforage/peer-status.svg)](https://david-dm.org/storage-js/vue-localforage?type=peer)

[![Semantic Release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)
[![Average time to resolve an issue](http://isitmaintained.com/badge/resolution/storage-js/vue-localforage.svg)](http://isitmaintained.com/project/storage-js/vue-localforage)
[![Percentage of issues still open](http://isitmaintained.com/badge/open/storage-js/vue-localforage.svg)](http://isitmaintained.com/project/storage-js/vue-localforage)
[![Gitter](https://badges.gitter.im/storage-js/vue-localforage.svg)](https://gitter.im/storage-js/vue-localforage?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge)

> A plugin wrapped from [localForage](https://github.com/localForage/localForage) for Vue.js.

## Installation

### Install using npm

```bash
# install it via npm
npm install @storage-js/vue-localforage --save
```

### Install using yarn

```bash
# install it via yarn
yarn add @storage-js/vue-localforage
```

### Direct usage with html

```html
<!-- insert the vue core before it -->
<script src="https://unpkg.com/@storage-js/vue-localforage"></script>
```

## Usage

```js
// register the plugin on vue
import VueLocalforage from '@storage-js/vue-localforage';

Vue.use(VueLocalforage);

// you can also pass options, check options reference below
Vue.use(VueLocalforage, Options);
```

### Get item

```js
let item = await this.$localForage.getItem(key)
```

### Set item

```js
await this.$localForage.setItem(key, value)
```

### Remove item

```js
await this.$localForage.removeItem(key)
```

### Clear

```js
await this.$localForage.clear()
```

### Gets the length

```js
let length = await this.$localForage.length()
```

### Get the name of a key based on its ID

```js
let k = await this.$localForage.key(keyIndex)
```

### Get the list of all keys

```js
let keys = await this.$localForage.keys()
```

[More informations on LocalForage documentation](https://localforage.github.io/localForage/#data-api)

## Advanced Usage

You can register multiple instances, see below:

```js
Vue.use(VueLocalforage, {
    instances: [
        {
            storeName: 'instance1'
        },

        {
            storeName: 'instance2'
        }
    ]
});

// for instance1
await this.$localForage.instance1.setItem(key, value)

// for instance2
await this.$localForage.instance2.setItem(key, value)
```

## Options

### `instances` (optional)

- Default: `[]`

You can create multiple instances.

### `driver` (optional)

- Default: `[localforage.INDEXEDDB, localforage.WEBSQL, localforage.LOCALSTORAGE]`

The preferred driver(s) to use.

### `name` (optional)

- Default: `localforage`

The name of the database.

### `size` (optional)

- Default: `4980736`

The size of the database in bytes.

### `storeName` (optional)

- Default: `keyvaluepairs`

The name of the datastore.

### `version` (optional)

- Default: `1.0`

The schema version of your database.

### `description` (optional)

- Default: `''`

A description of the database.

[More informations on LocalForage documentation](https://localforage.github.io/localForage/#settings-api-config)

## License

[MIT License](./LICENSE)

### Contributors

- [Ricardo Gobbo de Souza](https://github.com/ricardogobbosouza)
