import { useContext } from 'react';

import { AboutMeContext } from '@feat-about-me-contexts/about-me';
import { MiniGameProvider } from '@feat-about-me-contexts/mini-game';

import { SelfDescription } from '@feat-about-me-molecules/self-description';
import { SelfPresentationMagicCard } from '@feat-about-me-organisms/self-presentation-magic-card';
import { MiniGame } from '@feat-about-me-organisms/mini-game';

import './style.css';


function SelfDescriptionPresentationProfile() {
    const { selfDescriptions: { personal, professional } } = useContext(AboutMeContext);


    return (
        <article className='self-description-presentation-profile'>
            <MiniGameProvider>
                <SelfPresentationMagicCard />
                <div className='self-description-presentation-profile__div'>
                    <MiniGame />
                    <SelfDescription
                        title='Technical training and principles'
                        description={professional}
                    />
                    <SelfDescription
                        title='Personal growth and ethical values'
                        description={personal}
                    />
                </div>
            </MiniGameProvider>
        </article>
    );
}

export { SelfDescriptionPresentationProfile };
