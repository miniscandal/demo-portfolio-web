import { useContext } from 'react';

import { MiniGameContext } from '@feat-about-me-contexts/mini-game';
import { AboutMeContext } from '@feat-about-me-contexts/about-me';

import { AboutSummary } from '@feat-about-me-molecules/about-summary';

import './style.css';


function ProfessionalProfileOverview() {
    const { professionalDescription, personalDescription } = useContext(AboutMeContext);
    const { stateGame } = useContext(MiniGameContext);

    const aboutSummary = {
        title: 'Professional Presentation',
        description: professionalDescription
    };


    return (
        <div className='professional-profile-overview'>
            <button onClick={() => stateGame.setEndGame(true)}>End Game</button>
            <div className='professional-profile-overview__div'>
                <AboutSummary {...aboutSummary} />
            </div>
            <AboutSummary />
        </div>
    );
}

export { ProfessionalProfileOverview };
