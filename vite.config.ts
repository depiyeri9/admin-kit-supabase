import { defineConfig } from 'vite';
import dts from 'vite-plugin-dts';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.tsx', // Entry point of your library
      name: 'AdminKitSupabase', // Global variable name for UMD builds
      fileName: (format) => `admin-kit-supabase.${format}.js`,
    },
    rollupOptions: {
      // Ensure external dependencies are not bundled
      external: ['react', 'react-dom'],
      output: {
        globals: {
          react: 'React',
          'react-dom': 'ReactDOM',
        },
      },
    },
  },
  plugins: [
    dts({
      insertTypesEntry: true, // Generate a `types` entry in package.json
    }),
  ],
});