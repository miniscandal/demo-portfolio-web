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
            '@shared-contexts': '/src/shared/contexts/',
            '@shared-mocks': '/src/shared/mocks/',
            '@shared-resources-data': '/src/shared/resources/data/',
            '@shared-resources-contact': '/src/shared/resources/contact/',
            '@shared-styles': '/src/shared/styles/',
            '@shared-utils': '/src/shared/utils/',

            '@feat-primary-header-molecules': '/src/features/primary-header/components/molecules/',
            '@feat-primary-header-organisms': '/src/features/primary-header/components/organisms/',
            '@feat-primary-header-templates': '/src/features/primary-header/components/templates/',
            '@feat-primary-header-contexts': '/src/features/primary-header/contexts/',

            '@feat-work-experience-history-organisms': '/src/features/work-experience-history/components/organisms/',
            '@feat-work-experience-history-templates': '/src/features/work-experience-history/components/templates/',
            '@feat-work-experience-history-contexts': '/src/features/work-experience-history/contexts/',

            '@feat-primary-footer-molecules': '/src/features/primary-footer/components/molecules/',
            '@feat-primary-footer-organisms': '/src/features/primary-footer/components/organisms/',
            '@feat-primary-footer-templates': '/src/features/primary-footer/components/templates/',

            '@feat-professional-profile-organisms': '/src/features/professional-profile/components/organisms/',
            '@feat-professional-profile-templates': '/src/features/professional-profile/components/templates/',
            '@feat-professional-profile-contexts': '/src/features/professional-profile/contexts/',

            '@feat-about-me-molecules': '/src/features/about-me/components/molecules/',
            '@feat-about-me-organisms': '/src/features/about-me/components/organisms/',
            '@feat-about-me-templates': '/src/features/about-me/components/templates/',
            '@feat-about-me-contexts': '/src/features/about-me/contexts/',

            '@feat-personal-software-projects-molecules': '/src/features/personal-software-projects/components/molecules/',
            '@feat-personal-software-projects-organisms': '/src/features/personal-software-projects/components/organisms/',
            '@feat-personal-software-projects-templates': '/src/features/personal-software-projects/components/templates/',
            '@feat-personal-software-projects-pages': '/src/features/personal-software-projects/components/pages/',
            '@feat-personal-software-projects-constants': '/src/features/personal-software-projects/constants/',
            '@feat-personal-software-projects-contexts': '/src/features/personal-software-projects/contexts/'
        }
    }
});
