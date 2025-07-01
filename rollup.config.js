import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';
import copy from 'rollup-plugin-copy';

export default {
  input: 'src/index.js',
  output: [
    {
      file: 'dist/index.js',
      format: 'cjs',
      sourcemap: true
    },
    {
      file: 'dist/index.esm.js',
      format: 'esm',
      sourcemap: true
    }
  ],
  plugins: [
    peerDepsExternal(),
    resolve({
      browser: true
    }),
    commonjs(),
    postcss({
      extract: 'styles.css',
      minimize: true,
      modules: {
        generateScopedName: '[name]__[local]___[hash:base64:5]'
      }
    }),
    copy({
      targets: [
        { src: 'lib/**/*', dest: 'dist/lib' },
        { src: 'README.md', dest: 'dist' }
      ]
    })
  ],
  external: ['react', 'react-dom', 'react-router-dom']
};