import { PrimaryHeader } from '@feat-primary-header-templates/primary-header';
import { PrimaryFooter } from '@feat-primary-footer-templates/primary-footer';
import { WorkExperienceHistory } from '@feat-work-experience-history-templates/work-experience-history/index';
import { PersonalSoftwareProjects } from '@feat-personal-software-projects-pages/index';
import { ProfessionalProfile } from '@feat-professional-profile-templates/index';
import { AboutMe } from '@feat-about-me-templates/index';

import './App.css';
import { PixelArt } from '@shared-molecules/pixel-art';
import { PIXEL_ART_ANIME_ITSUKI_NAKANO } from '@shared-molecules/pixel-art/variants';
import { PIXEL_ART_ANIME_ICHIKA_NAKANO } from '@shared-molecules/pixel-art/variants';
import { PIXEL_ART_ANIME_NINO_NAKANO } from '@shared-molecules/pixel-art/variants';
import { PIXEL_ART_ANIME_YOTSUBA_NAKANO } from '@shared-molecules/pixel-art/variants';
import { PIXEL_ART_ANIME_MIKU_NAKANO } from '@shared-molecules/pixel-art/variants';

function App() {

    return (
        <>
            <PixelArt character={PIXEL_ART_ANIME_MIKU_NAKANO} />
            <scroll-container>
                {/* <PrimaryHeader /> */}
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
        </>
    );
}

export default App;
