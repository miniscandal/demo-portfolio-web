import { PrimaryHeader } from '../primary-header/components/pages';
import { PerformanceAndResults } from '@feat-home-performance-and-results-pages/index';
import { PrimaryFooter } from '@feat-home-primary-footer-pages/index';
import { ProfessionalProfile } from '@feat-home-professional-profile-pages/index';
import { PersonalSoftwareProjects } from '@feat-home-personal-software-projects-pages/index';

import './style.css';


function RootHome() {

    return (
        <>
            <PrimaryHeader />
            <main>
                <div>
                    <PerformanceAndResults />
                </div>
                <div>
                    <ProfessionalProfile />
                </div>
                <div>
                    <PersonalSoftwareProjects />
                </div>
            </main>
            <PrimaryFooter />
        </>
    );
}

export { RootHome };
