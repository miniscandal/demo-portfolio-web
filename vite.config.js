import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';


export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@assets-documents': '/src/assets/documents/',
            '@assets-fonts': '/src/assets/fonts/',
            '@assets-images': '/src/assets/images/',

            '@shared-atoms': '/src/shared/components/atoms/',
            '@shared-molecules': '/src/shared/components/molecules/',
            '@shared-organisms': '/src/shared/components/organisms/',
            '@shared-constants': '/src/shared/constants/',
            '@shared-mocks': '/src/shared/mocks/',
            '@shared-resources-data': '/src/shared/resources/data/',
            '@shared-resources-contact': '/src/shared/resources/contact/',
            '@shared-styles': '/src/shared/styles/',
            '@shared-utils': '/src/shared/utils/',

            '@feat-home-root': '/src/features/home/root/',

            '@feat-home-primary-header-molecules': '/src/features/home/primary-header/components/molecules/',
            '@feat-home-primary-header-organisms': '/src/features/home/primary-header/components/organisms/',
            '@feat-home-primary-header-pages': '/src/features/home/primary-header/components/pages/',

            '@feat-home-work-experience-history-organisms': '/src/features/home/work-experience-history/components/organisms/',
            '@feat-home-work-experience-history-pages': '/src/features/home/work-experience-history/components/pages/',
            '@feat-home-work-experience-history-contexts': '/src/features/home/work-experience-history/contexts/',

            '@feat-home-primary-footer-molecules': '/src/features/home/primary-footer/components/molecules/',
            '@feat-home-primary-footer-organisms': '/src/features/home/primary-footer/components/organisms/',
            '@feat-home-primary-footer-pages': '/src/features/home/primary-footer/components/pages/',

            '@feat-home-professional-profile-organisms': '/src/features/home/professional-profile/components/organisms/',
            '@feat-home-professional-profile-pages': '/src/features/home/professional-profile/components/pages/',

            '@feat-home-personal-software-projects-molecules': '/src/features/home/personal-software-projects/components/molecules/',
            '@feat-home-personal-software-projects-organisms': '/src/features/home/personal-software-projects/components/organisms/',
            '@feat-home-personal-software-projects-templates': '/src/features/home/personal-software-projects/components/templates/',
            '@feat-home-personal-software-projects-pages': '/src/features/home/personal-software-projects/components/pages/',
            '@feat-home-personal-software-projects-constants': '/src/features/home/personal-software-projects/constants/',
            '@feat-home-personal-software-projects-contexts': '/src/features/home/personal-software-projects/contexts/'
        }
    }
});
