import { useState, useContext } from 'react';

import { MangaContext } from '@feat-personal-software-projects-contexts/manga-context';

import { Title } from '@shared-atoms/title';
import { NextStepButton } from '@shared-molecules/next-step-button';
import { PixelArt } from '@shared-atoms/pixel-art';
import { HitBoxButton } from '@shared-molecules/hit-box-button';
import { TypingDialogue } from '@shared-molecules/typing-dialogue';
import { ShelfDisplay } from '@shared-molecules/shelf-display';

import {
    PIXEL_ART_ADVENTURE_TIME_BMO,
    PIXEL_ART_ANIME_RINTARO,
    PIXEL_ART_ITEM_DESK_ANIMATION,
    PIXEL_ART_ITEM_MICROWAVE_STEINS_GATE
} from '@shared-atoms/pixel-art/variants';

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
                    <div className='manga-panel-project-description__bmo'>
                        <ShelfDisplay>
                            <PixelArt character={PIXEL_ART_ADVENTURE_TIME_BMO} />
                        </ShelfDisplay>
                    </div>
                    <PixelArt character={PIXEL_ART_ITEM_DESK_ANIMATION} />
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
