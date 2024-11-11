import { PrimaryHeader } from '@feat-home-primary-header-pages/index';
import { WorkExperienceHistory } from '@feat-home-work-experience-history-pages/index';
import { PrimaryFooter } from '@feat-home-primary-footer-pages/index';
import { ProfessionalProfile } from '@feat-home-professional-profile-pages/index';
import { PersonalSoftwareProjects } from '@feat-home-personal-software-projects-pages/index';

import { TECHNICAL_COMPETENCIES_AND_EXPERTISE } from '@shared-constants/anchor-id';
import { PERSONAL_PROJECTS } from '@shared-constants/anchor-id';
import { WORK_EXPERIENCE } from '@shared-constants/anchor-id';

import './style.css';


function RootHome() {

    return (
        <>
            <scroll-container>
                <PrimaryHeader />
                <main>
                    <scroll-page id={WORK_EXPERIENCE}>
                        <WorkExperienceHistory />
                    </scroll-page>
                    <scroll-page id={TECHNICAL_COMPETENCIES_AND_EXPERTISE}>
                        <ProfessionalProfile />
                    </scroll-page>
                    <scroll-page id={PERSONAL_PROJECTS}>
                        <PersonalSoftwareProjects />
                    </scroll-page>
                </main>
                <PrimaryFooter />
            </scroll-container>
        </>
    );
}

export { RootHome };
