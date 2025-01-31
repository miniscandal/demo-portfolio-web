import { useContext } from 'react';

import { ProfessionalApproachContext } from '@feat-about-me-contexts/professional-approach';

import { DecoratedTitle } from '@shared-molecules/decorated-title';

import { MainSection } from '@feat-about-me-organisms/main-section';
import { TechnologicalTools } from '@feat-about-me-organisms/technological-tools';
import { SelfDescription } from '@feat-about-me-organisms/self-description';

import { PixelArt } from '@shared-atoms/pixel-art';
import { ShelfDisplay } from '@shared-molecules/shelf-display';

import { PIXEL_ART_ANIME_MINICODE_ANIMATION_V3 } from '@shared-atoms/pixel-art/variants';
import { PIXEL_ART_ITEM_DOMO } from '@shared-atoms/pixel-art/variants';
import { PIXEL_ART_ITEM_BOOKS } from '@shared-atoms/pixel-art/variants';
import { PIXEL_ART_ANIME_MINICODE_ANIMATION_V4 } from '@shared-atoms/pixel-art/variants';
import { PIXEL_ART_ITEM_WHITEBOARD } from '@shared-atoms/pixel-art/variants';
import { PIXEL_ART_ITEM_HOURGLASS } from '@shared-atoms/pixel-art/variants';
import { PIXEL_ART_ITEM_MORTARBOARD } from '@shared-atoms/pixel-art/variants';
import { PIXEL_ART_ITEM_ARCADE } from '@shared-atoms/pixel-art/variants';
import { PIXEL_ART_ITEM_SOCCER } from '@shared-atoms/pixel-art/variants';
import { PIXEL_ART_ITEM_PENCIL_PINK } from '@shared-atoms/pixel-art/variants';

import './style.css';


function AboutMe() {
    const { goals } = useContext(ProfessionalApproachContext);

    const decoratedTitle = {
        text: 'ABOUT ME',
        color: 'light'
    };
    const selfDescriptionMain = {
        titleText: 'Professional Self Description',
        dialogTexts: goals,
        pixelArtCharacter: PIXEL_ART_ANIME_MINICODE_ANIMATION_V3,
        pixelArtObjects: [
            () => <PixelArt character={PIXEL_ART_ITEM_WHITEBOARD} />,
            () => <PixelArt character={PIXEL_ART_ITEM_HOURGLASS} />,
            () => <PixelArt character={PIXEL_ART_ITEM_MORTARBOARD} />,
            () => <PixelArt character={PIXEL_ART_ITEM_BOOKS} />
        ],
        type: 'professional-self-description'
    };
    const selfDescriptionSecondary = {
        titleText: 'Personal Self Description',
        dialogTexts: goals,
        pixelArtCharacter: PIXEL_ART_ANIME_MINICODE_ANIMATION_V4,
        pixelArtObjects: [
            () => <PixelArt character={PIXEL_ART_ITEM_ARCADE} />,
            () => <PixelArt character={PIXEL_ART_ITEM_SOCCER} />,
            () => <PixelArt character={PIXEL_ART_ITEM_PENCIL_PINK} />,
            () => (
                <ShelfDisplay>
                    <PixelArt character={PIXEL_ART_ITEM_DOMO} />
                </ShelfDisplay>)
        ],
        type: 'personal-self-description'
    };

    return (
        <article className='about-me'>
            <header>
                <DecoratedTitle {...decoratedTitle} />
            </header>
            <section>
                <MainSection />
                <TechnologicalTools />
                <div className='about-me__div'>
                    <div className='about-me__div--self-description'>
                        <SelfDescription {...selfDescriptionMain} />
                    </div>
                    <div className='about-me__div--self-description'>
                        <SelfDescription {...selfDescriptionSecondary} />
                    </div>
                </div>
            </section>
        </article >
    );
}

export { AboutMe };
