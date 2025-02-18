import { PrimaryHeader } from '@feat-primary-header-templates/primary-header';
import { PrimaryFooter } from '@feat-primary-footer-templates/primary-footer';
import { WorkExperienceHistory } from '@feat-work-experience-history-templates/work-experience-history/index';
import { PersonalSoftwareProjects } from '@feat-personal-software-projects-pages/index';
import { ProfessionalProfile } from '@feat-professional-profile-templates/professional-profile/index';
import { AboutMe } from '@feat-about-me-templates/about-me/index';

import { SCROLL_PAGE_WORK_EXPERIENCE_HISTORY } from '@shared-constants/anchor-id';
import { SCROLL_PAGE_PERSONAL_SOFTWARE_PROJECTS } from '@shared-constants/anchor-id';
import { SCROLL_PAGE_PROFESSIONAL_PROFILE } from '@shared-constants/anchor-id';
import { SCROLL_PAGE_ABOUT_ME } from '@shared-constants/anchor-id';
import { SCROLL_PAGE_PRIMARY_FOOTER } from '@shared-constants/anchor-id';


import './App.css';


function App() {
    const prefersColorScheme = window.matchMedia('(prefers-color-scheme: dark)').matches;


    return (
        <>
            <div className='toggle-theme'>
                <label htmlFor='dark-theme'>
                    dark
                    <input id='dark-theme' type="radio" defaultChecked={prefersColorScheme} name='theme' />
                </label>
                <label htmlFor='light-theme'>
                    light
                    <input id='light-theme' type="radio" defaultChecked={!prefersColorScheme} name='theme' />
                </label>
            </div>
            <PrimaryHeader />
            <scroll-container>
                <main>
                    <scroll-page id={SCROLL_PAGE_WORK_EXPERIENCE_HISTORY}>
                        <WorkExperienceHistory />
                    </scroll-page>
                    <scroll-page id={SCROLL_PAGE_ABOUT_ME}>
                        <AboutMe />
                    </scroll-page>
                    <scroll-page id={SCROLL_PAGE_PERSONAL_SOFTWARE_PROJECTS}>
                        <PersonalSoftwareProjects />
                    </scroll-page >
                    <scroll-page id={SCROLL_PAGE_PROFESSIONAL_PROFILE}>
                        <ProfessionalProfile />
                    </scroll-page>
                </main>
                <scroll-page id={SCROLL_PAGE_PRIMARY_FOOTER}>
                    <PrimaryFooter />
                </scroll-page>
            </scroll-container>
        </>
    );
}

export default App;
