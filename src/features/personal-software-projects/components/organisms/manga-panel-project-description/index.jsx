import { useState, useContext } from 'react';

import { MangaContext } from '@feat-personal-software-projects-contexts/manga-context';

import { Title } from '@shared-atoms/title';
import { NextStepButton } from '@shared-molecules/next-step-button';
import { PixelArt } from '@shared-atoms/pixel-art';
import { HitBoxButton } from '@shared-molecules/hit-box-button';
import { TypingDialogue } from '@shared-molecules/typing-dialogue';

import { PIXEL_ART_ANIME_RINTARO } from '@shared-atoms/pixel-art/variants';
import { PIXEL_ART_ITEM_DESK } from '@shared-atoms/pixel-art/variants';
import { PIXEL_ART_ITEM_MICROWAVE_STEINS_GATE } from '@shared-atoms/pixel-art/variants';

import './style.css';


function MangaPanelProjectDescription({ isModePreview = true }) {
    const [descriptionIndex, setDescriptionIndex] = useState(0);
    const { name, descriptions } = useContext(MangaContext);

    const handleClick = () => setDescriptionIndex(prev => prev < descriptions.length - 1 ? prev + 1 : 0);

    const classList = [
        isModePreview ? 'is-mode-preview' : ''
    ];


    return (
        <div className={`manga-panel-project-description ${classList.join(' ')}`}>
            <Title text={name} type='h3' />
            <TypingDialogue
                message={descriptions[descriptionIndex]}
                character={PIXEL_ART_ANIME_RINTARO}
            />
            {
                !isModePreview
                &&
                <>
                    <PixelArt character={PIXEL_ART_ITEM_DESK} />
                    <NextStepButton />
                    <HitBoxButton handleClick={handleClick}>
                        <PixelArt character={PIXEL_ART_ITEM_MICROWAVE_STEINS_GATE} />
                    </HitBoxButton>
                </>
            }
        </div>
    );
}

export { MangaPanelProjectDescription };
