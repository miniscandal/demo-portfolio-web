import { useContext } from 'react';

import { AboutMeContext } from '@feat-about-me-contexts/about-me';
import { MiniGameContext } from '@feat-about-me-contexts/mini-game';

import { StepPlatform } from '@feat-about-me-molecules/step-platform';
import { ProfessionalProfileOverview } from '@feat-about-me-organisms/professional-profile-overview';

import './style.css';


function MainSectionRightSide() {
    const { stateSequenceGame: { sequenceGame } } = useContext(MiniGameContext);
    const { professionalDescription, personalDescription } = useContext(AboutMeContext);

    const miniGame = {
        sequenceGame
    };
    const professionalProfileOverview = {
        descriptionMain: professionalDescription,
        descriptionSecondary: personalDescription
    };


    return (
        <div className='main-section-right-side'>
            <div className='main-section-right-side__div'>
                <StepPlatform {...miniGame} />
            </div>
            <ProfessionalProfileOverview {...professionalProfileOverview} />
        </div>
    );
}

export { MainSectionRightSide };
