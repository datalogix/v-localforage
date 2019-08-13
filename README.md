# v-localforage

[![Version](https://img.shields.io/npm/v/v-localforage.svg)](https://www.npmjs.com/package/v-localforage)
[![Downloads](https://img.shields.io/npm/dt/v-localforage.svg)](https://www.npmjs.com/package/v-localforage)
[![Build Status](https://img.shields.io/travis/ricardogobbosouza/v-localforage)](https://travis-ci.org/ricardogobbosouza/v-localforage)
[![Codecov](https://img.shields.io/codecov/c/github/ricardogobbosouza/v-localforage)](https://codecov.io/gh/ricardogobbosouza/v-localforage)
[![License](https://img.shields.io/npm/l/v-localforage.svg)](LICENSE)

> A plugin wrapped from [localForage](https://github.com/localForage/localForage) for Vue.js.

## Installation

### Install using npm

```bash
# install it via npm
npm install v-localforage --save
```

### Install using yarn

```bash
# install it via yarn
yarn add v-localforage
```

### Direct usage with html

```html
<!-- insert the vue core before it -->
<script src="https://unpkg.com/v-localforage"></script>
```

## Usage

```js
// register the plugin on vue
import VueLocalforage from 'v-localforage'

Vue.use(VueLocalforage)

// you can also pass options, check options reference below
Vue.use(VueLocalforage, Options)
```

### Get item

```js
let item = await this.$localforage.getItem(key)
```

### Set item

```js
await this.$localforage.setItem(key, value)
```

### Remove item

```js
await this.$localforage.removeItem(key)
```

### Clear

```js
await this.$localforage.clear()
```

### Gets the length

```js
let length = await this.$localforage.length()
```

### Get the name of a key based on its ID

```js
let k = await this.$localforage.key(keyIndex)
```

### Get the list of all keys

```js
let keys = await this.$localforage.keys()
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
})

// for instance1
await this.$localforage.instance1.setItem(key, value)

// for instance2
await this.$localforage.instance2.setItem(key, value)
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
