import { useContext } from 'react';

import { MangaContext } from '@feat-home-personal-software-projects-contexts/manga-context';

import { Title } from '@shared-atoms/title';
import { PixelArt } from '@shared-molecules/pixel-art';
import { CharacterSpeech } from '@shared-molecules/character-speech';

import { PIXEL_ART_ANIME_KANAO } from '@shared-molecules/pixel-art/variants';
import { PIXEL_ART_ITEM_WHITEBOARD } from '@shared-molecules/pixel-art/variants';

import './style.css';


function MangaPanelProjectPlanning({ readingMode = false }) {
    const { name, descriptionEnglish } = useContext(MangaContext);

    const classList = [
        readingMode ? 'reading-mode' : ''
    ];
    const title = {
        text: 'Project Planning',
        color: 'smoky-purple',
        type: 'h4'
    };
    const pixelArtItem = {
        character: PIXEL_ART_ITEM_WHITEBOARD
    };
    const characterSpeech = {
        character: PIXEL_ART_ANIME_KANAO,
        animateText: readingMode
    };

    return (
        <section className={`manga-panel-project-planning ${classList.join(' ')}`}>
            <Title {...title} />
            <section>
                <PixelArt {...pixelArtItem} />
                {
                    readingMode
                    &&
                    <div className='character-speech__div'>
                        <CharacterSpeech {...characterSpeech} />
                    </div>
                }
            </section>
        </section>
    );
}

export { MangaPanelProjectPlanning };
