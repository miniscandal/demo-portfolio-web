import { useContext } from 'react';

import { MangaContext } from '@feat-home-personal-software-projects-contexts/manga-context';

import { Title } from '@shared-atoms/title';
import { CharacterSpeech } from '@shared-molecules/character-speech';

import { PIXEL_ART_ANIME_KURISU } from '@shared-molecules/pixel-art/variants';
import { PIXEL_ART_ITEM_COMPUTERS_STEINS_GATE } from '@shared-molecules/pixel-art/variants';
import { PixelArt } from '@shared-molecules/pixel-art';

import './style.css';


function MangaPanelObjectives({ readingMode = false }) {
    const { projectData: { objectives } } = useContext(MangaContext);
    const classList = [
        'manga-panel-objectives',
        readingMode ? 'reading-mode' : ''
    ];
    const title = {
        text: 'Project Objectives',
        color: 'smoky-purple',
        type: 'h3'
    };
    const characterSpeech = {
        text: objectives.technical[0],
        character: PIXEL_ART_ANIME_KURISU,
        animateText: readingMode
    };
    const pixelArt = {
        character: PIXEL_ART_ITEM_COMPUTERS_STEINS_GATE
    };

    return (
        <section className={classList.join(' ')}>
            <Title {...title} />
            <section>
                {
                    readingMode
                    &&
                    <div className='character-speech__div'>
                        <CharacterSpeech {...characterSpeech} />
                    </div>
                }

                <div className='pixel-art__div'>
                    <PixelArt {...pixelArt} />
                </div>
            </section>
        </section>
    );
}

export { MangaPanelObjectives };
