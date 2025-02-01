import { AboutSummary } from '@feat-about-me-molecules/about-summary';

import './style.css';


function ProfessionalProfileOverview({
    descriptionMain = undefined,
    descriptionSecondary = undefined
}) {
    const aboutSummaryMain = {
        title: 'Technical training and principles',
        description: descriptionMain
    };
    const aboutSummarySecondary = {
        title: 'Personal growth and ethical values',
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
