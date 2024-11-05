import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';


export default defineConfig({
    plugins: [react()],
    base: '/vite-react-deploy/'
    resolve: {
        alias: {
            '@assets-documents': '/src/assets/documents/',
            '@assets-fonts': '/src/assets/fonts/',
            '@assets-images': '/src/assets/images/',
            '@contexts': '/src/contexts/',

            '@core': '/src/core/',

            '@shared-atoms': '/src/shared/components/atoms/',
            '@shared-molecules': '/src/shared/components/molecules/',
            '@shared-organisms': '/src/shared/components/organisms/',

            '@shared-constants': '/src/shared/constants/',
            '@shared-customHooks': '/src/shared/customHooks/',
            '@shared-mocks': '/src/shared/mocks/',

            '@shared-resources-data': '/src/shared/resources/data/',
            '@shared-resources-contact': '/src/shared/resources/contact/',

            '@shared-styles': '/src/shared/styles/',
            '@shared-utils': '/src/shared/utils/',

            '@feat-home-root': '/src/features/home/root/',
            '@feat-home-header-molecules': '/src/features/home/primary-header/components/molecules/',
            '@feat-home-header-organisms': '/src/features/home/primary-header/components/organisms/',

            '@feat-home-performance-and-results-organisms': '/src/features/home/performance-and-results/components/organisms/',
            '@feat-home-performance-and-results-pages': '/src/features/home/performance-and-results/components/pages/',

            '@feat-home-primary-footer-molecules': '/src/features/home/primary-footer/components/molecules/',
            '@feat-home-primary-footer-pages': '/src/features/home/primary-footer/components/pages/',
        }
    }
});
