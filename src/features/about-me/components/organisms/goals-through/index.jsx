import { useContext } from 'react';

import { ProfessionalApproachContext } from '@feat-about-me-contexts/professional-approach';

import { MyGoalsThrough } from '@feat-about-me-organisms/my-goals-through';

import { FloatingShelves } from '@shared-molecules/floating-shelves';
import { PixelArt } from '@shared-atoms/pixel-art';

import { PIXEL_ART_ITEM_WHITEBOARD } from '@shared-atoms/pixel-art/variants';
import { PIXEL_ART_ITEM_HOURGLASS } from '@shared-atoms/pixel-art/variants';
import { PIXEL_ART_ITEM_MORTARBOARD } from '@shared-atoms/pixel-art/variants';
import { PIXEL_ART_ITEM_BOOKS } from '@shared-atoms/pixel-art/variants';
import { PIXEL_ART_ITEM_ARCADE } from '@shared-atoms/pixel-art/variants';
import { PIXEL_ART_ITEM_SOCCER_BALL } from '@shared-atoms/pixel-art/variants';
import { PIXEL_ART_ITEM_PENCIL_PINK } from '@shared-atoms/pixel-art/variants';
import { PIXEL_ART_ITEM_DOMO_ANIMATION } from '@shared-atoms/pixel-art/variants';

import { myGoalsThroughMain } from '@feat-about-me-organisms/my-goals-through/variants';
import { myGoalsThroughSecondary } from '@feat-about-me-organisms/my-goals-through/variants';

import './style.css';


function GoalsThrough() {
    const { goals: { personal, social } } = useContext(ProfessionalApproachContext);


    return (
        <div className='goals-through'>
            <MyGoalsThrough {...myGoalsThroughMain} texts={social}>
                <PixelArt character={PIXEL_ART_ITEM_WHITEBOARD} />
                <PixelArt character={PIXEL_ART_ITEM_HOURGLASS} />
                <PixelArt character={PIXEL_ART_ITEM_MORTARBOARD} />
                <PixelArt character={PIXEL_ART_ITEM_BOOKS} />
            </MyGoalsThrough>
            <MyGoalsThrough {...myGoalsThroughSecondary} texts={personal}>
                <PixelArt character={PIXEL_ART_ITEM_ARCADE} />
                <PixelArt character={PIXEL_ART_ITEM_SOCCER_BALL} />
                <PixelArt character={PIXEL_ART_ITEM_PENCIL_PINK} />
                <FloatingShelves>
                    <PixelArt character={PIXEL_ART_ITEM_DOMO_ANIMATION} />
                </FloatingShelves>
            </MyGoalsThrough>
        </div>
    );
}

export { GoalsThrough };
