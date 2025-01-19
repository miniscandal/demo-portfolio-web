import { useContext } from 'react';

import { AboutMeContext } from '@feat-about-me-contexts/about-me';

import { ProfessionalProfileOverview } from '@feat-about-me-organisms/professional-profile-overview';
import { MiniGame } from '@feat-about-me-organisms/mini-game';

import './style.css';


function MainSectionRightSide() {
    const { professionalDescription, personalDescription } = useContext(AboutMeContext);

    const professionalProfileOverview = {
        descriptionMain: professionalDescription,
        descriptionSecondary: personalDescription
    };


    return (
        <div className='main-section-right-side'>
            <div className='main-section-right-side__div'>
                {/* <MiniGame /> */}
            </div>
            <ProfessionalProfileOverview {...professionalProfileOverview} />
        </div>
    );
}

export { MainSectionRightSide };
