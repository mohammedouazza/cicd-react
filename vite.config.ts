import { defineConfig } from 'vite';
import { defineConfig as defineVitestConfig } from 'vitest/config';
import react from '@vitejs/plugin-react-swc';

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  test: {
    include: ['src/**/*.test.tsx', 'src/**/*.spec.tsx'],
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/setupTests.ts',
  },
});
