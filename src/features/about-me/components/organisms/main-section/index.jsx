import { useContext } from 'react';

import { AboutMeContext } from '@feat-about-me-contexts/about-me';
import { MiniGameProvider } from '@feat-about-me-contexts/mini-game';

import { DescriptiveCard } from '@feat-about-me-organisms/descriptive-card';
import { ProfessionalProfileOverview } from '@feat-about-me-organisms/professional-profile-overview';
import { MiniGame } from '@feat-about-me-organisms/mini-game';

import './style.css';


function MainSection() {
    const { selfDescriptions: { personal, professional } } = useContext(AboutMeContext);


    return (
        <section className='main-section'>
            <MiniGameProvider>
                <div className='main-section__div'>
                    <DescriptiveCard />
                </div>
                <div className='main-section__div'>
                    <div className='main-section__div--mini-game'>
                        <MiniGame />
                    </div>
                    <ProfessionalProfileOverview
                        descriptionMain={professional}
                        descriptionSecondary={personal}
                    />
                </div>
            </MiniGameProvider>
        </section>
    );
}

export { MainSection };
