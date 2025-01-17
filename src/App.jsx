import { PrimaryHeader } from '@feat-primary-header-templates/primary-header';
import { PrimaryFooter } from '@feat-primary-footer-templates/primary-footer';
import { WorkExperienceHistory } from '@feat-work-experience-history-templates/work-experience-history/index';
import { PersonalSoftwareProjects } from '@feat-personal-software-projects-pages/index';
import { ProfessionalProfile } from '@feat-professional-profile-templates/index';
import { AboutMe } from '@feat-about-me-templates/index';

import './App.css';
import { MainSection } from '@feat-about-me-organisms/main-section';
import { DescriptiveCard } from '@feat-about-me-organisms/descriptive-card';
import { MainSectionRightSide } from '@feat-about-me-organisms/main-section-right-side';
import { ProfessionalProfileOverview } from '@feat-about-me-organisms/professional-profile-overview';
import { StepPlatform } from '@feat-about-me-molecules/step-platform';


function App() {

    return (
        <>
            <MainSectionRightSide />
            {/*
             <scroll-container>
                <PrimaryHeader />
                <main>
                    <scroll-page>
                        <div>
                            <WorkExperienceHistory />
                        </div>
                    </scroll-page>
                    <scroll-page>
                        <div>
                            <PersonalSoftwareProjects />
                        </div>
                    </scroll-page>
                    <scroll-page>
                        <div>
                            <ProfessionalProfile />
                        </div>
                    </scroll-page>
                    <scroll-page>
                        <div>
                            <AboutMe />
                        </div>
                    </scroll-page>
                </main>
                <PrimaryFooter />
            </scroll-container>
             */}
        </>
    );
}

export default App;
