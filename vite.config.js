import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';


export default defineConfig({
    plugins: [react()],
    resolve: {
        alias: {
            '@assets-documents': '/src/assets/documents/',
            '@assets-fonts': '/src/assets/fonts/',
            '@assets-images': '/src/assets/images/',

            '@core-http-client': '/src/core/http-client/',
            '@core-interceptors': '/src/core/interceptors/',
            '@core-services-api-rest-github-profile': '/src/core/services/api-rest/github-profile/',
            '@core-validators': '/src/core/validators/',

            '@feat-main-header-molecules': '/src/features/main-header/components/molecules/',
            '@feat-main-header-organisms': '/src/features/main-header/components/organisms/',
            '@feat-main-header-templates': '/src/features/main-header/components/templates/',
            '@feat-main-header-contexts': '/src/features/main-header/contexts/',

            '@feat-work-experience-history-molecules': '/src/features/work-experience-history/components/molecules/',
            '@feat-work-experience-history-organisms': '/src/features/work-experience-history/components/organisms/',
            '@feat-work-experience-history-templates': '/src/features/work-experience-history/components/templates/',
            '@feat-work-experience-history-contexts': '/src/features/work-experience-history/contexts/',
            '@feat-work-experience-history-utils': '/src/features/work-experience-history/utils/',

            '@feat-main-footer-molecules': '/src/features/main-footer/components/molecules/',
            '@feat-main-footer-organisms': '/src/features/main-footer/components/organisms/',
            '@feat-main-footer-templates': '/src/features/main-footer/components/templates/',

            '@feat-professional-profile-molecules': '/src/features/professional-profile/components/molecules/',
            '@feat-professional-profile-organisms': '/src/features/professional-profile/components/organisms/',
            '@feat-professional-profile-templates': '/src/features/professional-profile/components/templates/',
            '@feat-professional-profile-contexts': '/src/features/professional-profile/contexts/',

            '@feat-about-me-atoms': '/src/features/about-me/components/atoms/',
            '@feat-about-me-molecules': '/src/features/about-me/components/molecules/',
            '@feat-about-me-organisms': '/src/features/about-me/components/organisms/',
            '@feat-about-me-templates': '/src/features/about-me/components/templates/',
            '@feat-about-me-contexts': '/src/features/about-me/contexts/',
            '@feat-about-me-helpers': '/src/features/about-me/helpers/',
            '@feat-about-me-built-in-react-components': '/src/features/about-me/built-in-react-components/',

            '@feat-personal-software-projects-molecules': '/src/features/personal-software-projects/components/molecules/',
            '@feat-personal-software-projects-organisms': '/src/features/personal-software-projects/components/organisms/',
            '@feat-personal-software-projects-templates': '/src/features/personal-software-projects/components/templates/',
            '@feat-personal-software-projects-pages': '/src/features/personal-software-projects/components/pages/',
            '@feat-personal-software-projects-constants': '/src/features/personal-software-projects/constants/',
            '@feat-personal-software-projects-contexts': '/src/features/personal-software-projects/contexts/',

            '@shared-atoms': '/src/shared/components/atoms/',
            '@shared-molecules': '/src/shared/components/molecules/',
            '@shared-organisms': '/src/shared/components/organisms/',
            '@shared-constants': '/src/shared/constants/',
            '@shared-contexts': '/src/shared/contexts/',
            '@shared-custom-hooks': '/src/shared/custom-hooks/',
            '@shared-mocks': '/src/shared/mocks/',
            '@shared-react-components': '/src/shared/react-components/',
            '@shared-resources-documents': '/src/shared/resources/documents/',
            '@shared-resources-contact': '/src/shared/resources/contact/',
            '@shared-utils': '/src/shared/utils/'
        }
    }
});
