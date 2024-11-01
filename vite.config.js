import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@assets-documents': '/src/assets/documents/',
            '@assets-fonts': '/src/assets/fonts/',
            '@assets-images': '/src/assets/images/',

            '@contexts': '/src/contexts/',

            '@core': '/src/core/',

            '@feat-home-molecules': '/src/features/home/components/molecules/',
            '@feat-home-organisms': '/src/features/home/components/organisms/',
            '@feat-home-pages': '/src/features/home/components/pages/',

            '@shared-atoms': '/src/shared/components/atoms/',
            '@shared-molecules': '/src/shared/components/molecules/',
            '@shared-organisms': '/src/shared/components/organisms/',

            '@shared-constants': '/src/shared/constants/',
            '@shared-customHooks': '/src/shared/customHooks/',

            '@shared-resources-json': '/src/shared/resources/json/',

            '@shared-styles': '/src/shared/styles/',
            '@shared-utils': '/src/shared/utils/',
        }
    }
});
