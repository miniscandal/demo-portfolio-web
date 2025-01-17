import { PrimaryHeader } from '@feat-primary-header-templates/primary-header';
import { PrimaryFooter } from '@feat-primary-footer-templates/primary-footer';
import { WorkExperienceHistory } from '@feat-work-experience-history-templates/work-experience-history/index';
import { PersonalSoftwareProjects } from '@feat-personal-software-projects-pages/index';
import { ProfessionalProfile } from '@feat-professional-profile-templates/index';
import { AboutMe } from '@feat-about-me-templates/index';

import './App.css';

import { Header } from '@feat-work-experience-history-organisms/header';
import { JobExperienceDetails } from '@feat-work-experience-history-organisms/job-experience-details';
import { RelevantSkillsExperience } from '@feat-work-experience-history-organisms/relevant-skills-experience';
import { EmploymentSummary } from '@feat-work-experience-history-organisms/employment-summary';
import { CompetencyProfessional } from '@feat-professional-profile-organisms/competency-professional';
import { AcquiredCompetencies } from '@feat-professional-profile-organisms/acquired-competencies';
import { MainSection } from '@feat-about-me-organisms/main-section';
import { TechnologicalTools } from '@feat-about-me-organisms/technological-tools';
import { SkillsImplementedWork } from '@shared-organisms/skills-implemented-work';
import { ProfessionalApproach } from '@feat-about-me-organisms/professional-approach';
import { PixelArtDialog } from '@feat-about-me-molecules/pixel-art-dialog';


function App() {

    return (
        <>
            <AboutMe />
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
