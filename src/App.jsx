import { PrimaryHeader } from '@feat-primary-header-templates/primary-header';
import { PrimaryFooter } from '@feat-primary-footer-templates/primary-footer';
import { WorkExperienceHistory } from '@feat-work-experience-history-templates/work-experience-history/index';
import { PersonalSoftwareProjects } from '@feat-personal-software-projects-pages/index';
import { ProfessionalProfile } from '@feat-professional-profile-templates/index';
import { AboutMe } from '@feat-about-me-templates/index';

import { Manga } from '@feat-personal-software-projects-organisms/manga';
import { MangaPanel } from '@feat-personal-software-projects-organisms/manga-panel';

import { TextBoxOverlay } from '@feat-primary-header-molecules/text-box-overlay';
import { ChessboardNav } from '@feat-primary-header-organisms/chessboard-nav';
import { HeaderContent } from '@feat-primary-header-organisms/header-content';
import { ProfessionalInformation } from '@feat-primary-header-molecules/professional-information';

import './App.css';


function App() {

    return (
        <>
            <PrimaryHeader />
            {/* <scroll-container>
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
            </scroll-container> */}
        </>
    );
}

export default App;
