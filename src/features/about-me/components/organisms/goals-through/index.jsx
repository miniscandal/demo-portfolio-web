import { useContext } from 'react';

import { ProfessionalApproachContext } from '@feat-about-me-contexts/professional-approach';

import { MyGoalsThrough } from '@feat-about-me-organisms/my-goals-through';

import { PixelArt } from '@shared-atoms/pixel-art';
import { ShelfDisplay } from '@shared-molecules/shelf-display';

import { PIXEL_ART_ANIME_MINICODE_ANIMATION_V3 } from '@shared-atoms/pixel-art/variants';
import { PIXEL_ART_ITEM_DOMO_ANIMATION } from '@shared-atoms/pixel-art/variants';
import { PIXEL_ART_ITEM_BOOKS } from '@shared-atoms/pixel-art/variants';
import { PIXEL_ART_ANIME_MINICODE_ANIMATION_V4 } from '@shared-atoms/pixel-art/variants';
import { PIXEL_ART_ITEM_WHITEBOARD } from '@shared-atoms/pixel-art/variants';
import { PIXEL_ART_ITEM_HOURGLASS } from '@shared-atoms/pixel-art/variants';
import { PIXEL_ART_ITEM_MORTARBOARD } from '@shared-atoms/pixel-art/variants';
import { PIXEL_ART_ITEM_ARCADE } from '@shared-atoms/pixel-art/variants';
import { PIXEL_ART_ITEM_SOCCER } from '@shared-atoms/pixel-art/variants';
import { PIXEL_ART_ITEM_PENCIL_PINK } from '@shared-atoms/pixel-art/variants';

import './style.css';


function GoalsThrough() {
    const { goals: { personal, professional } } = useContext(ProfessionalApproachContext);

    const selfDescriptionPrimary = {
        title: 'Social goals through my profession',
        dialogTexts: professional,
        character: PIXEL_ART_ANIME_MINICODE_ANIMATION_V3,
        pixelArtItems: () => (
            <>
                <PixelArt character={PIXEL_ART_ITEM_WHITEBOARD} />
                <PixelArt character={PIXEL_ART_ITEM_HOURGLASS} />
                <PixelArt character={PIXEL_ART_ITEM_MORTARBOARD} />
                <PixelArt character={PIXEL_ART_ITEM_BOOKS} />
            </>
        ),
        type: 'primary-scene'
    };
    const selfDescriptionSecondary = {
        title: 'Personal goals through key activities',
        dialogTexts: personal,
        character: PIXEL_ART_ANIME_MINICODE_ANIMATION_V4,
        pixelArtItems: () => (
            <>
                <PixelArt character={PIXEL_ART_ITEM_ARCADE} />
                <PixelArt character={PIXEL_ART_ITEM_SOCCER} />
                <PixelArt character={PIXEL_ART_ITEM_PENCIL_PINK} />

                <ShelfDisplay>
                    <PixelArt character={PIXEL_ART_ITEM_DOMO_ANIMATION} />
                </ShelfDisplay>
            </>
        ),
        type: 'secondary-scene'
    };

    return (
        <div className='goals-through'>
            <MyGoalsThrough {...selfDescriptionPrimary} />
            <MyGoalsThrough {...selfDescriptionSecondary} />
        </div>
    );
}

export { GoalsThrough };
