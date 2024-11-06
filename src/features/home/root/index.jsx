import { PrimaryHeader } from '../primary-header/components/pages';
import { PerformanceAndResults } from '@feat-home-performance-and-results-pages/index';
import { PrimaryFooter } from '@feat-home-primary-footer-pages/index';
import { ProfessionalProfile } from '@feat-home-professional-profile-pages/index';

import './style.css';


function RootHome() {

    return (
        <>
            <PrimaryHeader />
            <main>
                <PerformanceAndResults />
                <ProfessionalProfile />
            </main>
            <PrimaryFooter />
        </>
    );
}

export { RootHome };
