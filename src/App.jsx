import { MainHeader } from '@feat-main-header-templates/main-header';
import { MainFooter } from '@feat-main-footer-templates/main-footer';
import { WorkExperienceHistory } from '@feat-work-experience-history-templates/work-experience-history/index';
import { PersonalSoftwareProjects } from '@feat-personal-software-projects-templates/personal-software-projects/index';
import { ProfessionalProfile } from '@feat-professional-profile-templates/professional-profile/index';
import { AboutMe } from '@feat-about-me-templates/about-me/index';

import { SCROLL_PAGE_MAIN_HEADER, SCROLL_PAGE_WORK_EXPERIENCE_HISTORY } from '@shared-constants/anchor-id';
import { SCROLL_PAGE_PERSONAL_SOFTWARE_PROJECTS } from '@shared-constants/anchor-id';
import { SCROLL_PAGE_PROFESSIONAL_PROFILE } from '@shared-constants/anchor-id';
import { SCROLL_PAGE_ABOUT_ME } from '@shared-constants/anchor-id';
import { SCROLL_PAGE_MAIN_FOOTER } from '@shared-constants/anchor-id';

import './App.css';


function App() {


    return (
        <>
            <scroll-container>
                <scroll-page id={SCROLL_PAGE_MAIN_HEADER}>
                    <MainHeader />
                </scroll-page>
                <main>
                    <scroll-page id={SCROLL_PAGE_WORK_EXPERIENCE_HISTORY}>
                        <WorkExperienceHistory />
                    </scroll-page>
                    <scroll-page id={SCROLL_PAGE_PERSONAL_SOFTWARE_PROJECTS}>
                        <PersonalSoftwareProjects />
                    </scroll-page>
                    <scroll-page id={SCROLL_PAGE_ABOUT_ME}>
                        <AboutMe />
                    </scroll-page>
                    <scroll-page id={SCROLL_PAGE_PROFESSIONAL_PROFILE}>
                        <ProfessionalProfile />
                    </scroll-page>
                </main>
                <scroll-page id={SCROLL_PAGE_MAIN_FOOTER}>
                    <MainFooter />
                </scroll-page>
            </scroll-container>
        </>
    );
}

export default App;
