import { useState, useContext } from 'react';

import { MangaContext } from '@feat-personal-software-projects-contexts/manga-context';

import { Title } from '@shared-atoms/title';
import { NextStepButton } from '@shared-molecules/next-step-button';
import { CharacterSpeech } from '@shared-molecules/character-speech';
import { PixelArt } from '@shared-atoms/pixel-art';
import { HitBoxButton } from '@shared-molecules/hit-box-button';

import { PIXEL_ART_ANIME_RINTARO } from '@shared-atoms/pixel-art/variants';
import { PIXEL_ART_ITEM_DESK } from '@shared-atoms/pixel-art/variants';
import { PIXEL_ART_ITEM_MICROWAVE_STEINS_GATE } from '@shared-atoms/pixel-art/variants';

import './style.css';


function MangaPanelProjectDescription({ readingMode = false }) {
    const [descriptionIndex, setDescriptionIndex] = useState(0);
    const { projectData: { name, descriptions } } = useContext(MangaContext);

    const classList = [
        readingMode ? 'reading-mode' : ''
    ];
    const title = {
        text: name,
        color: 'smoky-purple',
        type: 'h3'
    };
    const characterSpeech = {
        text: descriptions[descriptionIndex],
        character: PIXEL_ART_ANIME_RINTARO,
        animateText: readingMode
    };
    const pixelArt = {
        character: PIXEL_ART_ITEM_DESK
    };
    const pixelArtItem = {
        character: PIXEL_ART_ITEM_MICROWAVE_STEINS_GATE
    };
    const hitBoxButton = {
        onClickCallback: () => {
            if (descriptionIndex < descriptions.length - 1) {
                setDescriptionIndex(descriptionIndex + 1);
            } else {
                setDescriptionIndex(0);
            }
        },
        readingMode
    };

    return (
        <section className={`manga-panel-project-description ${classList.join(' ')}`}>
            <Title {...title} />
            <section>
                {
                    readingMode
                    &&
                    <>
                        <div className='next-step-button__div'>
                            <NextStepButton />
                        </div>
                        <div className='pixel-art__div'>
                            <PixelArt {...pixelArt} />
                        </div>
                        <div className='pixel-art__div--item'>
                            <HitBoxButton {...hitBoxButton}>
                                <PixelArt {...pixelArtItem} />
                            </HitBoxButton>
                        </div>
                    </>
                }
                <div className='character-speech__div'>
                    <CharacterSpeech {...characterSpeech} />
                </div>
            </section>
        </section>
    );
}

export { MangaPanelProjectDescription };
