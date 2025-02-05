import { AboutSummary } from '@feat-about-me-molecules/about-summary';

import './style.css';


function ProfessionalProfileOverview({
    descriptionMain = undefined,
    descriptionSecondary = undefined
}) {

    return (
        <div className='professional-profile-overview'>
            <div className='professional-profile-overview__div'>
                <AboutSummary
                    title='Technical training and principles'
                    description={descriptionMain}
                />
            </div>
            <AboutSummary
                title='Personal growth and ethical values'
                description={descriptionSecondary}
            />
        </div>
    );
}

export { ProfessionalProfileOverview };
