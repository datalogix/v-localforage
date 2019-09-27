import buble from 'rollup-plugin-buble'
import resolve from 'rollup-plugin-node-resolve'
import commonjs from 'rollup-plugin-commonjs'
import { uglify } from 'rollup-plugin-uglify'
import pkg from './package.json'

export default [
  {
    input: 'src/index.js',
    external: ['localforage'],
    output: [
      { file: pkg.main, format: 'cjs' },
      { file: pkg.module, format: 'es' }
    ]
  },
  {
    input: 'src/index.js',
    output: {
      name: pkg.name,
      file: pkg.browser,
      format: 'umd'
    },
    plugins: [
      buble({
        objectAssign: 'Object.assign',
        transforms: {
          dangerousForOf: true
        }
      }),
      resolve(),
      commonjs()
    ]
  },
  {
    input: 'src/index.js',
    output: {
      name: pkg.name,
      file: pkg.browser.replace('.js', '.min.js'),
      format: 'umd'
    },
    plugins: [
      buble({
        objectAssign: 'Object.assign',
        transforms: {
          dangerousForOf: true
        }
      }),
      resolve(),
      commonjs(),
      uglify()
    ]
  }
]
