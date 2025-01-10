import { AboutSummary } from '@feat-about-me-molecules/about-summary';

import './style.css';


function ProfessionalProfileOverview() {


    return (
        <div className='professional-profile-overview'>
            <div className='professional-profile-overview__div'>
                <AboutSummary />
            </div>
            <AboutSummary />
        </div>
    );
}

export { ProfessionalProfileOverview };
