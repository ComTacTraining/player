import resolve from '@rollup/plugin-node-resolve'
import typescript from '@rollup/plugin-typescript'
// import { terser } from '@rollup/plugin-terser'
import dts from 'rollup-plugin-dts'
// import pkg from './package.json' assert { type: 'json' }
import { readFileSync } from 'fs'
const pkg = JSON.parse(readFileSync(new URL('./package.json', import.meta.url)))

const { module } = pkg

export default [
  {
    input: 'src/index.ts',
    // external: ['react-dom'],
    output: [
      {
        file: module,
        format: 'esm',
        sourcemap: true
      }
    ],
    plugins: [resolve(), typescript({ tsconfig: './tsconfig.json' })]
  },
  {
    input: 'dist/types/index.d.ts',
    output: [{ file: 'dist/index.d.ts', format: 'esm' }],
    plugins: [dts()]
  }
]
