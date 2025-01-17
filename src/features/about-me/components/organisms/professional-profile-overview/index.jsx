import { AboutSummary } from '@feat-about-me-molecules/about-summary';

import './style.css';


function ProfessionalProfileOverview({
    descriptionMain = undefined,
    descriptionSecondary = undefined
}) {
    const aboutSummaryMain = {
        title: 'Professional Presentation',
        description: descriptionMain
    };
    const aboutSummarySecondary = {
        title: 'Professional Presentation',
        description: descriptionSecondary
    };


    return (
        <div className='professional-profile-overview'>
            <div className='professional-profile-overview__div'>
                <AboutSummary {...aboutSummaryMain} />
            </div>
            <AboutSummary {...aboutSummarySecondary} />
        </div>
    );
}

export { ProfessionalProfileOverview };
