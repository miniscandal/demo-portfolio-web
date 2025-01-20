import { useContext } from 'react';

import { AboutMeContext } from '@feat-about-me-contexts/about-me';
import { MiniGameProvider } from '@feat-about-me-contexts/mini-game';

import { DescriptiveCard } from '@feat-about-me-organisms/descriptive-card';
import { ProfessionalProfileOverview } from '@feat-about-me-organisms/professional-profile-overview';
import { MiniGame } from '@feat-about-me-organisms/mini-game';

import './style.css';


function MainSection() {
    const { professionalDescription, personalDescription } = useContext(AboutMeContext);

    const professionalProfileOverview = {
        descriptionMain: professionalDescription,
        descriptionSecondary: personalDescription
    };


    return (
        <section className='main-section'>
            <MiniGameProvider>
                <DescriptiveCard />
                <div className='main-section__div'>
                    <div className='main-section__div--mini-game'>
                        <MiniGame />
                    </div>
                    <ProfessionalProfileOverview {...professionalProfileOverview} />
                </div>
            </MiniGameProvider>
        </section>
    );
}

export { MainSection };
