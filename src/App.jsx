import { PrimaryHeader } from '@feat-primary-header-templates/primary-header';
import { PrimaryFooter } from '@feat-primary-footer-pages/index';
import { WorkExperienceHistory } from '@feat-work-experience-history-templates/work-experience-history/index';

import './App.css';


function App() {

    return (
        <>
            <scroll-container>
                <PrimaryHeader />
                <main>
                    <scroll-page>
                        <div>
                            <WorkExperienceHistory />
                        </div>
                    </scroll-page>
                    <scroll-page></scroll-page>
                    <scroll-page></scroll-page>
                </main>
                <PrimaryFooter />
            </scroll-container>
        </>
    );
}

export default App;
