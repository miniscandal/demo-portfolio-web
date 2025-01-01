import { useContext } from 'react';

import { MangaContext } from '@feat-personal-software-projects-contexts/manga-context';

import { Title } from '@shared-atoms/title';
import { CharacterSpeech } from '@shared-molecules/character-speech';

import { PIXEL_ART_ANIME_KURISU } from '@shared-atoms/pixel-art/variants';
import { PIXEL_ART_ITEM_COMPUTERS_STEINS_GATE } from '@shared-atoms/pixel-art/variants';
import { PixelArt } from '@shared-atoms/pixel-art';

import './style.css';


function MangaPanelExpectedResults({ readingMode = false }) {
    const { projectData: { expectedResults } } = useContext(MangaContext);
    const classList = [
        readingMode ? 'reading-mode' : ''
    ];
    const title = {
        text: 'Expected Results',
        color: 'smoky-purple',
        type: 'h3'
    };
    const characterSpeech = {
        text: expectedResults[0],
        character: PIXEL_ART_ANIME_KURISU,
        animateText: readingMode
    };
    const pixelArt = {
        character: PIXEL_ART_ITEM_COMPUTERS_STEINS_GATE
    };

    return (
        <section className={`manga-panel-expected-results ${classList.join(' ')}`}>
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

export { MangaPanelExpectedResults };
