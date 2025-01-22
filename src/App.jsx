import { PrimaryHeader } from '@feat-primary-header-templates/primary-header';
import { PrimaryFooter } from '@feat-primary-footer-templates/primary-footer';
import { WorkExperienceHistory } from '@feat-work-experience-history-templates/work-experience-history/index';
import { PersonalSoftwareProjects } from '@feat-personal-software-projects-pages/index';
import { ProfessionalProfile } from '@feat-professional-profile-templates/index';
import { AboutMe } from '@feat-about-me-templates/index';

import { SCROLL_PAGE_WORK_EXPERIENCE_HISTORY } from '@shared-constants/anchor-id';
import { SCROLL_PAGE_PERSONAL_SOFTWARE_PROJECTS } from '@shared-constants/anchor-id';
import { SCROLL_PAGE_PROFESSIONAL_PROFILE } from '@shared-constants/anchor-id';
import { SCROLL_PAGE_ABOUT_ME } from '@shared-constants/anchor-id';
import { SCROLL_PAGE_PRIMARY_FOOTER } from '@shared-constants/anchor-id';

import './App.css';


function App() {

    return (
        <>
            <PrimaryHeader />
            <scroll-container>
                <main>
                    <scroll-page id={SCROLL_PAGE_WORK_EXPERIENCE_HISTORY}>
                        <div className='main__div'>
                            <WorkExperienceHistory />
                        </div>
                    </scroll-page>
                    <scroll-page id={SCROLL_PAGE_PERSONAL_SOFTWARE_PROJECTS}>
                        <div className='main__div'>
                            <PersonalSoftwareProjects />
                        </div >
                    </scroll-page >
                    <scroll-page id={SCROLL_PAGE_PROFESSIONAL_PROFILE}>
                        <div className='main__div'>
                            <ProfessionalProfile />
                        </div>
                    </scroll-page>
                    <scroll-page id={SCROLL_PAGE_ABOUT_ME}>
                        <div className='main__div'>
                            <AboutMe />
                        </div>
                    </scroll-page>
                </main >
                <scroll-page id={SCROLL_PAGE_PRIMARY_FOOTER}>
                    <div className='main__div'>
                        <PrimaryFooter />
                    </div>
                </scroll-page>
            </scroll-container>
        </>
    );
}

export default App;
