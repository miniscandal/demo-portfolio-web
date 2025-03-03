import { useContext } from 'react';

import { MangaContext } from '@feat-personal-software-projects-contexts/manga-context';

import { Title } from '@shared-atoms/title';
import { NextStepIndicator } from '@shared-molecules/next-step-indicator';
import { PixelArt } from '@shared-atoms/pixel-art';
import { HitBoxButton } from '@shared-molecules/hit-box-button';
import { TypingDialogue } from '@shared-molecules/typing-dialogue';
import { FloatingShelves } from '@shared-molecules/floating-shelves';

import {
    PIXEL_ART_ANIME_ADVENTURE_TIME_BMO_ANIMATION,
    PIXEL_ART_ANIME_STEINS_GATE_RINTARO_ANIMATION,
    PIXEL_ART_ITEM_DESK_ANIMATION,
    PIXEL_ART_ITEM_ANIME_STEINS_GATE_MICROWAVE
} from '@shared-atoms/pixel-art/variants';

import { useIncreaseIndex } from '@shared-custom-hooks/use-increase-index/use-increase-index';

import './style.css';


function MangaPanelProjectDescription({ isMiniatureMode = true }) {
    const { name, descriptions } = useContext(MangaContext);
    const { index, increaseIndex } = useIncreaseIndex({ resetLength: descriptions.length });

    console.log(index);

    const classList = [
        isMiniatureMode ? 'is-miniature-mode' : ''
    ];


    return (
        <div className={`manga-panel-project-description ${classList.join(' ')}`}>
            <Title text={name} type='h3' />
            <TypingDialogue
                message={descriptions[index]}
                character={PIXEL_ART_ANIME_STEINS_GATE_RINTARO_ANIMATION}
            />
            {
                !isMiniatureMode
                &&
                <>
                    <FloatingShelves>
                        <PixelArt character={PIXEL_ART_ANIME_ADVENTURE_TIME_BMO_ANIMATION} />
                    </FloatingShelves>
                    <PixelArt character={PIXEL_ART_ITEM_DESK_ANIMATION} />
                    <NextStepIndicator />
                    <HitBoxButton handleClick={increaseIndex}>
                        <PixelArt character={PIXEL_ART_ITEM_ANIME_STEINS_GATE_MICROWAVE} />
                    </HitBoxButton>
                </>
            }
        </div>
    );
}

export { MangaPanelProjectDescription };
