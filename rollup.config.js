import typescript from 'rollup-plugin-typescript2';
import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import postcss from 'rollup-plugin-postcss';

const packageJson = require('./package.json');

export default {
  input: 'src/index.tsx', // Entry point of your library
  output: [
    {
      file: packageJson.main, // CJS output
      format: 'cjs',
      sourcemap: true,
    },
    {
      file: packageJson.module, // ESM output
      format: 'esm',
      sourcemap: true,
    },
  ],
  plugins: [
    peerDepsExternal(), // Exclude peer dependencies from the bundle
    resolve(), // Resolve node_modules
    commonjs(), // Convert CommonJS to ESModules
    typescript({ useTsconfigDeclarationDir: true }), // Compile TypeScript
    postcss({ extract: true }), // Process CSS
  ],
  external: [
    Object.keys(packageJson.peerDependencies || {}),
    // 'supabase-handler',
    // '@supabase/supabase-js',
  ], // Mark peer dependencies as external
};