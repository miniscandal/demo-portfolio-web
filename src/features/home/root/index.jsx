import { PrimaryHeader } from '@feat-home-header-organisms/primary-header';
import { PerformanceAndResults } from '@feat-home-performance-and-results-pages/index';
import { PrimaryFooter } from '@feat-home-primary-footer-pages/index';


import './style.css';


function RootHome() {

    return (
        <>
            <PrimaryHeader />
            <main>
                <PerformanceAndResults />
            </main>
            <PrimaryFooter />
        </>
    );
}

export { RootHome };
