import { useContext } from 'react';

import { useIncreaseIndex } from '@shared-custom-hooks/use-increase-index/use-increase-index';

import { MangaContext } from '@feat-personal-software-projects-contexts/manga-context';

import { PixelArt } from '@shared-atoms/pixel-art';
import { Title } from '@shared-atoms/title';

import { TypingDialogue } from '@shared-molecules/typing-dialogue';
import { NextStepIndicator } from '@shared-molecules/next-step-indicator';
import { HitBoxButton } from '@shared-molecules/hit-box-button';

import {
    PIXEL_ART_ANIME_STEINS_GATE_KURISU_ANIMATION,
    PIXEL_ART_ITEM_ANIME_STEINS_GATE_COMPUTERS,
    PIXEL_ART_ITEM_ANIME_STEINS_GATE_MICROWAVE
} from '@shared-atoms/pixel-art/variants';

import './style.css';


function MangaPanelExpectedResults({ isMiniatureMode = false }) {
    const { expectedResults } = useContext(MangaContext);
    const { index, increaseIndex } = useIncreaseIndex({ resetLength: expectedResults.length });

    const classList = [
        isMiniatureMode ? 'is-miniature-mode' : ''
    ];
    const title = {
        text: 'Expected Results',
        color: 'smoky-purple',
        type: 'h3'
    };


    return (
        <section className={`manga-panel-expected-results ${classList.join(' ')}`}>
            <Title {...title} />
            <TypingDialogue
                message={expectedResults[index]}
                character={PIXEL_ART_ANIME_STEINS_GATE_KURISU_ANIMATION}
            />
            {
                isMiniatureMode
                ||
                <>
                    <PixelArt character={PIXEL_ART_ITEM_ANIME_STEINS_GATE_COMPUTERS} />
                    <NextStepIndicator step={expectedResults.length} />
                    <HitBoxButton handleClick={increaseIndex}>
                        <PixelArt character={PIXEL_ART_ITEM_ANIME_STEINS_GATE_MICROWAVE} />
                    </HitBoxButton>
                </>
            }
        </section>
    );
}

export { MangaPanelExpectedResults };
